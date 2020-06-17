export async function getCategories() {
  const request = fetch('https://api.mercadolibre.com/sites/MLB/categories')
  .then((response) => response.json());
  return request;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
  .then((response) => response.json());
}
