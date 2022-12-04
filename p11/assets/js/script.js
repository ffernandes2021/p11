
function calcular(){

    const qtdePessoas = document.querySelector("#qtdePessoas").value;  
    const consumoMedio = document.querySelector("#consumoMedio").value;
    const valorCarne = document.querySelector("#valorCarne").value;
    const totalCarneForm = document.querySelector("#totalCarne");
    const totalPorPessoaForm = document.querySelector("#totalPorPessoa");  
    
    if(qtdePessoas > 0){
        let totalCarne = consumoMedio * qtdePessoas;
        let precoTotal = totalCarne * valorCarne;
        let totalPorPessoa = precoTotal / qtdePessoas;  
        totalCarneForm.innerHTML = totalCarne;
        totalPorPessoaForm.innerHTML = totalPorPessoa;
    } else {
        document.querySelector("#error").innerHTML = "A quantidade de pessoas não pode ser inferior à 1. Tente novamente!";
    }
    
}