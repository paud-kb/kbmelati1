// Fungsi alert sederhana
function halo() {
  alert("Halo dari KB Melati 1!");
}

// TikTok Embed
(function loadTikTokEmbed() {
  // Cek apakah script TikTok sudah ada
  if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
})();
