let cep = document.getElementById("cep");

cep.addEventListener ('input', inputCep);
cep.addEventListener ('keyup', keyupCep);

function inputCep() {
    if (isNaN(cep.value)){
        cep.value = cep.value.slice(0, -1);
    }
}

function keyupCep(){
    if(cep.value.length>=9){
        let cont = parseInt( cep.value.length - (cep.value.lenght - 8));
        console.log(cont)
        cep.value =  cep.value.slice(0, 8);
    }
}