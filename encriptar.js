/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var letrasMayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
var letrasEncriptadas = ["enter", "imes", "ai", "ober", "ufat"];
var vocales = "eiaou";
var botonEncriptar = document.querySelector("#encripta");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#input-texto").value;   // tomo input
    document.querySelector("#msg").textContent = encripta(texto, vocales, letrasEncriptadas);
});


function encripta(palabra,vocales,letrasEncriptadas){
    var palabraEncriptada = "";
    var i = 0;
    var esVocal;

    while (palabra.charAt(i) != ""){
        esVocal = verificaSiEsVocal(palabra[i],vocales);
        if (esVocal != 10){
            palabraEncriptada += letrasEncriptadas[esVocal]; 
        }
        else palabraEncriptada += palabra[i];
        
        i++;
    }
    if (tieneMayusculas(palabra)) return palabraEncriptada = "el texto contiene mayúscula/s."
    return palabraEncriptada;
}


function verificaSiEsVocal(letra,vocal){
    for (var j=0; j < 5; j++){
        if (letra == vocal[j]){
             return j;
        }
    }
    return 10;  // devuelve 10 si la letra no es vocal. Si la letra es vocal, devuelve la posicion de la letra en la palabra.
}


function tieneMayusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letrasMayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}