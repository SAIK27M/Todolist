const inputfield=document.getElementById("input-field");
const listcontainer=document.getElementById("li-container");
function Addtask(){
    if(inputfield ===''){
        alert("Please enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputfield.value
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputfield.value='';
    save();//Whenever we call the save it add the updated content in the browser
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);
function save(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function displaylist(){//Used this function so that it will not get deleted when we refresh the browser
    listcontainer.innerHTML=localStorage.getItem("data");
}
displaylist();