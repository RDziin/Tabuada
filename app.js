const btnCalcular = document.getElementById("calcular")
btnCalcular.addEventListener("click", calcular)
const element = document.body
function calcular(){
    const num = document.getElementById("numero").value
    const table = document.getElementById("myTable")
    table.innerHTML = ''
    if(num > 0){
        for(let i = 1; i <= 10; i++) {
            let result = num * i
            parseFloat(result)
            result.toFixed(2)
            table.innerHTML += "<tr><td>      " +num+ "      *      " +i+ "      </td><td> =      " +result+ "</td></tr>"
        } 
        table.style.display = "block"
    } else{
        alert("Número não reconhecido")
    }
}


