/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine. */


const numeri = [];
let input = 0;

for(let i = 0 ; i < 6 ; i++ ){
    input= prompt("Inserisci un numero");
    if(!isNaN(input)){
        input = parseInt(input);
        if(input % 2 == 1){
        numeri.push(input);
        }
    }
}

console.log(numeri);