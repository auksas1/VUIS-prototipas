function rodytiTvarkarasti() {
    const diena = document.getElementById("dienos-pasirinkimas").value;
    if (!diena) {
        alert("Pasirinkite dieną!");
        return;
    }
    const tvarkarastis = {
        pirmadienis: "Paskaitos: Verslo procesų modeliavimas, Kompiuterių tinklai (pratybos)",
        antradienis: "Paskaitos: Naudotojų sąsajos kūrimas (paskaita ir pratybos), verslo procesų modeliavimas (pratybos)",
        treciadienis: "Paskaitos: Duomenų bazių projektavimas (paskaita ir pratybos), duomenų bazių užklausų kalbos (paskaita ir pratybos)",
        ketvirtadienis: "Paskaitos: Kompiuterių tinklai",
        penktadienis: "Paskaitos: Kompiuterių architektūra (paskaita ir pratybos)"
    };
    document.getElementById("tvarkarascio-rodymas").innerText = tvarkarastis[diena];
}

// Dokumentų užsakymo funkcija
function uzsakytiDokumenta() {
    const tipas = document.getElementById("dokumentu-tipas").value;
    if (!tipas) {
        alert("Pasirinkite dokumento tipą!");
        return;
    }
    document.getElementById("uzsakymo-statusas").innerText = `Jūsų ${tipas} užsakymas pateiktas.`;
}

// Pagalbos užklausos funkcija
function rodytiPagalbosUzklausa() {
    document.getElementById("pagalbos-statusas").innerText = "Jūsų užklausa išsiųsta. Atsakysime per 1-2 darbo dienas.";
}

// Profilio redagavimas
function redaguotiProfili() {
    const laukeliai = ["vardas", "fakultetas", "studiju-programa", "kursas", "grupe", "pogrupis"];
    laukeliai.forEach(id => {
        const el = document.getElementById(id);
        const dabartineReiksme = el.innerText;
        el.innerHTML = `<input type="text" value="${dabartineReiksme}" id="${id}-input">`;
    });

    document.querySelector('button[onclick="redaguotiProfili()"]').style.display = "none";
    document.getElementById("saugoti-mygtukas").style.display = "inline-block";
}

// Profilio informacijos išsaugojimas
function issaugotiProfili() {
    const laukeliai = ["vardas", "fakultetas", "studiju-programa", "kursas", "grupe", "pogrupis"];
    laukeliai.forEach(id => {
        const input = document.getElementById(`${id}-input`);
        if (input) {
            const naujaReiksme = input.value;
            const el = document.getElementById(id);
            el.innerText = naujaReiksme;
        }
    });

    document.querySelector('button[onclick="redaguotiProfili()"]').style.display = "inline-block";
    document.getElementById("saugoti-mygtukas").style.display = "none";

    alert("Profilio informacija sėkmingai išsaugota!");
}

// Funkcija rodyti pagalbos formą
function rodytiPagalbosForma() {
    const forma = document.getElementById("pagalbos-forma");
    forma.style.display = "block"; // Rodyti formą
}

// Funkcija siųsti užklausą
function siustiUzklausa() {
    const tipas = document.getElementById("uzklausos-tipai").value;
    const tekstas = document.getElementById("uzklausos-tekstas").value;

    if (!tipas) {
        alert("Pasirinkite užklausos tipą!");
        return;
    }
    if (!tekstas) {
        alert("Įrašykite užklausos tekstą!");
        return;
    }

    alert("Jūsų užklausa sėkmingai išsiųsta!");

    document.getElementById("uzklausos-tipai").value = "";
    document.getElementById("uzklausos-tekstas").value = "";

    document.getElementById("pagalbos-forma").style.display = "none";
}


function rodytiRezultatus() {
    const lentele = document.getElementById("rezultatu-lentele");
    if (lentele.style.display === "none" || lentele.style.display === "") {
        lentele.style.display = "block";
    } else {
        lentele.style.display = "none";
    }
}
