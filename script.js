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

// TikTok Embed
(function loadTikTokEmbed() {
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@kobermelati1" data-unique-id="kobermelati1" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" > 
    <section> <a target="_blank" href="https://www.tiktok.com/@kobermelati1?refer=creator_embed">@kobermelati1</a> 
    </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    }
})();


