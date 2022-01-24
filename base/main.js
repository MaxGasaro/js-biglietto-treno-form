const prezzoKm = 0.21;

let name = document.getElementById('name');

let bonus = document.getElementById('fascia-eta');
let nomePasseggero = document.getElementById('nome-passeggero');
let fasciaEta = document.getElementById('fascia-eta');
let tipoOfferta = document.getElementById('offerta');
let carrozza = document.getElementById('carrozza');
let cp = document.getElementById('codice-cp');
let costoTotale = document.getElementById('costo');

let button = document.getElementById('genera');

button.addEventListener('click',
    function() {
        //sezione per far apparire la sezione del biglietto
        let block = document.getElementById('generatore');
        block.classList.remove('d-none');
        //sezione per inserimento nome nel biglietto
        nomePasseggero.innerHTML = name.value;
        //sezione per tipo di offerta
        if (fasciaEta.value == "minorenne" || fasciaEta.value == "over65") {
            tipoOfferta.innerHTML = 'Biglietto Ridotto';
        } else {
            tipoOfferta.innerHTML = 'Biglietto Standard';
        }
        //sezione generatrice carrozza
        carrozza.innerHTML = Math.floor(Math.random() * 10);

        //sezione generatrice codice
        cp.innerHTML = Math.floor(Math.random() * 10000 + 90000);

        //sezione costo biglietto
        let distance = document.getElementById('number');

        let prezzoTot = prezzoKm * distance.value;
        let prezzoScontato;
        let sconto;

        if (fasciaEta.value == "maggiorenne") {
            sconto = (40 / 100) * prezzoTot;
            prezzoScontato = prezzoTot - sconto;
        } else if (fasciaEta.value == "minorenne") {
            sconto = (20 / 100) * prezzoTot;
            prezzoScontato = prezzoTot - sconto;
        } else {
            prezzoScontato = prezzoTot;
        }    

        costoTotale.innerHTML = "€ " + prezzoScontato.toFixed(2);


    }
)