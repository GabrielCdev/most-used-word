// Função com o uso de RegEx para remover as tags
// Tag de abertura <
// [^>] = Nega a tag de fechamento
// + = 1 ou mais elementos dentro
// > = No final, existirá uma tag de fechamento
export const removeTags = (row) => row.replace(/(<[^>]+>) /gi, "").trim();
