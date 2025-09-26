// Tombol "Daftar Sekarang" & "Daftar Online"
function openRegistrationForm() {
    window.open("https://forms.gle/7mN9wqZNHwLdh6m7A", "_blank");
}

// Tombol "Konsultasi" → buka WhatsApp
function openWhatsAppConsultation() {
    window.open("https://wa.me/6283895603395", "_blank");
}

// Fungsi alert opsional
function halo() {
    alert("Halo dari KB Melati 1!");
}

// TikTok Embed
(function loadTikTokEmbed() {
    if (!document.querySelector('script[src="https://www.tiktok.com/@kobermelati1/embed.js"]')) {
        const script = document.createElement('script');
        script.src = "https://www.tiktok.com/@kobermelati1/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }
})();

