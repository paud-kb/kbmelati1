// Tombol "Daftar Sekarang" & "Daftar Online"
function openRegistrationForm() {
    // Ganti dengan link Google Form resmi sekolah
    window.open("https://forms.gle/UuD4pguJJe7w2XBf8", "_blank");
}

// Tombol "Konsultasi" → buka WhatsApp
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

// Fungsi alert opsional
function halo() {
    alert("Halo dari KB Melati 1!");
}

// TikTok Embed (optional loader)
(function loadTikTokEmbed() {
    if (!document.querySelector('script[src="https://www.tiktok.com/@kobermelati1/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/@kobermelati1/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }
})();
// Scroll to Top Button
const scrollToTop = document.getElementById("scrollToTop");
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
        scrollToTop.classList.add("visible");
    } else {
        header.classList.remove("scrolled");
        scrollToTop.classList.remove("visible");
    }
});

scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const galleryData = {
  kegiatan: {
    title: "Kegiatan Belajar",
    items: [
      {
        type: "image",
        src: "https://drive.google.com/uc?id=1xjuXl_HGKGkdYsFvbPBreBYcdWzvQWU6",
        caption: "Belajar sambil bermain"
      },
      {
        type: "image",
        src: "https://drive.google.com/uc?id=1sf2Z7RcJUjFZzVBeHWk6067t0Zp2xusC",
        caption: "Aktivitas kelompok"
      }
    ]
  },
  fasilitas: {
    title: "Fasilitas Sekolah",
    items: [
      {
        type: "image",
        src: "https://drive.google.com/uc?id=1yGiHzQQHqUR0mw_PUZa3Bps4XI7Q4GMx",
        caption: "Taman bermain outdoor"
      }
    ]
  }
  // dst...
};


