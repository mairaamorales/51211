// Generated from c:/Users/Netbook/antlr/proyecto/Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,19,114,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,
1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,
1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,4,18,109,
8,18,11,18,12,18,110,1,18,1,18,0,0,19,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,1,0,3,2,
0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,114,0,1,1,0,0,0,0,3,1,0,0,
0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,
0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,
1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,
1,39,1,0,0,0,3,41,1,0,0,0,5,43,1,0,0,0,7,52,1,0,0,0,9,61,1,0,0,0,11,74,1,
0,0,0,13,83,1,0,0,0,15,85,1,0,0,0,17,87,1,0,0,0,19,89,1,0,0,0,21,91,1,0,
0,0,23,93,1,0,0,0,25,95,1,0,0,0,27,97,1,0,0,0,29,99,1,0,0,0,31,101,1,0,0,
0,33,103,1,0,0,0,35,105,1,0,0,0,37,108,1,0,0,0,39,40,5,46,0,0,40,2,1,0,0,
0,41,42,5,95,0,0,42,4,1,0,0,0,43,44,5,112,0,0,44,45,5,114,0,0,45,46,5,111,
0,0,46,47,5,103,0,0,47,48,5,114,0,0,48,49,5,97,0,0,49,50,5,109,0,0,50,51,
5,97,0,0,51,6,1,0,0,0,52,53,5,112,0,0,53,54,5,114,0,0,54,55,5,111,0,0,55,
56,5,99,0,0,56,57,5,101,0,0,57,58,5,115,0,0,58,59,5,97,0,0,59,60,5,114,0,
0,60,8,1,0,0,0,61,62,5,109,0,0,62,63,5,97,0,0,63,64,5,110,0,0,64,65,5,101,
0,0,65,66,5,106,0,0,66,67,5,97,0,0,67,68,5,114,0,0,68,69,5,69,0,0,69,70,
5,114,0,0,70,71,5,114,0,0,71,72,5,111,0,0,72,73,5,114,0,0,73,10,1,0,0,0,
74,75,5,105,0,0,75,76,5,109,0,0,76,77,5,112,0,0,77,78,5,114,0,0,78,79,5,
105,0,0,79,80,5,109,0,0,80,81,5,105,0,0,81,82,5,114,0,0,82,12,1,0,0,0,83,
84,5,43,0,0,84,14,1,0,0,0,85,86,5,45,0,0,86,16,1,0,0,0,87,88,5,42,0,0,88,
18,1,0,0,0,89,90,5,47,0,0,90,20,1,0,0,0,91,92,5,123,0,0,92,22,1,0,0,0,93,
94,5,125,0,0,94,24,1,0,0,0,95,96,5,40,0,0,96,26,1,0,0,0,97,98,5,41,0,0,98,
28,1,0,0,0,99,100,5,61,0,0,100,30,1,0,0,0,101,102,5,59,0,0,102,32,1,0,0,
0,103,104,7,0,0,0,104,34,1,0,0,0,105,106,7,1,0,0,106,36,1,0,0,0,107,109,
7,2,0,0,108,107,1,0,0,0,109,110,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,
111,112,1,0,0,0,112,113,6,18,0,0,113,38,1,0,0,0,2,0,110,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LenguajeLexer extends antlr4.Lexer {

    static grammarFileName = "Lenguaje.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'.'", "'_'", "'programa'", "'procesar'", 
                         "'manejarError'", "'imprimir'", "'+'", "'-'", "'*'", 
                         "'/'", "'{'", "'}'", "'('", "')'", "'='", "';'" ];
	static symbolicNames = [ null, null, null, "PROGRAMA", "PROCESAR", "MANEJARERROR", 
                          "IMPRIMIR", "MAS", "MENOS", "POR", "DIVIDIR", 
                          "LLAVEIZQ", "LLAVEDER", "LPAREN", "RPAREN", "IGUAL", 
                          "PUNTOYCOMA", "LETRA", "DIGITO", "WS" ];
	static ruleNames = [ "T__0", "T__1", "PROGRAMA", "PROCESAR", "MANEJARERROR", 
                      "IMPRIMIR", "MAS", "MENOS", "POR", "DIVIDIR", "LLAVEIZQ", 
                      "LLAVEDER", "LPAREN", "RPAREN", "IGUAL", "PUNTOYCOMA", 
                      "LETRA", "DIGITO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LenguajeLexer.EOF = antlr4.Token.EOF;
LenguajeLexer.T__0 = 1;
LenguajeLexer.T__1 = 2;
LenguajeLexer.PROGRAMA = 3;
LenguajeLexer.PROCESAR = 4;
LenguajeLexer.MANEJARERROR = 5;
LenguajeLexer.IMPRIMIR = 6;
LenguajeLexer.MAS = 7;
LenguajeLexer.MENOS = 8;
LenguajeLexer.POR = 9;
LenguajeLexer.DIVIDIR = 10;
LenguajeLexer.LLAVEIZQ = 11;
LenguajeLexer.LLAVEDER = 12;
LenguajeLexer.LPAREN = 13;
LenguajeLexer.RPAREN = 14;
LenguajeLexer.IGUAL = 15;
LenguajeLexer.PUNTOYCOMA = 16;
LenguajeLexer.LETRA = 17;
LenguajeLexer.DIGITO = 18;
LenguajeLexer.WS = 19;



