// Generated from c:/Users/Netbook/antlr/proyecto/Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,19,107,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,5,0,
27,8,0,10,0,12,0,30,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,38,8,1,1,2,1,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,5,4,55,8,4,10,4,12,4,58,9,
4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,72,8,6,10,6,12,6,75,
9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,83,8,7,1,8,4,8,86,8,8,11,8,12,8,87,1,8,1,
8,4,8,92,8,8,11,8,12,8,93,3,8,96,8,8,1,9,1,9,5,9,100,8,9,10,9,12,9,103,9,
9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,2,2,0,2,2,17,18,1,
0,7,10,107,0,22,1,0,0,0,2,37,1,0,0,0,4,39,1,0,0,0,6,44,1,0,0,0,8,52,1,0,
0,0,10,61,1,0,0,0,12,67,1,0,0,0,14,82,1,0,0,0,16,85,1,0,0,0,18,97,1,0,0,
0,20,104,1,0,0,0,22,23,5,3,0,0,23,24,3,18,9,0,24,28,5,11,0,0,25,27,3,2,1,
0,26,25,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,31,1,0,0,0,
30,28,1,0,0,0,31,32,5,12,0,0,32,1,1,0,0,0,33,38,3,4,2,0,34,38,3,6,3,0,35,
38,3,8,4,0,36,38,3,10,5,0,37,33,1,0,0,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,
1,0,0,0,38,3,1,0,0,0,39,40,3,18,9,0,40,41,5,15,0,0,41,42,3,12,6,0,42,43,
5,16,0,0,43,5,1,0,0,0,44,45,5,4,0,0,45,46,3,8,4,0,46,47,5,5,0,0,47,48,5,
13,0,0,48,49,3,18,9,0,49,50,5,14,0,0,50,51,3,8,4,0,51,7,1,0,0,0,52,56,5,
11,0,0,53,55,3,2,1,0,54,53,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,
0,0,57,59,1,0,0,0,58,56,1,0,0,0,59,60,5,12,0,0,60,9,1,0,0,0,61,62,5,6,0,
0,62,63,5,13,0,0,63,64,3,12,6,0,64,65,5,14,0,0,65,66,5,16,0,0,66,11,1,0,
0,0,67,73,3,14,7,0,68,69,3,20,10,0,69,70,3,14,7,0,70,72,1,0,0,0,71,68,1,
0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,13,1,0,0,0,75,73,1,0,
0,0,76,83,3,16,8,0,77,83,3,18,9,0,78,79,5,13,0,0,79,80,3,12,6,0,80,81,5,
14,0,0,81,83,1,0,0,0,82,76,1,0,0,0,82,77,1,0,0,0,82,78,1,0,0,0,83,15,1,0,
0,0,84,86,5,18,0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,
0,88,95,1,0,0,0,89,91,5,1,0,0,90,92,5,18,0,0,91,90,1,0,0,0,92,93,1,0,0,0,
93,91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,89,1,0,0,0,95,96,1,0,0,0,96,
17,1,0,0,0,97,101,5,17,0,0,98,100,7,0,0,0,99,98,1,0,0,0,100,103,1,0,0,0,
101,99,1,0,0,0,101,102,1,0,0,0,102,19,1,0,0,0,103,101,1,0,0,0,104,105,7,
1,0,0,105,21,1,0,0,0,9,28,37,56,73,82,87,93,95,101];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'.'", "'_'", "'programa'", "'procesar'", 
                            "'manejarError'", "'imprimir'", "'+'", "'-'", 
                            "'*'", "'/'", "'{'", "'}'", "'('", "')'", "'='", 
                            "';'" ];
    static symbolicNames = [ null, null, null, "PROGRAMA", "PROCESAR", "MANEJARERROR", 
                             "IMPRIMIR", "MAS", "MENOS", "POR", "DIVIDIR", 
                             "LLAVEIZQ", "LLAVEDER", "LPAREN", "RPAREN", 
                             "IGUAL", "PUNTOYCOMA", "LETRA", "DIGITO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "asignacion", "excepcion", 
                         "bloque", "imprimir", "expresion", "termino", "numero", 
                         "identificador", "op" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(LenguajeParser.PROGRAMA);
	        this.state = 23;
	        this.identificador();
	        this.state = 24;
	        this.match(LenguajeParser.LLAVEIZQ);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 133200) !== 0)) {
	            this.state = 25;
	            this.instruccion();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 31;
	        this.match(LenguajeParser.LLAVEDER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_instruccion);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.asignacion();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.excepcion();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.bloque();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 36;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.identificador();
	        this.state = 40;
	        this.match(LenguajeParser.IGUAL);
	        this.state = 41;
	        this.expresion();
	        this.state = 42;
	        this.match(LenguajeParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	excepcion() {
	    let localctx = new ExcepcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_excepcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(LenguajeParser.PROCESAR);
	        this.state = 45;
	        this.bloque();
	        this.state = 46;
	        this.match(LenguajeParser.MANEJARERROR);
	        this.state = 47;
	        this.match(LenguajeParser.LPAREN);
	        this.state = 48;
	        this.identificador();
	        this.state = 49;
	        this.match(LenguajeParser.RPAREN);
	        this.state = 50;
	        this.bloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(LenguajeParser.LLAVEIZQ);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 133200) !== 0)) {
	            this.state = 53;
	            this.instruccion();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 59;
	        this.match(LenguajeParser.LLAVEDER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(LenguajeParser.IMPRIMIR);
	        this.state = 62;
	        this.match(LenguajeParser.LPAREN);
	        this.state = 63;
	        this.expresion();
	        this.state = 64;
	        this.match(LenguajeParser.RPAREN);
	        this.state = 65;
	        this.match(LenguajeParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.termino();
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1920) !== 0)) {
	            this.state = 68;
	            this.op();
	            this.state = 69;
	            this.termino();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeParser.RULE_termino);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.numero();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.identificador();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 78;
	            this.match(LenguajeParser.LPAREN);
	            this.state = 79;
	            this.expresion();
	            this.state = 80;
	            this.match(LenguajeParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LenguajeParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 84;
	            this.match(LenguajeParser.DIGITO);
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===18);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 89;
	            this.match(LenguajeParser.T__0);
	            this.state = 91; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 90;
	                this.match(LenguajeParser.DIGITO);
	                this.state = 93; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===18);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LenguajeParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(LenguajeParser.LETRA);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 393220) !== 0)) {
	            this.state = 98;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 393220) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LenguajeParser.RULE_op);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1920) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.T__0 = 1;
