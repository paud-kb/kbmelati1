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
