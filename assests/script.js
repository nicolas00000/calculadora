const resultados = document.querySelector(".resultado")
let travar = true
function insert(numero){
    if(travar){
        resultados.innerHTML = ""
    }
    resultados.innerHTML += numero
    travar = false
}

function apagar(){
    resultados.innerHTML = "0"
    travar = true
}

function back(){
    const resultado = document.querySelector(".resultado").innerHTML    
    document.querySelector(".resultado").innerHTML = resultado.substring(0 , resultado.length - 1)
    if(resultados.innerHTML === ""){
        resultados.innerHTML = "0"
        travar = true
    }

}

function calcularResultado(){
    const resultado = document.querySelector(".resultado").innerHTML
    if(resultado){
        document.querySelector(".resultado").innerHTML = eval(resultado)
    }
}