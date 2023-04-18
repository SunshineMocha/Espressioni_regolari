// RINOMINARE IN "ESPRESSIONI REGOLARI". Capitolo 9 Eloquent JS

/* 
let re1 = new RegExp("abc");
let re2 = /abc/;
- Dichiarazione di Regular Expression ambivalenti

Quando testando il matching, la stringa deve essere ESATTAMENTE la stringa passata

con le parentesi quadre faccio dei set di caratteri invece di sequenze. cerca almeno uno dei caratteri contenuti nelle quadre
posso avere piu set di caratteri
[0123456789] = [0-9]
[abcde] = [a-e]

posso fare una sequenza di set che funziona con end
[a-e][q-z] cerca un carattere abcde seguito da q->z
[a-zA-Z] include maiuscole e minuscole

ci sono dei caratteri speciali per riassumere roba

\d vuol dire [0-9]

*/



// console.log("ESERCIZIO: Riconoscere ID delle riunioni di Google Meet")

// // let meetId = /[a-z][a-z][a-z]-[a-z][a-z][a-z][a-z]-[a-z][a-z][a-z]/;

// // Questo, oppure:
// let meetId = /[a-z]{3}-[a-z]{4}-[a-z]{3}/ /*ripeti il numero di volte nella parentesi*/
// testRegex(meetId, "ikz-tjrf-igh");
// testRegex(meetId, "mmf-tire-sgm");
// testRegex(meetId, "mmf-aaaaaa-sgmaa");
// testRegex(meetId, "___mmf-tire-sgm");

function testRegex(pattern, string) {
    console.log("testing string '" + string + "' : " + pattern.test(string));
}

// console.log("ESERCIZIO: Riconoscere una data")

// let dataPattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/ /*nelle parentesi accettami un minimo o massimo. ^ inizia da, $ finisci dopo*/ 
// testRegex(dataPattern, "10/03/2023");
// testRegex(dataPattern, "11/10/1992");
// testRegex(dataPattern, "5/5/1800");
// testRegex(dataPattern, "500/10/10000");
// testRegex(dataPattern, "10-03-2002");

console.log("ESERCIZIO: Riconoscere un url")

let domainPattern = /^\w+(.\w+)+(:\d+)?$/

testRegex(domainPattern, "google.com");
testRegex(domainPattern, "localhost:8080");
testRegex(domainPattern, "english-site.co.uk:21");
testRegex(domainPattern, "localhost:");
testRegex(domainPattern, "personal-home-page.it");
testRegex(domainPattern, ".page.it");
testRegex(domainPattern, "@@@@@###");
testRegex(domainPattern, "twitch.tv");
testRegex(domainPattern, "88.cn");