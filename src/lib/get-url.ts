// Essa função é útil para garantir que as URLs sejam construídas de maneira consistente
// em todo o aplicativo. Por exemplo, se você tiver uma variável de ambiente NEXT_PUBLIC_APP_URL definida como
// ‘https://meusite.com’ e chamar getUrl('pagina'), a função retornará ‘https://meusite.com/pagina’.

export function getUrl(path?: string) {
  // Esta linha obtém a URL base do ambiente (variável de ambiente NEXT_PUBLIC_APP_URL). Se essa variável de ambiente não estiver definida, ela usará uma string vazia como URL base.
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";
  // Esta linha verifica se um caminho foi fornecido e se ele começa com uma barra ('/'). Se um caminho foi fornecido e não começa com uma barra, ele adiciona uma. Se nenhum caminho foi fornecido, ele usa uma string vazia.
  const normalizedPath = path && !path.startsWith("/") ? `/${path}` : path || "";
  // Esta linha retorna a URL completa, que é a combinação da URL base e do caminho normalizado.
  return `${baseUrl}${normalizedPath}`;
}
