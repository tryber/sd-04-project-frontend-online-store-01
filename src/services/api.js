export async function getCategories() {
  const request = fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((response) => response.json());
  return request;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  ).then((response) => response.json());
}

export const getProduct = async (productId) => {
  const request = fetch(
    `https://api.mercadolibre.com/items/${productId}`,
  ).then((response) => response.json());
  return request;
};

export const getProductsFromQuery = async (query) => {
  const request = fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  ).then((response) => response.json());
  return request;
};

export const getProductsFromCategories = async (categoryId) => {
  const request = fetch(
    ` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
  ).then((response) => response.json());
  return request;
};
