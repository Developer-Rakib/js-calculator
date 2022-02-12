let input = document.querySelector(".input");
let clearBtn = document.querySelector(".clear");
let resultBtn = document.querySelector(".equal");
let result = "";

function argument1 (a , x) {
    let result = input.value = a + x;
    return result
    
}

let btns = document.querySelectorAll(".calc");

clearBtn.addEventListener("click", function  () {
    input.value = "";
})
for (const btn of btns) {
    btn.addEventListener("click", function  (e) {
    result = argument1(input.value, e.target.innerText)
       
    })
}
resultBtn.addEventListener("click", function () {
    input.value = eval(result);

})
