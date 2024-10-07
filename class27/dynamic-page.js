console.log("dynamic");

window.onload = () => {
    // console.log("before");
    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            // console.log(response, 'response');
            console.log(products, 'products');
            createUI(products)
        } catch (error) {
            console.log(error, "error");
        }
        finally {
            // code that will be execute everytime
        }
    }

    // console.log("after");
    getProducts();

    function createUI(products) {
        console.log('products', products);
        const productCards = products.map((product, index) => {
            console.log(product, 'product');

            return `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card" style="width: 100%;">
  <img src="${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <span class="badge text-bg-primary">${product.category}</span>
  </div>
 </div>
            </div>`
        })

        console.log(productCards, 'productCards');
        const productCardsInnerHTML = productCards.join("")
        console.log(productCardsInnerHTML, 'productCardsInnerHTML');

        document.querySelector(".container").innerHTML = `<div class="row gy-3">${productCardsInnerHTML}</div>`
    }
}
// window.onload = function () {

// }
