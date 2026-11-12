const daftarBarang = [
    "Buku Tulis",
    "Pensil",
    "Penghapus",
    "Spidol"
];

const barangBaru = "Pulpen";
const barangDicari = "Penghapus";
const barangDihapus = "Spidol";

// Menampilkan judul dan jumlah awal
console.log("=== PENGELOLAAN PERLENGKAPAN KELAS ===");
console.log("Jumlah barang awal: " + daftarBarang.length);

// Tambah Barang
console.log("\n[Tambah Barang]");

if (barangBaru.trim() !== "") {
    daftarBarang.push(barangBaru);
    console.log(barangBaru + " berhasil ditambahkan.");
} else {
    console.log("Nama barang tidak boleh kosong.");
}

// Pencarian Barang
console.log("\n[Pencarian Barang]");

if (daftarBarang.includes(barangDicari)) {
    const indeks = daftarBarang.indexOf(barangDicari);
    console.log(barangDicari + " ditemukan pada indeks " + indeks + ".");
} else {
    console.log("Barang tidak tersedia.");
}

// Hapus Barang
console.log("\n[Hapus Barang]");

const indeksHapus = daftarBarang.indexOf(barangDihapus);

if (indeksHapus !== -1) {
    daftarBarang.splice(indeksHapus, 1);
    console.log(barangDihapus + " berhasil dihapus.");
} else {
    console.log("Barang tidak dapat dihapus.");
}

// Menampilkan hasil akhir
console.log("\n=== DAFTAR BARANG TERBARU ===");

for (let i = 0; i < daftarBarang.length; i++) {
    console.log((i + 1) + ". " + daftarBarang[i]);
}

console.log("\nTotal barang: " + daftarBarang.length);
