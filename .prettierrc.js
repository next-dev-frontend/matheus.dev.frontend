module.exports = {
  semi: false, //quando true, coloca ponto e vírgula no final de cada instrução. Quando false, remove-os
  singleQuote: true, //quando true, utiliza aspas simples para strings, em vez de aspas duplas
  arrowParents: 'avoid', //determina como os parênteses devem ser adicionados nas arrow functions. A opção "avoid" (evitar) significa que os parênteses serão removidos quando possível, por exemplo, quando a arrow function tiver apenas um parâmetro.
  trailingComma: 'none', // determina se uma vírgula adicional deve ser adicionada após o último elemento em objetos e arrays. A opção "none" remove a vírgula, enquanto "all" adiciona
  endOfLine: 'auto', //determina o tipo de quebra de linha a ser utilizado. A opção "auto" utiliza a quebra de linha do sistema operacional
  printWidth: 120, //determina o limite de caracteres por linha. Quando o código ultrapassa esse limite, o Prettier quebra a linha
  tabWidth: 2 //tabulação
}
