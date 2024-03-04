function dayOfTheWeek() {
    switch (new Date().getDay()) {
        case 0:
        console.log("Je Nedělě");
            break;
            case 1:
        console.log("Je pondělí");
            break;
            case 2:
        console.log("Je úterý");
            break;
            case 3:
        console.log("Je středa");
            break;
            case 4:
        console.log("Je čtvrtek");
            break;
            case 5:
        console.log("Je pátek");
            break;
            case 6:
        console.log("Je sobota");
            break;
           
    
        default:
            break;
    }
}

function zobrazitNazev() {
    var cisloMesice = document.getElementById("mesic").value;
    var nazevMesice;

    switch (cisloMesice) {
        case "1":
            nazevMesice = "leden";
            break;
        case "2":
            nazevMesice = "únor";
            break;
        case "3":
            nazevMesice = "březen";
            break;
        case "4":
            nazevMesice = "duben";
            break;
        case "5":
            nazevMesice = "květen";
            break;
        case "6":
            nazevMesice = "červen";
            break;
        case "7":
            nazevMesice = "červenec";
            break;
        case "8":
            nazevMesice = "srpen";
            break;
        case "9":
            nazevMesice = "září";
            break;
        case "10":
            nazevMesice = "říjen";
            break;
        case "11":
            nazevMesice = "listopad";
            break;
        case "12":
            nazevMesice = "prosinec";
            break;
        default:
            nazevMesice = "Neplatné číslo měsíce";
    }

    document.getElementById("vysledek").innerHTML = nazevMesice;
}

var seznam = document.getElementById("seznam");
var i = 1;

while (i <= 20) {
    if (i % 2 === 0) {
        var li = document.createElement("li");
        li.textContent = i;
        seznam.appendChild(li);
    }
    i++;
}

var heslo = "spravneheslo";

function zkontrolovatHeslo() {
    var zadaneHeslo = document.getElementById("heslo").value;
    var vysledekElement = document.getElementById("vysledek");

    while (zadaneHeslo !== heslo) {
        vysledekElement.textContent = "Nesprávné heslo. Zkuste to znovu.";
        zadaneHeslo = prompt("Zadejte heslo:");
    }

    vysledekElement.textContent = "Heslo je správné.";
}

function zobrazitDen() {
    var cisloDne = document.getElementById("den").value;
    var nazevDne;

    switch (cisloDne) {
        case "1":
            nazevDne = "pondělí";
            break;
        case "2":
            nazevDne = "úterý";
            break;
        case "3":
            nazevDne = "středa";
            break;
        case "4":
            nazevDne = "čtvrtek";
            break;
        case "5":
            nazevDne = "pátek";
            break;
        case "6":
            nazevDne = "sobota";
            break;
        case "7":
            nazevDne = "neděle";
            break;
        default:
            nazevDne = "Neplatné číslo dne";
    }

    document.getElementById("vysledek").innerHTML = nazevDne;
}

var seznam = document.getElementById("seznam");
var a = 0, b = 1, i = 0;

while (i < 10) {
    var li = document.createElement("li");
    li.textContent = a;
    seznam.appendChild(li);

    var temp = a;
    a = b;
    b = temp + b;
    i++;
}