const nilaiUlangan = [78, 60, 95, 72, 88, 75];
const batasTuntas = 75;

let jumlahTuntas = 0;
let jumlahBelumTuntas = 0;

console.log("=== DAFTAR NILAI ULANGAN ===");

// Menampilkan seluruh nilai siswa
for (let i = 0; i < nilaiUlangan.length; i++) {
    console.log("Siswa " + (i + 1) + ": " + nilaiUlangan[i]);
}

// Menghitung siswa yang tuntas dan belum tuntas
for (let nilai of nilaiUlangan) {
    if (nilai >= batasTuntas) {
        jumlahTuntas++;
    } else {
        jumlahBelumTuntas++;
    }
}

// Menampilkan daftar nilai
console.log("=== DAFTAR NILAI ULANGAN ===");
console.log("Jumlah Siswa: " + nilaiUlangan.length);
console.log("Jumlah Tuntas: " + jumlahTuntas);
console.log("Jumlah Belum Tuntas: " + jumlahBelumTuntas);
