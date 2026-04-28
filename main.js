const input = document.getElementById("input");
const list = document.getElementById("list");

function addItem() {
    const item = document.createElement("div");
    item.classList.add('list-items')
    item.textContent = input.value;
    list.append(item);
}