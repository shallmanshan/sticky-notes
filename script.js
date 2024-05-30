let text = document.getElementById("textarea");
let color = document.getElementById("color");
let btn = document.querySelector("button");
let message = document.getElementById("message");
let notes_container = document.getElementById("notes_container");

function addNotes(){
    if(text.value === ""){
        alert("Please add some notes");
        return;
    }
    message.innerText = "";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross = document.createElement("button");

    div.appendChild(p);
    div.appendChild(cross);
    
    cross.innerText = "X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;
    div.style.width = "150px";
    div.style.height = "150px";

    notes_container.appendChild(div);

    text.value = "";

    cross.addEventListener("click", function(){
        div.style.display = "none";
    })
}

btn.addEventListener("click", addNotes);