require('colors');
const prompt = require('prompt-sync')();

function tambah(a, b, c) {
  return a + b + c;
}

// Separate styling from prompt messages
console.log('Masukkan angka pertama: '.green);
const num1 = parseFloat(prompt().trim());

console.log('Masukkan angka kedua: '.blue);
const num2 = parseFloat(prompt().trim());

console.log('Masukkan angka ketiga: '.red);
const num3 = parseFloat(prompt().trim());

const hasil = tambah(num1, num2, num3);

console.log('Hasil penjumlahan: ' + hasil);
module.exports = tambah;