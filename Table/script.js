const users = [
    {id: 1, name: "Иванов"}, // 1 обьект (0 индекс)
    {id: 2, name: "Петров"},
    {id: 3, name: "Сидоров"}
]

function fillTable (data) {
    const thead = document.getElementById("thead")
    const tbody = document.getElementById("tbody")
    const tr = document.createElement("tr")
    const headers = Object.keys(data[0]) // выбираем ключи из 1 обьекта (0 индекс)

    headers.forEach(header => {
        const td = document.createElement("td")
        tr.appendChild(td)
        td.textContent = header
    });

    thead.appendChild(tr)

    data.forEach(item => {
        const tbodytr = document.createElement("tr");
        
        headers.forEach(header => {
            const td = document.createElement("td");
            td.textContent = item[header];
            tbodytr.appendChild(td);
        });
        
        tbody.appendChild(tbodytr);
    });
}

fillTable(users)