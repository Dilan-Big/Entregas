const API = "https://fakeapi.net/products?limit=20";

async function getProducts() {
    const response = await fetch(API);
    const data = await response.json();

    const products = data.data;

    const populares = [];

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        if (
            product.rating.rate >= 4.7 &&
            product.rating.count > 100
        ) {
            populares.push(product);
        }
    }

    console.log("Productos populares:");
    console.log(populares);

    for (let i = 0; i < populares.length; i++) {
        console.log(
            populares[i].title,
            " - ", populares[i].rating.rate,
            " - ", populares[i].rating.count
        );
    }
}

getProducts();