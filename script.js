// Data galeri global
window.galleryData = {
  kegiatan-belajar: {
    title: 'Kegiatan Belajar',
    items: [
      { type: 'image', src: 'images/gallery/kegiatan-belajar/kegiatan-1.jpg', caption: 'Belajar sambil bermain' },
      { type: 'image', src: 'images/gallery/kegiatan-belajar/kegiatan-2.jpg', caption: 'Aktivitas kelompok' },
      { type: 'image', src: 'images/gallery/kegiatan-belajar/kegiatan-3.jpg', caption: 'Pembelajaran interaktif' },
      { type: 'image', src: 'images/gallery/kegiatan-belajar/kegiatan-4.jpg', caption: 'Kegiatan seni' },
      { type: 'image', src: 'images/gallery/kegiatan-belajar/kegiatan-5.jpg', caption: 'Bermain edukatif' }
    ]
  },
  fasilitas-sekolah: {
    title: 'Fasilitas Sekolah',
    items: [
      { type: 'image', src: 'images/gallery/fasilitas-sekolah/mainan-dalam.jpg', caption: 'Ruang kelas yang nyaman' },
      { type: 'image', src: 'images/gallery/fasilitas-sekolah/perpustakaan.jpg', caption: 'Taman bermain outdoor' },
      { type: 'image', src: 'images/gallery/fasilitas-sekolah/ruang-kelas.jpg', caption: 'Perpustakaan mini' },
      { type: 'image', src: 'images/gallery/fasilitas-sekolah/sekolah.jpg', caption: 'Perpustakaan mini' },
      { type: 'image', src: 'images/gallery/fasilitas-sekolah/taman-bermain.jpg', caption: 'Area makan' }
    ]
  },
  prestasi-siswa: {
    title: 'Prestasi Siswa',
    items: [
      { type: 'image', src: 'images/gallery/prestasi-siswa/lomba-mewarnai.jpg', caption: 'Juara lomba mewarnai' },
      { type: 'image', src: 'images/gallery/prestasi-siswa/lomba-tari.jpg', caption: 'Prestasi lomba tari' },
      { type: 'image', src: 'images/gallery/prestasi-siswa/piala.jpg', caption: 'Sertifikat penghargaan' }
    ]
  },
  acara-wisuda: {
    title: 'Acara Wisuda',
    items: [
      { type: 'image', src: 'images/gallery/acara-wisuda/wisuda4.jpg', caption: 'Acara wisuda' },
      { type: 'image', src: 'images/gallery/acara-wisuda/wisuda.jpg', caption: 'Acara wisuda' },
      { type: 'image', src: 'images/gallery/acara-wisuda/wisuda2.jpg', caption: 'Festival anak' },
      { type: 'image', src: 'images/gallery/acara-wisuda/wisuda3.jpg', caption: 'Peringatan Hari Kartini' }
    ]
  },
  outdoor: {
    title: 'Outdoor',
    items: [
      { type: 'image', src: 'images/gallery/outdoor/sekolah-alam.jpg', caption: 'Sekolah alam' },
      { type: 'image', src: 'images/gallery/outdoor/berkebun.jpg', caption: 'Belajar berkebun' },
      { type: 'image', src: 'images/gallery/outdoor/field-trip.jpg', caption: 'Field trip edukatif' }
    ]
  }
};

// Fungsi untuk membuka galeri dan menampilkan gambar-gambar
  function openGallery(category) {
  console.log(window.galleryData[category]); // Mengecek data kategori yang dipilih

  const modal = document.getElementById('galleryModal');
  const title = document.getElementById('galleryTitle');
  const itemsContainer = document.getElementById('galleryItems');

  const data = window.galleryData[category]; // Ambil data kategori yang sesuai
  if (!data || !data.items) return; // Pastikan data dan items ada

  // Set judul modal
  title.textContent = data.title;

  // Kosongkan kontainer gambar sebelumnya
  itemsContainer.innerHTML = '';

  // Tambahkan gambar dari kategori yang dipilih
  data.items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src; // Set sumber gambar
      img.alt = item.caption; // Set teks alternatif gambar
      img.title = item.caption; // Set judul gambar
      div.appendChild(img); // Tambahkan gambar ke dalam div
    }

    itemsContainer.appendChild(div); // Tambahkan div ke dalam kontainer
  });

  // Tampilkan modal
  modal.style.display = 'block';
}

// Fungsi untuk menutup modal
function closeGalleryModal() {
  const modal = document.getElementById('galleryModal');
  modal.style.display = 'none'; // Menyembunyikan modal
}

// Fungsi untuk membuka form pendaftaran
function openRegistrationForm() {
  window.open("https://forms.gle/7mN9wqZNHwLdh6m7A", "_blank");
}

// Fungsi untuk membuka WhatsApp konsultasi
function openWhatsAppConsultation() {
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



