export async function getCategories() {
  const request = fetch("https://api.mercadolibre.com/sites/MLB/categories")
  .then(response => response.json())
  return request;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
