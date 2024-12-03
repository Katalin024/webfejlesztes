document.getElementById("kvizurlap").addEventListener("submit", function (e) {
    e.preventDefault(); // Ne küldje el az űrlapot a szerverre

    let valasz1 = document.getElementById("balna").checked ||
        document.getElementById("delfin").checked ||
        document.getElementById("foka").checked;

    let valasz2 = document.getElementById("csillag").checked ||
        document.getElementById("polip").checked ||
        document.getElementById("kamhal").checked;

    let valasz3 = document.getElementById("egy").checked ||
        document.getElementById("ketto").checked ||
        document.getElementById("harom").checked;

    let valasz4 = document.getElementById("a").checked ||
        document.getElementById("b").checked ||
        document.getElementById("c").checked;

    let valasz5 = document.getElementById("krill").checked ||
        document.getElementById("plankton").checked ||
        document.getElementById("hal").checked ||
        document.getElementById("tcsillag").checked;

    let valasz6 = document.getElementById("igen").checked ||
        document.getElementById("nem").checked;

    if (!valasz1 && !valasz2 && !valasz3 && !valasz4 && !valasz5 && !valasz6) {
        document.getElementById("kiertekel").innerText =
            "Kérlek, válaszolj a kérdésekre, hogy értékelhessük az eredményed!";
        return; // ha nincs válasz ne pontozzon, itt álljon meg
    }

    pontoz(); // Ha van válasz, számoljuk ki az eredményt a fügvénnyel
});

function pontoz() {
    let pont = 0;

    if (document.getElementById("balna").checked) {
        pont++;
    }

    if (document.getElementById("polip").checked) {
        pont++;
    }

    if (document.getElementById("harom").checked) {
        pont++;
    }

    if (document.getElementById("b").checked) {
        pont++;
    }

    if (
        document.getElementById("krill").checked &&
        document.getElementById("plankton").checked &&
        !document.getElementById("hal").checked &&
        !document.getElementById("tcsillag").checked
    ) {
        pont++;
    }

    if (document.getElementById("igen").checked) {
        pont++;
    }

    let valaszokSzama = document.querySelectorAll("#kvizurlap input:checked").length;
    if (valaszokSzama === 0) {
        document.getElementById("kiertekel").innerText = "Kérlek, válaszolj a kérdésekre, hogy értékelhessük az eredményed!";
        return;
    }
    let uzenet;
    if (pont === 6) {
        uzenet = `Bravó! Mind a hat kérdésre helyesen válaszoltál, fantasztikus ismeretekkel rendelkezel a tengeri élővilágról! Még több érdekességgel és csodával várunk téged kiállításunkon!`;
    } else if (pont >= 1) {
        uzenet = `Ügyes vagy, ${pont} kérdésre helyesen tudtad a választ! Látogass el múzeumunkba, és fedezd fel a tengeri élővilág izgalmas titkait – garantáltan lenyűgöző élmények és új ismeretek várnak rád!`;
    } else {
        uzenet = `Ez most nem sikerült, de semmi gond, a tenger tele van meglepetésekkel! Látogass el múzeumunkba, és merülj el a vízi világ varázslatos rejtelmeiben. Garantáljuk, hogy nálunk rengeteg izgalmas dolgot tanulhatsz!`;
    }

    document.getElementById("kiertekel").innerText = uzenet;
}