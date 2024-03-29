

let parg=document.querySelector("p")
   parg.remove();










let divbefore=document.createElement("div") 
divbefore.className="start"
divbefore.title="start elem"
divbefore.setAttribute("data-value","start")
divbefore.textContent="start"


let divafter=document.createElement("div") 
divafter.className="end"
divafter.title="end elem"
divafter.setAttribute("data-value","end")
divafter.textContent="end"

document.querySelector(".our-element").before(divbefore)
document.querySelector(".our-element").after(divafter)


//divmidle.before("Start");


//divmidle.after("end");








