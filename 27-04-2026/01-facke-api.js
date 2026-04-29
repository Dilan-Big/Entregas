// Fetch API: API JavaScript para realizar peticiones HTTP
const API = "https://fakeapi.net/products";

const calculateTotal = (products) => {

const showStock = (products) => {
    for ( let products of products ) {
        console.log (`- ${products.title } valor c/u: ${products.price}, stock: ${products.stock }, valor total: ${products.stock * products.price
        }, `);
    }
}
}

// Async / Await:
async function getProducts() {
    try {
        const response = await fetch( API );        // GET: Obtener los datos del Objeto Response (Respuesta)
        const data = await response.json();      // Obtener los datos y formaterarlos como unobjeto JSON
    
        // Implementacion
        const total = calculateTotal( data.data );

        console.log( `El valor total del inventario es: ${ total }` ); 
    } catch (error) {
        console.error( "Error al conectarse al FakeAPI" );
    }

}

getProducts();