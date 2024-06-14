let result = document.getElementById("result")
// result.value="23"
// console.log(result.value)

function appendtodisplay(input){
    result.value += input
}


function Clear(){
    result.value = "";
    // console.log("clear")
}

function equalto(){
    // console.log("hello")
    try {
        result.value = eval(result.value)
    } catch  {
        result.value = "Syntax Error"
    }
}