
export function getTotalPriceProducts(productsBasket) {

  let price = 0;
  for (var product in productsBasket) {
    price += productsBasket[product].totalPriceProduct;
  }
  return price;
}

export function getTotalProducts(products) {
  let value = 0;
  for (var product in products) {
    value += products[product].quantityProduct;
  }
  return value;
}

export function saveOnLocalStorage(productsBasket, quantity) {
  var basket =
  {
    quantityBasket: quantity,
    products: productsBasket
  }
  
  localStorage.setItem("basket", JSON.stringify(basket));
}

export function getFromLocalStorage() {
  var basketStorage = localStorage.getItem("basket");
  if (basketStorage) {
    basketStorage = JSON.parse(basketStorage);
  }

  return basketStorage;
}

export function incrementCounter(product, productsBasket, quantity) {

  let numberIndex = productsBasket.findIndex(prod => prod.id === product.id);

  if (productsBasket.length === 0 || numberIndex < 0) {
    productsBasket.push(product);
  }

  product.quantityProduct += 1;
  numberIndex = productsBasket.findIndex(prod => prod.id === product.id);
  productsBasket[numberIndex].quantityProduct = product.quantityProduct;
  productsBasket[numberIndex].totalPriceProduct = product.quantityProduct * product.price;
  saveOnLocalStorage(productsBasket, quantity);
}

export function decrementCounter(product, productsBasket, quantity) {

  let numberIndex = productsBasket.findIndex(prod => prod.id === product.id);

  if ((quantity > 0 && numberIndex >= 0) || product.quantityProduct > 0) {
    product.quantityProduct -= 1;
    productsBasket[numberIndex].quantityProduct = product.quantityProduct;
    productsBasket[numberIndex].totalPriceProduct = product.quantityProduct * product.price;
    quantity--;
  }

  if (product.quantityProduct === 0) {
    var filtered = productsBasket.filter((productBasket) => { return productBasket.name !== product.name });
    productsBasket = filtered;
  }

  if (quantity === 0) {
    productsBasket = [];
  }

  saveOnLocalStorage(productsBasket);
  return { productsBasket: productsBasket, quantity: quantity, product };
}
