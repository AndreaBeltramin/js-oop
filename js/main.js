// In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo"
// con alcune proprietà e metodi. La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
// marca anno colore
// Successivamente:
// Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
// Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
// Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
// BONUS
// In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile".
// La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e
// ne aggiunge alcuni specifici per le automobili.
// Successivamente:
// Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
// Stampiamo il numero di porte e il tipo di carburante.

class Veicolo {
	brand;
	year;
	colour;

	informazioni() {
		return `La marca della macchina è ${this.brand}, è del ${this.year}, è di colore ${this.colour}`;
	}

	calcolaEtà() {
		const now = new Date();
		console.log(now.getFullYear());
		const autoAge = now.getFullYear() - this.year;
		return `La macchina ha: ${autoAge} anni`;
	}

	constructor(brand, year, colour) {
		this.brand = brand;
		this.year = year;
		this.colour = colour;
	}
}

const fiat = new Veicolo("Fiat", 2019, "blue");
console.log(fiat);

console.log(fiat.informazioni());
console.log(fiat.calcolaEtà());
