function terbilang(a) {
    if (a === undefined || a === null || isNaN(a)) return "";
    if (!isFinite(a)) return "Tidak valid";

    if (a < 0) {
        return "Minus " + terbilang(Math.abs(a));
    }

    if (!Number.isInteger(a)) {
        const [depan, belakang] = a.toString().split(".");
        const angkaDesimal = belakang
            .split("")
            .map(d => terbilang(parseInt(d)))
            .join(" ");

        return terbilang(parseInt(depan)) + " Koma " + angkaDesimal;
    }

    const bilangan = [
        "", "Satu", "Dua", "Tiga", "Empat",
        "Lima", "Enam", "Tujuh", "Delapan",
        "Sembilan", "Sepuluh", "Sebelas"
    ];

    // helper biar gak nambah "Nol"
    const gabung = (depan, sisa) => {
        return sisa === 0 ? depan : depan + " " + terbilang(sisa);
    };

    if (a === 0) {
        return "Nol";
    } else if (a < 12) {
        return bilangan[a];
    } else if (a < 20) {
        return bilangan[a - 10] + " Belas";
    } else if (a < 100) {
        const puluh = terbilang(Math.floor(a / 10)) + " Puluh";
        return gabung(puluh, a % 10);
    } else if (a < 200) {
        return gabung("Seratus", a - 100);
    } else if (a < 1000) {
        const ratus = terbilang(Math.floor(a / 100)) + " Ratus";
        return gabung(ratus, a % 100);
    } else if (a < 2000) {
        return gabung("Seribu", a - 1000);
    } else if (a < 1000000) {
        const ribu = terbilang(Math.floor(a / 1000)) + " Ribu";
        return gabung(ribu, a % 1000);
    } else if (a < 1000000000) {
        const juta = terbilang(Math.floor(a / 1000000)) + " Juta";
        return gabung(juta, a % 1000000);
    } else if (a < 1000000000000) {
        const miliar = terbilang(Math.floor(a / 1000000000)) + " Miliar";
        return gabung(miliar, a % 1000000000);
    } else if (a < 1000000000000000) {
        const triliun = terbilang(Math.floor(a / 1000000000000)) + " Triliun";
        return gabung(triliun, a % 1000000000000);
    } else {
        return "Angka terlalu besar";
    }
}

export default terbilang;
