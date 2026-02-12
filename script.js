 function mostraPrezzo() {

const km = parseFloat(document.getElementById("km").value);
const eta = parseInt(document.getElementById("eta").value);


let prezzo = km * 0.21;

if ( eta < 18 ) {

    prezzo = prezzo - ( prezzo * 0.20 );
    console.log("Prezzo: €" + prezzo.toFixed(2));

}

else if ( eta > 65 ) {

    prezzo = prezzo - (prezzo * 0.40 );
    console.log("Prezzo: €" + prezzo.toFixed(2)); 


}
 else {

    console.log("Prezzo: €" + prezzo.toFixed(2));

 }


 document.getElementById("prezzo").innerText = "Prezzo: € " + prezzo.toFixed(2); // toFixed limita il numero dei decimali

}