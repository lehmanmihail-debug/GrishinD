function createProducts()  {
    const body = document.querySelector('body');
    const products = document.createElement('div');
    body.appendChild(products);
    products.className = "flexbox";
    const productOne = document.createElement('div');
    products.appendChild(productOne);
    const productTwo = document.createElement('div');
    products.appendChild(productTwo);
    const productThree = document.createElement('div');
    products.appendChild(productThree);

    productOne.innerHTML = `
    <img class="product" src='https://avatars.mds.yandex.net/get-entity_search/5393828/1223205091/S600xU_2x' alt="товар">
    <p>Товар 1</p>`;
    productOne.className = 'product';

    productTwo.innerHTML = `
    <img class="product" src='https://tse1.mm.bing.net/th/id/OIP.hxOX9S5tPaLSyZe68YHzUAHaFv?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=31' alt="товар">
    <p>Товар 2</p>`;
    productTwo.className = 'product';

    productThree.innerHTML = `
    <img class="product" src='https://tse2.mm.bing.net/th/id/OIP.leMJVofvrmRD4VTppC20SAHaHa?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3' alt="товар">
    <p>Товар 3</p>`;
    productThree.className = 'product';

}
createProducts()