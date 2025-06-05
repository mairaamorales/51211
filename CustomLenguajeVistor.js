const LenguajeVisitor = require('./LenguajeVisitor').LenguajeVisitor;

class CustomLenguajeVisitor extends LenguajeVisitor {
  constructor() {
    super();
    this.variables = {};
  }

  visitPrograma(ctx) {
    return this.visitChildren(ctx);
  }

  visitAsignacion(ctx) {
    const id = ctx.identificador().getText();
    const value = this.visit(ctx.expresion());
    this.variables[id] = value;
    console.log(`Variable asignada: ${id} = ${value}`);
    return value;
  }

  visitImprimir(ctx) {
    const value = this.visit(ctx.expresion());
    console.log(`Imprimir: ${value}`);
    return value;
  }

  visitExcepcion(ctx) {
    try {
      this.visit(ctx.bloque(0)); // bloque dentro de procesar
    } catch (e) {
      console.log(`Excepción capturada: ${e.message}`);
      this.visit(ctx.bloque(1)); // bloque dentro de manejarError
    }
  }

  visitBloque(ctx) {
    return this.visitChildren(ctx);
  }

  visitExpresion(ctx) {
    const terminos = ctx.termino();
    if (terminos.length === 2) {
      const left = this.visit(terminos[0]);
      const op = ctx.op().getText();
      const right = this.visit(terminos[1]);
      switch (op) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return right !== 0 ? left / right : 'Error: división por cero';
        default: return 0;
      }
    } else {
      return this.visit(terminos[0]);
    }
  }

  visitTermino(ctx) {
    if (ctx.numero()) {
      return this.visit(ctx.numero());
    } else if (ctx.identificador()) {
      return this.visit(ctx.identificador());
    } else {
      return this.visit(ctx.expresion());
    }
  }

  visitNumero(ctx) {
    return parseInt(ctx.getText());
  }

  visitIdentificador(ctx) {
    const id = ctx.getText();
    if (this.variables[id] !== undefined) {
      return this.variables[id];
    } else {
      console.log(`Variable no definida: ${id}`);
      return 0;
    }
  }
}

module.exports = CustomLenguajeVisitor;