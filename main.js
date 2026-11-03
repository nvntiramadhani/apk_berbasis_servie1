
const readline = require('readline');

// Membuat interface input dan output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("==================================");
console.log("     PROGRAM PENGHITUNG NILAI");
console.log("              SISWA");
console.log("==================================");

// Memasukkan nama siswa
rl.question("Masukkan nama siswa: ", (nama) => {

    // Memasukkan nilai tugas
    rl.question("Masukkan nilai tugas: ", (tugas) => {

        // Memasukkan nilai UTS
        rl.question("Masukkan nilai UTS: ", (uts) => {

            // Memasukkan nilai UAS
            rl.question("Masukkan nilai UAS: ", (uas) => {

                // Mengubah input menjadi angka
                tugas = Number(tugas);
                uts = Number(uts);
                uas = Number(uas);

                // Menghitung nilai akhir
                let nilaiAkhir =
                    (tugas * 0.30) +
                    (uts * 0.30) +
                    (uas * 0.40);

                // Menentukan predikat
                let predikat;

                if (nilaiAkhir >= 90) {
                    predikat = "A";
                } else if (nilaiAkhir >= 80) {
                    predikat = "B";
                } else if (nilaiAkhir >= 70) {
                    predikat = "C";
                } else if (nilaiAkhir >= 60) {
                    predikat = "D";
                } else {
                    predikat = "E";
                }

                // Menentukan status kelulusan
                let status;

                if (nilaiAkhir >= 70) {
                    status = "LULUS";
                } else {
                    status = "TIDAK LULUS";
                }

                // Menampilkan hasil
                console.log("\n==================================");
                console.log("          HASIL NILAI SISWA");
                console.log("==================================");
                console.log("Nama Siswa  :", nama);
                console.log("Nilai Tugas :", tugas);
                console.log("Nilai UTS   :", uts);
                console.log("Nilai UAS   :", uas);
                console.log("----------------------------------");
                console.log("Nilai Akhir :", nilaiAkhir.toFixed(2));
                console.log("Predikat    :", predikat);
                console.log("Status      :", status);
                console.log("==================================");

                rl.close();
            });
        });
    });
});
