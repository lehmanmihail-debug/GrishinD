const users = [
    {id: 1, name: "Иванов"}, // 0 обьект
    {id: 2, name: "Петров"},
    {id: 3, name: "Сидоров"}
]

function fillTable (data) {
    const thead = document.getElementById("thead")
    const tr = document.createElement("tr")
    const headers = Object.keys(data[0]) // выбираем ключи из 0 обьекта
    headers.forEach(header => {
        const td = document.createElement("td")
        tr.appendChild(td)
        td.textContent = header
    });

    thead.appendChild(tr)
}

fillTable(users)