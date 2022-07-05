const input = document.getElementById("iconShare");
      input.addEventListener("click",activate);

const contentShareActivate = document.getElementById("contentShare");
const contentProfileActivate = document.getElementById("contentProfile");




function activate() {
    if(input.checked){
        console.log("yes")
        contentShareActivate.style.opacity = "100";
        contentProfileActivate.style.opacity = "0";
    }else{
        console.log("no")
        contentShareActivate.style.opacity = "0";
        contentProfileActivate.style.opacity = "100";
    }
}