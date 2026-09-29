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
    if(mes.value == "Janeiro"){
        nome = "Dante"
    } else if(mes.value == "Fevereiro"){
        nome = "Link"
    }
    if(mes.value == "Março"){
        nome = "Kratos"
    } else if(mes.value == "Abril"){
        nome = "Sonic"
    }
    if(mes.value == "Maio"){
        nome = "Mario"
    } else if(mes.value == "Junho"){
        nome = "Spider-Man"
    }
    if(mes.value == "Julho"){
        nome = "Winton"
    } else if(mes.value == "Agosto"){
        nome = "Link"
    }
    if(mes.value == "Setembro"){
        nome = "Dante"
    } else if(mes.value == "Outubro"){
        nome = "Link"
    }
    if(mes.value == "Novembro"){
        nome = "Dante"
    } else if(mes.value == "Dezembro"){
        nome = "Link"
    }
    
    let dia ="";
    if(dia.value == "Jan"){
        nome = "Dante"
    } else if(dia.value == "Fev"){
        nome = "Link"
    }
    console.log(mes.value);
    console.log(dia.value);
    
}