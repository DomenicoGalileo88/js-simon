/* 
Descrizione:

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//Visualizzare in pagina 5 numeri casuali :


//creo una funzione che genera 5 numeri casuali da 1 a 20 non uguali

/**
 * Funzione che genera numeri casuali con un min e un max
 * @param {number} min val min
 * @param {number} max val max
 * @returns random number
 */
function genRandomNumMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let number;


/**
 * // Funzione che genera 20 numeri casuali non uguali
 * @returns Number list in array
 */
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
    document.getElementById('numbers').innerHTML = numbers;

//Da lì parte un timer di 30 secondi.

//Inizzializzo il tempo
let time = 30;

//Inizzializzo una variabile che contiene il tempo a schermo
let timeScreen = document.getElementById('time_screen');

// Aggiungo una time function che richiama la mia funzione ogni 1s
let intervalId = setInterval(countdown, 1000);

//Faccio una funzione con il tempo che trascorre
function countdown() {
    //Se il tempo è < 0
    if (time < 0) {
        // ferma il setInterval
        clearInterval(intervalId);  
    } else {
        // stampa a schermo il tempo decrementato 
        timeScreen.innerHTML = time--;
    }
}

setTimeout(deleteNumber, 31000);
setTimeout(operations, 31500);
/**
 * Funzione che cancella i numeri a schermo
 */
function deleteNumber() {
    //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

    // togliere i numeri a schermo
    document.getElementById('numbers').innerHTML = '';

    // togliere il timer dallo schermo
    document.getElementById('time_screen').innerHTML = '';
    //console.log(numbers);
};

/**
 * Funzione che esegue una serie di operazioni
 */
function operations() {
    // lista di numeri inseriti dall'utente
    let userNumbers = [];
    // lista di numeri vincenti
    let winsNumber = [];

    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    for (let i = 0; i < numbers.length; i++) {
        let userNumber = parseInt(prompt('Inserisci un numero:'));
        userNumbers.push(parseInt(userNumber));

        if ((numbers.includes(userNumber)) && (!winsNumber.includes(userNumber))) {
            winsNumber.push(userNumber);
            
        };
    };

    //console.log(userNumbers);
    //console.log(winsNumber);

    document.getElementById('true_number').innerHTML = `Hai trovato ${winsNumber.length} numeri :  ${winsNumber}`;
    console.log(winsNumber);
    console.log(userNumbers);
    console.log(numbers);
};


    
    