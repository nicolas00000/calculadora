const resultado = document.querySelector(".resultado")
 
function insert(numero){
    resultado.innerHTML += numero
}

function apagar(){
    resultado.innerHTML = ""
}

function back(){
    const resultado = document.querySelector(".resultado").innerHTML
    document.querySelector(".resultado").innerHTML = resultado.substring(0 , resultado.length - 1)
}

function calcularResultado(){
    const resultado = document.querySelector(".resultado").innerHTML
    if(resultado){
        document.querySelector(".resultado").innerHTML = eval(resultado)
    }
}