let list = document.querySelector("#list");

let value = document.getElementById("search");

// document.getElementById("search").addEventListener("change", () => {
//     value = .value;
// });

document.getElementById("btn").addEventListener("click", (event) => {
    let item =document.createElement("li");
    item.appendChild(document.createTextNode(value.value));
    list.appendChild(item);
    document.getElementById("search").value = "";
    event.preventDefault();
});
