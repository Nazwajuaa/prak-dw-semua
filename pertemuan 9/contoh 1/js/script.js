// 1. Isi modal sesuai produk yang diklik
const modalProduk = document.getElementById('modalProduk');
modalProduk.addEventListener('show.bs.modal', (event) => {
  const tombol = event.relatedTarget;
  document.getElementById('judulModal').textContent = tombol.dataset.nama;
  document.getElementById('modalHarga').textContent = tombol.dataset.harga;
  document.getElementById('modalDesc').textContent = tombol.dataset.desc;
});

// 2. Validasi form kontak + alert sukses (tanpa server, hanya simulasi)
const form = document.getElementById('formKontak');
const notif = document.getElementById('notifForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }
  const nama = document.getElementById('nama').value.trim();
  notif.innerHTML = `
    <div class="alert alert-sukses alert-dismissible fade show" role="alert">
      Terima kasih, ${nama.replace(/</g, '&lt;')}! Pesan Anda sudah kami terima.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Tutup"></button>
    </div>`;
  form.reset();
  form.classList.remove('was-validated');
});