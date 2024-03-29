


let add=document.querySelector(".classes-to-add")
let remove=document.querySelector(".classes-to-remove")
let div=document.querySelector("[title ='Current']")

let elm=document.querySelector(".classes-list div")

/*add.onblur=function(){
    add.remove();
    add.value="";
}
remove.onblur=function(){
    addRom();
    remove.value="";
}*/
add.onblur=addRom;
remove.onblur=addRom;


function addRom(){//remove all span
    document.querySelectorAll("span").forEach(e=>e.remove())
for(let i=0 ;i<this.value.trim().split(" ").length;i++){
    if(add.value){//trim efface espace
       div.classList.add(add.value.trim().toLowerCase().split(" ")[i]);
        }
        if (remove.value) {
            div.classList.remove(remove.value.trim().toLowerCase().split(" ")[i]);
            }
        }
        this.value="";
//add remove span

            if (div.classList.length) {
            [...div.classList].sort().forEach(e => {
            let span = document.createElement("span");
            span.textContent = e;
            elm.appendChild(span);
            })

            } else {
            elm.innerHTML = "No Classes To Show";
            }
            }

