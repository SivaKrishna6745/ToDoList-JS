let list = document.querySelector("#list");

let value = document.getElementById("search");
let chbx = document.createElement("input");
chbx.setAttribute("type", "checkbox");

document.getElementById("btn").addEventListener("click", (event) => {
    let item =document.createElement("li");
    let chbx = document.createElement("input");
    chbx.setAttribute("type", "checkbox");
    chbx.setAttribute("id", (value.value + "Chbx"));

    item.id = value.value;
    item.appendChild(chbx);
    item.appendChild(document.createTextNode(value.value));

    list.appendChild(item);
    clicked(item.id);
    document.getElementById("search").value = "";

    event.preventDefault();
});

function clicked(id) {
    if(id !== null) {
        document.getElementById(id + "Chbx").addEventListener("click", () => {
            let it = document.getElementById(id);

            list.removeChild(it);
        });
    }
}

// Below is the code for toggling checkbox ...
// chbx.setAttribute("data-toggle", "off");

// below is the code for line through an item when checked ... 
// if(document.getElementById(id + "Chbx").getAttribute("data-toggle") === "off") {
//     it.style.textDecoration = "line-through";
//     document.getElementById(id + "Chbx").setAttribute("data-toggle", "on");
// } else {
//     it.style.textDecoration = "none";
//     document.getElementById(id + "Chbx").setAttribute("data-toggle", "off");
// }