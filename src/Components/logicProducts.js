
export function getTotal(productsBasket){
    
    let price = 0;
    for(var product in productsBasket)
    {
        price += productsBasket[product].totalPriceProduct; 
    }

    return price;
}



export function saveOnLocalStorage (reducerCart){
  var basket = 
  {
    quantityBasket : reducerCart.quantity,
    products : reducerCart.products
  }

  localStorage.setItem("basket", JSON.stringify(basket));
}

export function getFromLocalStorage (){
  var basketStorage = localStorage.getItem("basket");

  if(basketStorage)
  {
    basketStorage = JSON.parse(basketStorage);

  }

  return basketStorage;
}

export function incrementCounter(product, productsBasket, reducerCart) {

    let numberIndex = productsBasket.findIndex(prod => prod.id === product.id);

    if (productsBasket.length === 0 || numberIndex < 0) {
        productsBasket.push(product);
    }

    product.quantityProduct += 1;
    numberIndex = productsBasket.findIndex(prod => prod.id === product.id);
    productsBasket[numberIndex].quantityProduct = product.quantityProduct;
    productsBasket[numberIndex].totalPriceProduct = product.quantityProduct * product.price;
    reducerCart.quantity += 1;
    saveOnLocalStorage(productsBasket);
}

export function decrementCounter(product, productsBasket, reducerCart) {
    
    let numberIndex = productsBasket.findIndex(prod => prod.id === product.id);

    if ((reducerCart.quantity > 0 && numberIndex >= 0) || product.quantityProduct > 0 ) {
        product.quantityProduct -= 1;
        productsBasket[numberIndex].quantityProduct = product.quantityProduct;
        productsBasket[numberIndex].totalPriceProduct = product.quantityProduct * product.price;
        reducerCart.quantity--;
    }

    if (product.quantityProduct === 0) {
        var filtered = productsBasket.filter((productBasket) => { return productBasket.name !== product.name });
        productsBasket = filtered;
    }
    if(reducerCart.quantity === 0)
    {
        productsBasket = [];
    }
    saveOnLocalStorage(productsBasket);
    return productsBasket;
}