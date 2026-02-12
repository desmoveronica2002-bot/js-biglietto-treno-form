const biglietto = document.getElementById("nascondi");
biglietto.style.display = "none"; // nascondo il biglietto


function mostraPrezzo() {

    biglietto.style.display = "block"; //  mostro il biglietto

//let km = prompt('km');
//let eta = prompt('eta');


// X calcolare il prezzo + tipo offerta
    const km = parseFloat(document.getElementById("km").value);
    const eta = parseInt(document.getElementById("eta").value);
    const offerta = document.getElementById("offerta");


    let prezzo = km * 0.21;


    if ( eta < 18 ) {

        prezzo = prezzo - ( prezzo * 0.20 );
        console.log("Prezzo: €" + prezzo.toFixed(2));
        offerta.innerText = 'biglietto minorenni'; // tipo offerta 

    }

    else if ( eta > 65 ) {

        prezzo = prezzo - (prezzo * 0.40 );
        console.log("Prezzo: €" + prezzo.toFixed(2)); 
        offerta.innerText = 'biglietto anziani'; // tipo offerta 

    }
    else {

        console.log("Prezzo: €" + prezzo.toFixed(2));
        offerta.innerText = 'biglietto standard'; // tipo offerta 

    }


    document.getElementById("prezzo").innerText = "Prezzo: € " + prezzo.toFixed(2); // toFixed limita il numero dei decimali

// X compilare in automatico il biglietto in nome e cognome
    const nome_cognome = document.getElementById("nome_cognome");
    const nomePasseggero = document.getElementById("nomePasseggero");
    nomePasseggero.innerText = nome_cognome.value;

// X numero random carrozza
    const carrozza = document.getElementById("carrozza");
    const numeroCarrozza = Math.floor(Math.random() * 9) + 1;
    carrozza.innerText = numeroCarrozza;

// X numero random CP
    const codiceCp = document.getElementById("codiceCp");
    const numeroCodiceCp = Math.floor(Math.random() * 10000) + 1;
    codiceCp.innerText = numeroCodiceCp;

}

function cancellaTutto(){ //cancello i dati inseriti dall'utente
    document.getElementById("nome_cognome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("prezzo").innerText = "";

    biglietto.style.display = "none"; // nascondo il biglietto

}



