function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = "<h1>Добро пожаловать!</h1>";
    document.body.appendChild(header);
}
function createMain() {
    const main = document.createElement("main");
    main.appendChild(createImgBlock("Эту кошку зовут Мурка", "https://static.wikia.nocookie.net/your-guide-to-cats/images/0/06/Tabby-M.jpg/revision/latest?cb=20160115221306"));
    main.appendChild(createImgBlock("Этого кота зовут Тимофей", "https://i.pinimg.com/originals/ae/cf/e1/aecfe1897f90ae13f077fba872a6b6ac.png?nii=t"));
    main.appendChild(createForm())
    main.className = "container";
    document.body.appendChild(main);
}
function createImgBlock(text, imgSrc) {
    const block = document.createElement("div");
    block.className = "text-block";
    block.innerHTML = `<p>${text}</p>
    <img class="image" src='${imgSrc}' alt="кот">`;
    return block;
}
function createForm() {
    const formcontainer = document.createElement('div');
    formcontainer.className = 'form-container';
    formcontainer.innerHTML =`
        <h3>Оставьте заявку</h3>
        <form>
            <input type="text" placeholder="От кого">
            <input type="text" placeholder="Кому">
            <button type="submit">Отправить</button>
        </form>
    `;
    return formcontainer;
}
function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML ="<h4>2026 права защищены</h4>";
    document.body.appendChild(footer);
}



createHeader();
createMain(); 
createFooter();