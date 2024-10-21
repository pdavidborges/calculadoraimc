const btnCalcular = document.querySelector('#btn-calcular');
const btnRefazer = document.querySelector('#btn-refazer');

const divCalculadora = document.querySelector('.calculadora');
const divResultado = document.querySelector('.resultado');

const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

const infoIMC = document.querySelector('#info-imc');
const infoClassificacao = document.querySelector('#info-classificacao');

//console.log(btnCalcular);
//console.log(btnRefazer);

function verificarCampos(){
    //Verificar se os valores de peso e altura são diferentes de vazio
    
    if(inputPeso.value != '' && inputAltura.value != ''){
        btnCalcular.removeAttribute('disabled');
    }

    else{
        btnCalcular.setAttribute('disabled','true');
    }

}

inputPeso.addEventListener('keyup',verificarCampos);
inputAltura.addEventListener('keyup',verificarCampos);


function calcularIMC(){
    divCalculadora.classList.add('hide');//esconde a div
    divResultado.classList.remove('hide'); //mostra a div

    //Extraindo o valor dos inputs
    //parseFloat() -> Converte um texto(string) em números reais (com casas decimais)
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

    //typeof variavel -> Retornar o tipo do dado
    //console.log(typeof peso);
    
    let imc = peso / (altura*altura);
    //console.log(imc);
    let classificacao = '';
    let cor = '';

    // && and
    // || or

    if(imc < 18.5){
        classificacao = 'Magreza';
        cor = '#FF2020';
    }

    else if(imc >= 18.5 && imc <= 24.99){
        classificacao = 'Normal';      
        cor = '#00FF19';        
    }

    else if(imc >= 25 && imc <= 29.99){
        classificacao = 'Sobrepeso';
        cor = '#FFFF00';                
    }

    else if(imc >= 30 && imc <= 39.99){
        classificacao = 'Obesidade';
        cor = '#ff0000';
    }

    else{
        classificacao = 'Obesidade Grave';
        cor = '#A90000';
    }

    //Escrevendo dentro do HTML
    infoIMC.innerHTML = imc.toFixed(2);
    infoClassificacao.innerHTML = classificacao;
    
    //Aplicando a alteração da cor
    infoIMC.style.color = cor;
    infoClassificacao.style.color = cor;
    
}//fim da função calcular

function refazerTeste(){    
    divCalculadora.classList.remove('hide');//mostra a div
    divResultado.classList.add('hide'); //esconde a div

    inputPeso.value = '';
    inputAltura.value = '';

    btnCalcular.setAttribute('disabled','true');
}

btnCalcular.addEventListener('click',calcularIMC);
btnRefazer.addEventListener('click',refazerTeste);

