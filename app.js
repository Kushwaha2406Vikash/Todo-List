let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");


btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let Delbtn=document.createElement("button");
    Delbtn.innerText="Delete";
    Delbtn.classList.add("delete");
    item.appendChild(Delbtn);

   ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});
/*
let delBtns=document.querySelectorAll(".delete");

for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        par.remove();
    })
}*/

