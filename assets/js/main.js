/* 
Descrizione:

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//Visualizzare in pagina 5 numeri casuali :


//creo una funzione che genera 5 numeri casuali da 1 a 20 non uguali
// Funzione che genera numeri casuali con un min e un max
function genRandomNumMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let number;

// Funzione che genera 20 numeri casuali non uguali
function genRandomNumberList() {
    //creo un array vuoto
    const numberList = [];

    //ciclo per generare 5 numeri casuali non identici fino ad un max di 20 e li inserisce nell'array numberList
    while (numberList.length !== 5) {
        number = genRandomNumMinMax(1, 20);

        if (!numberList.includes(number)) {
            numberList.push(number);
        }
    }
        return numberList;
    }

    //Salvo la lista di numeri generati dalla funzione in una variabile
    let numbers = genRandomNumberList();
    //console.log(numbers);

    //Stampo la mia lista di numeri a scermo con nun h2
    let stampNumbers = document.querySelector('h2').innerHTML = numbers;

//Da lì parte un timer di 30 secondi.

//Inizzializzo il tempo
let time = 5;

//Inizzializzo una variabile che contiene il tempo a schermo
let timeScreen = document.getElementById('time_screen');

// Aggiungo una time function che richiama la mia funzione ogni 1s
//setInterval(countdown, 1000);
setTimeout(countdown, 3000)

//Faccio una funzione con il tempo che trascorre
function countdown() {
    //Se il tempo è = a -1
    if (time < 0) {
        // ferma il setInterval
        clearTimeout();
        
    } else {
        // stampa a schermo il tempo decrementato 
        timeScreen.innerHTML = time--;
    }
}
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// togliere i numeri a schermo


//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.