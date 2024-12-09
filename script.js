function rodytiTvarkarasti() {
    const diena = document.getElementById("dienos-pasirinkimas").value;
    const tvarkarastis = {
        pirmadienis: "Paskaitos: Verslo procesų modeliavimas, Kompiuterių tinklai (pratybos)",
        antradienis: "Paskaitos: Naudotojų sąsajos kūrimas (paskaita ir pratybos), verslo procesų modeliavimas (pratybos)",
        treciadienis: "Paskaitos: Duomenų bazių projektavimas (paskaita ir pratybos), duomenų bazių užklausų kalbos (paskaita ir pratybos)",
        ketvirtadienis: "Paskaitos: Kompiuterių tinklai",
        penktadienis: "Paskaitos: Kompiuterių architektūra (paskaita ir pratybos)"
    };
    document.getElementById("tvarkarascio-rodymas").innerText = tvarkarastis[diena];
}

// Dokumento užsakymo funkcija
function uzsakytiDokumenta() {
    const tipas = document.getElementById("dokumentu-tipas").value;
    document.getElementById("uzsakymo-statusas").innerText = `Jūsų ${tipas} užsakymas pateiktas.`;
}
