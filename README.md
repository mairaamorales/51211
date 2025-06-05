
# Analizador Sintáctico - Legajo 51211

Este proyecto es un analizador léxico y sintáctico implementado con *ANTLR4 y Node.js*, que interpreta un lenguaje personalizado con bloques, asignaciones, impresión y manejo de excepciones.

# Requisitos

Antes de ejecutar este proyecto, asegurate de tener instalados los siguientes elementos:

. Node.js (versión 16 o superior)

. Java JRE

. ANTLR4

. Visual Studio Code

. Extensión de ANTLR4 para VS Code


## 📁 Estructura del Proyecto

miproyectoo/ ├── antlr-4.13.2-complete.jar ├── generated/                     # Archivos generados por ANTLR (Lexer, Parser, Visitor) ├── node_modules/ ├── antlr/ │   └── Lenguaje.g4               # Archivo de gramática ├── index.js                      # Archivo principal que ejecuta el análisis ├── input.txt                     # Archivo de entrada con código a interpretar ├── CustomLenguajeVisitor.js      # Visitor personalizado para interpretar el lenguaje ├── package.json                  # Configuración del proyecto Node.js ├── package-lock.json ├── test-impor.js                 # (opcional) para pruebas └── README.md                     # Este archivo




## 📜 Gramática del Lenguaje

El lenguaje definido reconoce estructuras como:

```antlr
programa <identificador> {
  <instrucción>*
}

<instrucción> ::= 
    <asignación> |
    <excepción> |
    <bloque> |
    <imprimir> ;

Ejemplo válido:

programa principal {
  x = 5;
  imprimir(x);
  procesar {
    y = x / 0;
  } manejarError(e) {
    imprimir(e);
  };
}


---

▶ Cómo Ejecutar el Proyecto

1. Clonar el repositorio

git clone https://github.com/mairaamorales/51211.git

cd 51211

code .

2. Instalar dependencias

npm install

3. Generar archivos de ANTLR (si no están)

java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -no-listener antlr/Lenguaje.g4 -o generated

> Asegurate de tener Java instalado.



4. Ejecutar el analizador

npm start

> El archivo input.txt será interpretado, y verás la tabla de tokens, el árbol sintáctico y el resultado de ejecutar el programa.




---

📂 Archivos de ejemplo

El repositorio contiene ejemplos de entrada:

input.txt — código válido para probar el analizador.

ejemplo1.txt, ejemplo2.txt — casos válidos.

error1.txt, error2.txt — casos con errores sintácticos.



---

ℹ Notas adicionales

Si hay errores léxicos o sintácticos, se mostrarán con línea y columna.

El visitor interpreta asignaciones, operaciones y manejo de errores (procesar / manejarError).

Todo el proyecto se ejecuta desde Visual Studio Code o cualquier consola con Node.js y Java instalados.



---

Nombre: Maira Morales
Legajo: 51211
Materia: Sintaxis y Semántica de los Los lenguajes

