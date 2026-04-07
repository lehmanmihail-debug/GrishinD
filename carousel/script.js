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
    <img class="product" src='https://avatars.mds.yandex.net/i?id=f50e467fee02dce6ebac8d40a09a0ded_sr-9729437-images-thumbs&n=13' alt="товар">
    <p>Товар 2</p>`;
    productTwo.className = 'product';

    productThree.innerHTML = `
    <img class="product" src='https://media.istockphoto.com/id/2148107100/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D1%87%D0%B0%D0%B9%D0%BD%D0%B8%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=w5my4you7r5CksvheLlWEvhGYPxG1dv-rFg4Qo-8AZg=' alt="товар">
    <p>Товар 3</p>`;
    productThree.className = 'product';

}
createProducts()