const All_Input = document.querySelectorAll(".all-input textarea");
const output = document.querySelector("#Output");
let mode = document.querySelector("#check");
const body = document.querySelector("body");

mode.addEventListener("click",()=>{
     body.classList.toggle("black");
});

All_Input.forEach((textarea,index) =>{
    textarea.addEventListener("keyup",()=>{
        if(index === 0){
            output.contentDocument.body.innerHTML = textarea.value;
        }
        if(index === 1){
            output.contentDocument.head.innerHTML = `<style>${textarea.value}</style>`;
        }
        if(index === 2){
            output.contentWindow.eval(textarea.value);
        }
    });
});