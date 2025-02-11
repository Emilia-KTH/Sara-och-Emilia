// Veckopeng 

 class Bonuspoäng{
     constructor(namn,uppgift,bonus) {
	 //Klassen Bonuspoäng representerar bonsupoängen från en uppgift
	 this.namn = namn;
	 this.uppgift = uppgift;
	 this.bonus = bonus;
      }
 }


function summerapoäng() {
    //Skapar en lista med ett inlämingsobjekt för var och en av kursens moment
    summering = []
    summering[0] = new Bonuspoäng("LAB1A","Redovisade Labbar del 1",6)
    summering[1] = new Bonuspoäng("LAB1B","Möbuiustest",12)
    summering[2] = new Bonuspoäng("LAB2","Klarat provet",1)
    summering[3] = new Bonuspoäng("LAB3A","Spec", 4)
    summering[4] = new Bonuspoäng("LAB3B","Prototyper",4)
    summering[5] = new Bonuspoäng("LAB4A","Redovisade Labbar del 3",3)
    summering[6] = new Bonuspoäng(" LAB4B","Quiz",3)
    return summering
}


function visaLista(summering){
    //Skriver ut alla objekten i listan (om vi vill se att det blev rätt)
    for (var i = 0; i < summering.length; i++) {
        console.log(summering[i])
    }
}


function summera(summering){
    //Räknar ihop bonusen för varje moment i listan som gjorts.
    //Vi slumpar hur mycket det finns i spargrisen.
    //För varje uppgift slumpar vi om den har gjorts.
    Spargrisen = Math.round(00*Math.random())
    summa = 0;
    for (var i = 0; i < summering.length; i++) {
	slump = Math.random();
	if (slump > 0.5) {
            summa = summa + summering[i].bonus;
	}
    }
    return summa;
}


function skrivResultat(summering) {
    //Skriver ut resultatet
    totalt = summera(summering)
    console.log("Resultat", totalt);
}

console.log("Räkna ut dina bonuspoäng:");
summering = summerapoäng();
//visaLista(vecka);
skrivResultat(summering);
