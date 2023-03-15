// Função para remover as pontuações do texto com RegEx
export const removePunctuation = (row) => row.replace(/[,?!.-] /g, "");
