(function () {
  'use strict';

  // =======================
  // Load Gallery Data dari JSON
  // =======================
  let galleryData = {};

  fetch("gallery.json")
    .then(response => response.json())
    .then(data => {
      galleryData = data;
      console.log("Gallery loaded:", galleryData);
    })
    .catch(error => {
      console.error("Gagal load gallery.json:", error);
    });

  // =======================
  // Helper fallback image
  // =======================
  function fallbackImage(caption) {
    const safe = encodeURIComponent(caption || 'Foto');
    return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'>
      <rect fill='%23f0f0f0' width='300' height='200'/>
      <text x='50%' y='50%' text-anchor='middle' fill='%23999' font-family='Arial' font-size='14'>
          ${safe}
      </text>
    </svg>`;
  }

  // =======================
  // Modal Galeri
  // =======================
  window.openGallery = function (category) {
    if (!galleryData[category]) {
      alert("Galeri belum tersedia atau gagal dimuat.");
      return;
    }

    const data = galleryData[category];
    const modal = document.getElementById('galleryModal');
    const title = document.getElementById('galleryTitle');
    const itemsContainer = document.getElementById('galleryItems');

    if (title) title.textContent = data.title || category.replace("-", " ").toUpperCase();
    if (itemsContainer) itemsContainer.innerHTML = '';

    data.forEach((item, index) => {
      const div = document.createElement('div');
      div.classList.add('modal-gallery-item');
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.caption || '';
      img.title = item.caption || '';
      img.onerror = function () {
        this.onerror = null;
        this.src = fallbackImage(item.caption || 'Foto');
      };
      img.addEventListener('click', () => {
        window._galleryItems = data;
        window._galleryIndex = index;
        openImageViewer(item.src, item.caption);
      });
      div.appendChild(img);
      if (itemsContainer) itemsContainer.appendChild(div);
    });

    if (modal) modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeGalleryModal = function (event) {
    if (event) event.preventDefault();
    const modal = document.getElementById('galleryModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Klik di luar area modal untuk menutup
  window.addEventListener('click', e => {
    const modal = document.getElementById('galleryModal');
    if (modal && e.target === modal) window.closeGalleryModal();
  });

  // Escape untuk menutup modal
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.closeGalleryModal();
  });

  // =======================
  // Tombol daftar & WA
  // =======================
  window.openRegistrationForm = function () {
    window.open("https://forms.gle/7mN9wqZNHwLdh6m7A", "_blank");
  };

  window.openWhatsAppConsultation = function () {
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
  };

  // =======================
  // Menu & Scroll
  // =======================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const header = document.getElementById('header');
  const scrollToTop = document.getElementById('scrollToTop');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (!header || !scrollToTop) return;
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
      scrollToTop.classList.add('visible');
    } else {
      header.classList.remove('scrolled');
      scrollToTop.classList.remove('visible');
    }
  });

  if (scrollToTop) {
    scrollToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#0') return;
      let target = null;
      try { target = document.querySelector(href); } catch (err) { return; }
      if (target && header) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const elementPosition = target.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    });
  });

  // Form WA
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : 'Kirim';
      if (submitBtn) { submitBtn.textContent = 'Mengarahkan ke WhatsApp...'; submitBtn.disabled = true; }

      const nama = contactForm.nama ? contactForm.nama.value : '';
      const email = contactForm.email ? contactForm.email.value : '';
      const telepon = contactForm.telepon ? contactForm.telepon.value : '';
      const pesan = contactForm.pesan ? contactForm.pesan.value : '';

      const waMessage = `*PESAN DARI WEBSITE KB MELATI 1*%0A%0A` +
        `👤 *Nama:* ${nama}%0A` +
        `📧 *Email:* ${email}%0A` +
        `📞 *Telepon:* ${telepon}%0A%0A` +
        `💬 *Pesan:*%0A${pesan}%0A%0A` +
        `_Pesan dikirim melalui website KB Melati 1 Purwaharja_`;

      const waNumber = '6283895603395';
      const waURL = `https://wa.me/${waNumber}?text=${waMessage}`;
      window.open(waURL, '_blank');

      setTimeout(() => {
        contactForm.reset();
        if (submitBtn) { submitBtn.textContent = originalText; submitBtn.disabled = false; }
        alert('Silakan kirim pesan melalui WhatsApp yang sudah terbuka. Terima kasih!');
      }, 2500);
    });
  }

  window._galleryFallbackImage = fallbackImage;
})();

// =======================
// Fullscreen Viewer
// =======================
function openImageViewer(src, caption) {
  const viewer = document.getElementById('imageViewer');
  const img = document.getElementById('viewerImage');
  const cap = document.getElementById('viewerCaption');
  if (img) img.src = src;
  if (cap) cap.textContent = caption || '';
  if (viewer) viewer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeImageViewer() {
  const viewer = document.getElementById('imageViewer');
  if (viewer) viewer.classList.remove('open');
  document.body.style.overflow = '';
}

function changeImage(step) {
  if (!window._galleryItems || !window._galleryItems.length) return;
  window._galleryIndex = (window._galleryIndex + step + window._galleryItems.length) % window._galleryItems.length;
  const item = window._galleryItems[window._galleryIndex];
  if (item) openImageViewer(item.src, item.caption);
}

document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});
