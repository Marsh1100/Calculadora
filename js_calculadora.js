
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


let pantalla = document.getElementById('pantalla');
let resultado = document.getElementById('resultado')
let miniOperacion = document.getElementById('mini-operacion')

let limpiar = document.getElementById('all-clear');

let estadoCalculadora = false;
miniOperacion.style.visibility='hidden';
// Botón Encender/Apagar calculadora
apagarEncenderCalculadora.addEventListener('click',function(){
    if (estadoCalculadora){
        pantalla.style.backgroundColor = 'rgb(19, 68, 83)';
        estadoCalculadora= false;
        miniOperacion.style.visibility='hidden';
        resultado.innerHTML="";
    }else{
        pantalla.style.backgroundColor = 'rgb(40 148 181)';
        estadoCalculadora = true;
        resultado.innerHTML="0";
    }
});

// Obtiene el id de todos los clicks que se hagan en el documento 
let operacion = false;
let igual = false;
document.addEventListener('click',function(event){
    
    if(estadoCalculadora){
        let targetElementId = event.target.id;
        let targetElementText = event.target.textContent;

        let num1;
        let num2;

        //console.log(targetElementId)
        //console.log(targetElementText)
        
        //Botón AC (All Clear)
        if(targetElementId=='all-clear'){
            //resultado.innerHTML="Si funciona, wuu!"
            miniOperacion.style.visibility='hidden';
            resultado.innerHTML="0"
            operacion = false;


        }else if(targetElementId=='signo-igual'){
            // let place = resultado.textContent+targetElementText;
            // resultado.innerHTML=place;
            let textOperacion = resultado.textContent;
            let arrayPantalla = textOperacion.split(' ');

            /*Creación de nodo hijo
            const nodeOperacion = document.createElement('p');
            const textNode = document.createTextNode(textOperacion);
            nodeOperacion.appendChild(textNode);
            console.log(nodeOperacion)
            
            pantalla.insertBefore(nodeOperacion, pantalla.children[0]);*/

            miniOperacion.innerHTML=textOperacion;
            miniOperacion.style.visibility='visible';

            if(arrayPantalla[arrayPantalla.length-1] != ''){
                let respuesta;
                let operador = arrayPantalla[1];
                console.log(operador)
                if(operador=='-'){
                    respuesta = Number(arrayPantalla[0])-Number(arrayPantalla[2]);
                    resultado.innerHTML=respuesta;

                }else if(operador=='+'){
                    respuesta = Number(arrayPantalla[0])+Number(arrayPantalla[2]);
                    console.log(respuesta)
                    resultado.innerHTML=respuesta;

                }else if(operador=='x'){
                    respuesta = Number(arrayPantalla[0])*Number(arrayPantalla[2]);
                    resultado.innerHTML=respuesta;

                }else{
                    if (arrayPantalla[2]==0){
                        resultado.innerHTML='NaN';
                    }else{
                        respuesta = Number(arrayPantalla[0])/Number(arrayPantalla[2]);
                        if(Number(arrayPantalla[0])%Number(arrayPantalla[2])==0){
                            resultado.innerHTML=respuesta;
                        }else{
                            resultado.innerHTML=respuesta.toFixed(2);
                        }
                    } 
                }
            }
            operacion = false;
            igual =  true;
        }else if(targetElementId=='signo-div' || targetElementId=='signo-por' || targetElementId=='signo-menos' || targetElementId=='signo-mas'){

            if(!operacion){
                let place =resultado.textContent+' '+targetElementText+' ';
                resultado.innerHTML=place;
                operacion = true;
                igual = false;
            }
            
        }else{
            console.log(igual)
            let place;
            console.log(resultado.textContent)
            if(igual){
                place = targetElementText;
                igual = false;
            }
            else if(resultado.textContent!=0){
                place = resultado.textContent+targetElementText;
            }else{
                place = targetElementText;
            }
            console.log(place);

            if(targetElementId != 'apagar-cal' && targetElementId != ""){
                resultado.innerHTML=(place);
            }
            
        };

    }
        
        /* let place = Number(resultado.textContent+"1");
        console.log(place);
        resultado.innerHTML=place; */
    
}); 

// Que no permita hacer 9= ???
// Mejorar  visualización

