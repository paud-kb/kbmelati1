// =======================
// Tombol "Daftar Sekarang" & "Daftar Online"
// =======================
function openRegistrationForm() {
    // Ganti dengan link Google Form resmi sekolah
    window.open("https://forms.gle/UuD4pguJJe7w2XBf8", "_blank");
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

// =======================
// Fungsi alert opsional
// =======================
function halo() {
    alert("Halo dari KB Melati 1!");
}

// =======================
// TikTok Embed (optional loader)
// =======================
(function loadTikTokEmbed() {
    if (!document.querySelector('script[src="https://www.tiktok.com/@kobermelati1/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/@kobermelati1/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }
})();

// =======================
// Scroll to Top Button
// =======================
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

// =======================
// Data Galeri (pakai path GitHub Pages /images/)
// =======================
const galleryData = {
    kegiatan: {
        title: "Kegiatan Belajar",
        items: [
            { type: "image", src: "images/gallery/kegiatan-belajar/kbm1.jpg", caption: "Belajar sambil bermain" },
            { type: "image", src: "images/gallery/kegiatan-belajar/kbm2.jpg", caption: "Aktivitas kelompok" },
        ]
    },
    fasilitas: {
        title: "Fasilitas Sekolah",
        items: [
            { type: "image", src: "images/gallery/fasilitas-sekolah/mainan-dalam.jpg", caption: "Mainan dalam ruangan" },
            { type: "image", src: "images/gallery/fasilitas-sekolah/matahariA1.jpg", caption: "Taman bermain outdoor" },
        ]
    },
    prestasi: {
        title: "Prestasi Siswa",
        items: [
            { type: "image", src: "images/gallery/prestasi-siswa/Trofi.jpg", caption: "Piala prestasi siswa" }
        ]
    },
    acara: {
        title: "Acara Wisuda",
        items: [
            { type: "image", src: "images/gallery/acara-wisuda/wisuda1.jpg", caption: "Wisuda anak-anak" }
        ]
    },
    outdoor: {
        title: "Kegiatan Outdoor",
        items: [
            { type: "image", src: "images/gallery/outdoor/kbmo1.jpg", caption: "Kegiatan belajar di luar ruangan" },
            { type: "image", src: "images/gallery/outdoor/Ayunan.jpg", caption: "Kegiatan belajar di luar ruangan" },
        ]
    }
};

// =======================
// Fungsi Modal Galeri
// =======================
function openGalleryModal(category) {
    const modal = document.getElementById("galleryModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");

    const categoryData = galleryData[category];
    if (!categoryData) return;

    modalTitle.textContent = categoryData.title;

    let content = '<div class="modal-gallery-grid">';
    categoryData.items.forEach((item) => {
        if (item.type === "video") {
            content += `
                <div class="modal-gallery-item" onclick="openImageViewer('${item.src}', '${item.caption}', 'video')">
                    <video src="${item.src}" controls></video>
                </div>
            `;
        } else {
            content += `
                <div class="modal-gallery-item" onclick="openImageViewer('${item.src}', '${item.caption}', 'image')">
                    <img src="${item.src}" alt="${item.caption}">
                </div>
            `;
        }
    });
    content += "</div>";

    modalContent.innerHTML = content;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
    const modal = document.getElementById("galleryModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function openImageViewer(src, caption, type) {
    window.open(src, "_blank");
}

// Tutup modal bila klik di luar area
window.onclick = function(event) {
    const modal = document.getElementById("galleryModal");
    if (event.target === modal) {
        closeGalleryModal();
    }
};




