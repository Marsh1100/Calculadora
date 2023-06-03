
// Botones de la calculadora
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');
let num7 = document.getElementById('num7');
let num8 = document.getElementById('num8');
let num9 = document.getElementById('num9');
let num0 = document.getElementById('num0');


let apagarEncenderCalculadora = document.getElementById('apagar-cal');
let signoIgual = document.getElementById('signo-igual');

let signoDiv = document.getElementById('signo-div');
let signoPor = document.getElementById('signo-por');
let signoMenos = document.getElementById('signo-menos');
let signoMas = document.getElementById('signo-mas');

let resultado = document.getElementById('pantalla')
let limpiar = document.getElementById('all-clear');

let estadoCalculadora = false;
// Botón Encender/Apagar calculadora
apagarEncenderCalculadora.addEventListener('click',function(){
    
});

//Botón AC (All Clear)
/* limpiar.addEventListener('click',function(){
    if(estadoCalculadora){
        resultado.innerHTML=""
    }
}); */



// Obtiene el id de todos los clicks que se hagan en el documento 
document.addEventListener('click',function(event){
    if(!estadoCalculadora){
        let targetElementId = event.target.id;
        let targetElementText = event.target.textContent;
        console.log(targetElementId)

        
        if(targetElementId =='apagar-cal'){
            if (estadoCalculadora){
                resultado.style.backgroundColor = 'rgb(19, 68, 83)';
                estadoCalculadora= false;
                resultado.innerHTML="";
            }else{
                resultado.style.backgroundColor = 'rgb(40 148 181)';
                estadoCalculadora = true;
                resultado.innerHTML="0";
            }
        }
        //Botón AC (All Clear)
        else if(targetElementId=='all-clear'){
            //resultado.innerHTML="Si funciona, wuu!"
            resultado.innerHTML="0"

        }else if(targetElementId=='signo-div'){
            let place = Number(resultado.textContent+"÷");
            console.log(place);
            resultado.innerHTML=place;
            
        }else if(targetElementId=='num0'){
            
            if(resultado.textContent!=0){
            let place = Number(resultado.textContent+"0");
            console.log(place);
            resultado.innerHTML=place;
            }
        }else{
            let place = Number(resultado.textContent+targetElementText);
            console.log(place);

            if(targetElementText != NaN){
                resultado.innerHTML=place;
            }
            
        };

        


        
        /* let place = Number(resultado.textContent+"1");
        console.log(place);
        resultado.innerHTML=place; */
    }
}); 


