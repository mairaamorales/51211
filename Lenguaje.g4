grammar Lenguaje;

// Reglas sintácticas
programa     : PROGRAMA identificador LLAVEIZQ instruccion* LLAVEDER ;

instruccion  : asignacion
             | excepcion
             | bloque
             | imprimir ;

asignacion   : identificador IGUAL expresion PUNTOYCOMA ;

excepcion    : PROCESAR bloque MANEJARERROR LPAREN identificador RPAREN bloque ;

bloque       : LLAVEIZQ instruccion* LLAVEDER ;

imprimir     : IMPRIMIR LPAREN expresion RPAREN PUNTOYCOMA ;

expresion    : termino (op termino)* ;

termino      : numero
             | identificador
             | LPAREN expresion RPAREN ;

numero       : DIGITO+ ('.' DIGITO+)? ;

identificador: LETRA (LETRA | DIGITO | '_')* ;

// operadores
op           : '+' | '-' | '*' | '/' ;

// Reglas léxicas
PROGRAMA     : 'programa' ;
PROCESAR     : 'procesar' ;
MANEJARERROR : 'manejarError' ;
IMPRIMIR     : 'imprimir' ;
MAS     : '+' ;
MENOS   : '-' ;
POR     : '*' ;
DIVIDIR : '/' ;

LLAVEIZQ     : '{' ;
LLAVEDER     : '}' ;
LPAREN       : '(' ;
RPAREN       : ')' ;
IGUAL        : '=';
PUNTOYCOMA   : ';' ;

LETRA        : [a-zA-Z] ;
DIGITO       : [0-9] ;

// Ignorar espacios y saltos de línea
WS           : [ \t\r\n]+ -> skip ;