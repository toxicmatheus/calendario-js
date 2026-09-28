let mes = document.querySelector('#mes');
let dia = document.querySelector('#dia');
let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

for(let m = 0; m < meses.length; m++){
    mes.innerHTML += `<option class="text-black">${meses[m]}</option>`;
}

for(let d = 1; d <= 31; d++){
    dia.innerHTML += `<option class="text-black">${d}</option>`;
}

function descobrirNome(){
    let nome ="";
    if(mes.value == "Jan"){
        nome = "Dante"
    } else if(mes.value == "Fev"){
        nome = "Link"
    }
    console.log(mes.value);
    console.log(dia.value);
    
}