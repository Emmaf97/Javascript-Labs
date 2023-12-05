function doAction(){
    alert("doAction running");
}
function registerclick(){
    let mybtn= document.getElementById("mybtn");
    mybtn.addEventListener("click", doAction);
}