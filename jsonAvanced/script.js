let cart = [];

function start() {
    fetch('https://fakestoreapi.com/products?limit=10')
        .then(response => response.json())
        .then(data => {
            preencherCart(data);
        })
        .catch(error => {
            console.log(`Deu ruim: ${error}`);
        });
}

function preencherCart(products) {
    products.forEach(data => {
        addProducts(
            data.title,
            data.image,
            data.description,
            data.price
        );
    });
}

function addProducts(name, img, desc, cust) {
    cart.push({
        'Nome': name,
        'Imagem': img,
        'Descrição': desc,
        'Custo': Number.parseFloat(cust),
        'Quantidade': 0,
        'Total': 0.0
    });
}

// Continue com o restante do código, fazendo as correções necessárias.
