//TODAS AS VARIÁVEIS SÃO RECEBIDAS COMO STRING
var etanol;
var gasolina;
var resultado;

function calcular(){
    let etanol = parseFloat(document.getElementById('etanol').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);

    let resultado = etanol/gasolina;

    if(etanol <= 0.7 * gasolina){
        document.getElementById('status').src="img/tanqueEtanol.png";
    }else{
        document.getElementById('status').src="img/tanqueGasolina.png"
    }
    document.getElementById("mensagem").innerHTML = `Resultado:  ${resultado.toFixed(2)}`;//serve para deixar com 2 casas decimais
}
function limpar(){
    document.getElementById('status').src="img/tanque.png";
    document.getElementById('mensagem').innerHTML='';
    document.getElementById('etanol').value='';
    document.getElementById('gasolina').value='';
}