var numeros = {
    numero: 0,
    acumulado: 0,
}
var texto = {
    text: "",
    inicial: "",
    final: "",
}
var caracteres = {
    caracter: "",
}
        function Numeros (input){
            if(typeof(input) === 'number'){
                return{
                    ...numeros,
                    numero: numeros.numero = input,
                    acumulado: numeros.acumulado = numeros.acumulado + input
                }
            }
        }
        function TEXTO (input){
            if(typeof(input) === 'string'){
                return{
                    ...texto,
                    text: texto.text = input,
                    inicial: texto.inicial = input.charAt(0),
                    final: texto.final = input.substr(-1)
                }
            }
        }
        function character(input){
            let i=0;
            let size = input.lenght
            do{
            i = i ++;
            especialC = input.charAt(i)
            if((especialC != 'number') && (especialC != 'string')){
                return{
                    ...caracteres,
                    caracter: caracteres.caracter = especialC
                }
            }
            }while(i<=size);
        }

Numeros(10)
Numeros(10)
Numeros(10)
TEXTO("Hola")
character("tílde")
    console.log(numeros)
    console.log(texto)
    console.log(caracteres)