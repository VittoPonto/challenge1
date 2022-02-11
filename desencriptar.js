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

var botonDesencriptar = document.querySelector("#desencripta");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#input-texto").value;   // tomo input
    var resultado = document.querySelector("#msg").textContent = desencripta(texto, vocales, letrasEncriptadas);
});


function desencripta(palabra,vocales,letrasEncriptadas){
    var palabraEncriptada = "";
    var i = 0;
    var esCodigo;

    while (palabra.charAt(i) != ""){
        esCodigo = verificaSiEsCodigo(letrasEncriptadas,palabra,i,vocales);
        if (esCodigo != 10){
            palabraEncriptada += vocales[esCodigo]; 
            i += letrasEncriptadas[esCodigo].length;
        }
        else {
            palabraEncriptada += palabra[i];
            i++;
        }
        
    }
    if (tieneMayusculas(palabra)) return palabraEncriptada = "el texto contiene mayúscula/s."
    return palabraEncriptada;
}


function verificaSiEsCodigo(codigo,palabra,pos,vocal){
    var j = verificaSiEsVocal(palabra[pos],vocal);
    if (j == 10) return j;

    for(var n = pos; n < (pos+codigo[j].length); n++){
        if (palabra[n] != codigo[j][n-pos]){
            return 10;
        }
    }
    return j;
}
