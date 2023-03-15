function mulai() {
    var pilihuser = prompt("Masukkan pilihan Anda (Kertas, Batu, atau Gunting):");
    pilihuser = pilihuser.toLowerCase();
    if (pilihuser !== "kertas" && pilihuser !== "batu" && pilihuser !== "gunting") {
        alert("Pilihan tidak valid!");
        return;
    }

    var pilihkomputer = Math.random();
    if (pilihkomputer < 0.34) {
        pilihkomputer = "kertas";
    } else if (pilihkomputer < 0.67) {
        pilihkomputer = "batu";
    } else {
        pilihkomputer = "gunting";
    }

    alert("Komputer memilih " + pilihkomputer);

    if (pilihuser === pilihkomputer) {
        alert("Seri!");
    } else if (pilihuser === "kertas") {
        if (pilihkomputer === "batu") {
            alert("Kamu menang!");
        } else {
            alert("Komputer menang!");
        }
    } else if (pilihuser === "batu") {
        if (pilihkomputer === "gunting") {
            alert("Kamu menang!");
        } else {
            alert("Komputer menang!");
        }
    } else {
        if (pilihkomputer === "kertas") {
            alert("Kamu menang!");
        } else {
            alert("Komputer menang!");
        }
    }
}