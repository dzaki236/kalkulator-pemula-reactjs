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

    let kalimat = "";

    if (a === 0) {
        return "Nol";
    } else if (a < 12) {
        kalimat = bilangan[a];
    } else if (a < 20) {
        kalimat = bilangan[a - 10] + " Belas";
    } else if (a < 100) {
        kalimat =
            terbilang(Math.floor(a / 10)) +
            " Puluh " +
            terbilang(a % 10);
    } else if (a < 200) {
        kalimat = "Seratus " + terbilang(a - 100);
    } else if (a < 1000) {
        kalimat =
            terbilang(Math.floor(a / 100)) +
            " Ratus " +
            terbilang(a % 100);
    } else if (a < 2000) {
        kalimat = "Seribu " + terbilang(a - 1000);
    } else if (a < 1000000) {
        kalimat =
            terbilang(Math.floor(a / 1000)) +
            " Ribu " +
            terbilang(a % 1000);
    } else if (a < 1000000000) {
        kalimat =
            terbilang(Math.floor(a / 1000000)) +
            " Juta " +
            terbilang(a % 1000000);
    } else if (a < 1000000000000) {
        kalimat =
            terbilang(Math.floor(a / 1000000000)) +
            " Milyar " +
            terbilang(a % 1000000000);
    } else if (a < 1000000000000000) {
        kalimat =
            terbilang(Math.floor(a / 1000000000000)) +
            " Triliun " +
            terbilang(a % 1000000000000);
    } else {
        return "Angka terlalu besar";
    }

    return kalimat
        .split(" ")
        .filter(Boolean)
        .join(" ");
}

export default terbilang;
