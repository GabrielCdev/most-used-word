export function filterValidRow(row) {
  // Linhas com apenas 1 número não são linhas válidas
  const notNumber = !parseInt(row.trim());

  // Linhas vazias não são linhas válidas
  const notEmpty = !!row.trim();

  // Linhas com essa seta "-->" não são linhas válidas (intervalo de tempo em que aparecerão as legendas)
  const notInterval = !row.includes("-->");

  return notNumber && notEmpty && notInterval;
}
