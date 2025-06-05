import antlr4 from 'antlr4';
import fs from 'fs';
import LenguajeLexer from './generated/LenguajeLexer.js';
import LenguajeParser from './generated/LenguajeParser.js';
import LenguajeVisitor from './generated/LenguajeVisitor.js';

// Leer input
const input = fs.readFileSync('./input.txt', 'utf8');
console.log("Analizando archivo...\n");

const chars = new antlr4.InputStream(input);
const lexer = new LenguajeLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

tokens.fill();
console.table(tokens.tokens
    .filter(t => t.type !== -1)
    .map(t => ({
        Token: LenguajeLexer.symbolicNames[t.type],
        Lexema: t.text,
        Línea: t.line,
        Columna: t.column
    }))
);

const parser = new LenguajeParser(tokens);
parser.buildParseTrees = true;

class ErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        console.error(`❌ Error en línea ${line}, columna ${column}: ${msg}`);
    }
}
parser.removeErrorListeners();
parser.addErrorListener(new ErrorListener());
lexer.removeErrorListeners();
lexer.addErrorListener(new ErrorListener());

const tree = parser.programa();

console.log("\n Árbol de análisis sintáctico:");
console.log(tree.toStringTree(parser.ruleNames));

class Interpreter extends LenguajeVisitor {
    constructor() {
        super();
        this.variables = {};
    }

    visitPrograma(ctx) {
        return this.visitChildren(ctx);
    }

    visitBloque(ctx) {
        for (let instr of ctx.instruccion()) {
            this.visit(instr);
        }
        return null;
    }

    visitAsignacion(ctx) {
        const name = ctx.identificador().getText();
        const value = this.visit(ctx.expresion());
        this.variables[name] = value;
        console.log(`📝 Variable asignada: ${name} = ${value}`);
        return null;
    }

    visitImprimir(ctx) {
        const value = this.visit(ctx.expresion());
        console.log(`🖨 Imprimir: ${value}`);
        return null;
    }

    visitExcepcion(ctx) {
        try {
            this.visit(ctx.bloque(0)); // procesar
        } catch (e) {
            const varName = ctx.identificador().getText();
            this.variables[varName] = e.message;
            console.warn(`⚠ Error capturado: ${e.message}`);
            this.visit(ctx.bloque(1)); // manejarError
        }
        return null;
    }

    visitExpresion(ctx) {
        if (ctx.termino().length === 1 && !ctx.op()) {
            return this.visit(ctx.termino(0));
        }
        let result = this.visit(ctx.termino(0));
        for (let i = 1; i < ctx.termino().length; i++) {
            const right = this.visit(ctx.termino(i));
            const operator = ctx.op(i - 1).getText();
            switch (operator) {
                case '+': result += right; break;
                case '-': result -= right; break;
                case '*': result *= right; break;
                case '/': result /= right; break;
            }
        }
        return result;
    }

    visitTermino(ctx) {
        if (ctx.numero()) return this.visit(ctx.numero());
        if (ctx.identificador()) return this.visitTerminoIdentificador(ctx.identificador());
        if (ctx.expresion()) return this.visit(ctx.expresion());
    }

    visitTerminoIdentificador(ctx) {
        const name = ctx.getText();
        if (this.variables.hasOwnProperty(name)) {
            return this.variables[name];
        } else {
            throw new Error(`Variable ${name} no definida`);
        }
    }

    visitNumero(ctx) {
        return parseFloat(ctx.getText());
    }
}

const visitor = new Interpreter();
visitor.visit(tree);