LenguajeParser.T__1 = 2;
LenguajeParser.PROGRAMA = 3;
LenguajeParser.PROCESAR = 4;
LenguajeParser.MANEJARERROR = 5;
LenguajeParser.IMPRIMIR = 6;
LenguajeParser.MAS = 7;
LenguajeParser.MENOS = 8;
LenguajeParser.POR = 9;
LenguajeParser.DIVIDIR = 10;
LenguajeParser.LLAVEIZQ = 11;
LenguajeParser.LLAVEDER = 12;
LenguajeParser.LPAREN = 13;
LenguajeParser.RPAREN = 14;
LenguajeParser.IGUAL = 15;
LenguajeParser.PUNTOYCOMA = 16;
LenguajeParser.LETRA = 17;
LenguajeParser.DIGITO = 18;
LenguajeParser.WS = 19;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_instruccion = 1;
LenguajeParser.RULE_asignacion = 2;
LenguajeParser.RULE_excepcion = 3;
LenguajeParser.RULE_bloque = 4;
LenguajeParser.RULE_imprimir = 5;
LenguajeParser.RULE_expresion = 6;
LenguajeParser.RULE_termino = 7;
LenguajeParser.RULE_numero = 8;
LenguajeParser.RULE_identificador = 9;
LenguajeParser.RULE_op = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	PROGRAMA() {
	    return this.getToken(LenguajeParser.PROGRAMA, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LLAVEIZQ() {
	    return this.getToken(LenguajeParser.LLAVEIZQ, 0);
	};

	LLAVEDER() {
	    return this.getToken(LenguajeParser.LLAVEDER, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	excepcion() {
	    return this.getTypedRuleContext(ExcepcionContext,0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_asignacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	IGUAL() {
	    return this.getToken(LenguajeParser.IGUAL, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(LenguajeParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExcepcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_excepcion;
    }

	PROCESAR() {
	    return this.getToken(LenguajeParser.PROCESAR, 0);
	};

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	MANEJARERROR() {
	    return this.getToken(LenguajeParser.MANEJARERROR, 0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterExcepcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitExcepcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitExcepcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_bloque;
    }

	LLAVEIZQ() {
	    return this.getToken(LenguajeParser.LLAVEIZQ, 0);
	};

	LLAVEDER() {
	    return this.getToken(LenguajeParser.LLAVEDER, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(LenguajeParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(LenguajeParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	op = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpContext);
	    } else {
	        return this.getTypedRuleContext(OpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_termino;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.DIGITO);
	    } else {
	        return this.getToken(LenguajeParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.LETRA);
	    } else {
	        return this.getToken(LenguajeParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.DIGITO);
	    } else {
	        return this.getToken(LenguajeParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_op;
    }

	MAS() {
	    return this.getToken(LenguajeParser.MAS, 0);
	};

	MENOS() {
	    return this.getToken(LenguajeParser.MENOS, 0);
	};

	POR() {
	    return this.getToken(LenguajeParser.POR, 0);
	};

	DIVIDIR() {
	    return this.getToken(LenguajeParser.DIVIDIR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.InstruccionContext = InstruccionContext; 
LenguajeParser.AsignacionContext = AsignacionContext; 
LenguajeParser.ExcepcionContext = ExcepcionContext; 
LenguajeParser.BloqueContext = BloqueContext; 
LenguajeParser.ImprimirContext = ImprimirContext; 
LenguajeParser.ExpresionContext = ExpresionContext; 
LenguajeParser.TerminoContext = TerminoContext; 
LenguajeParser.NumeroContext = NumeroContext; 
LenguajeParser.IdentificadorContext = IdentificadorContext; 
LenguajeParser.OpContext = OpContext; 
