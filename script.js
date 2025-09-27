// Tombol "Daftar Sekarang" & "Daftar Online"
function openRegistrationForm() {
    window.open("https://forms.gle/7mN9wqZNHwLdh6m7A", "_blank");
}
// =======================
// Tombol "Konsultasi" → buka WhatsApp
// =======================
function openWhatsAppConsultation() {
    // Nomor WhatsApp sekolah (format internasional tanpa 0 di depan)
    const waNumber = "6283895603395"; 

    const waMessage = `*KONSULTASI PENDAFTARAN KB MELATI 1*%0A%0A` +
        `Halo, saya ingin berkonsultasi mengenai:%0A` +
        `□ Informasi pendaftaran%0A` +
        `□ Program pembelajaran%0A` +
        `□ Biaya sekolah%0A` +
        `□ Fasilitas sekolah%0A` +
        `□ Jadwal kunjungan%0A%0A` +
        `Mohon informasinya. Terima kasih! 🙏`;

    const waURL = `https://wa.me/${waNumber}?text=${waMessage}`;
    window.open(waURL, "_blank");
}
function openGallery(category) {
  const modal = document.getElementById('galleryModal');
  const title = document.getElementById('galleryTitle');
  const itemsContainer = document.getElementById('galleryItems');
  
  const data = galleryData[category];
  if (!data) return;

  // Set judul
  title.textContent = data.title;

  // Kosongkan isi lama
  itemsContainer.innerHTML = '';

  // Tambahkan item baru
  data.items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.caption;
      img.title = item.caption;
      div.appendChild(img);
    }

    itemsContainer.appendChild(div);
  });

  // Tampilkan modal
  modal.style.display = 'block';
}

function closeGalleryModal() {
  document.getElementById('galleryModal').style.display = 'none';
}

