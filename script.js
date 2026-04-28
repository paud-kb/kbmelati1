// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link clicked
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Sticky Header Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 0';
        header.style.boxShadow = '0 4px 20px rgba(79, 195, 247, 0.3)';
    } else {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 4px 20px rgba(79, 195, 247, 0.15)';
    }
});

// Gallery Filter Logic (Client Side)
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. Hapus class active dari semua tombol
        filterBtns.forEach(b => b.classList.remove('active'));
        // 2. Tambah class active ke tombol yang diklik
        btn.classList.add('active');
        
        // 3. Ambil value filter (misal: 'wisuda', 'outdoor')
        const filterValue = btn.getAttribute('data-filter');
        
        // 4. Loop semua foto
        galleryItems.forEach(item => {
            if (filterValue === 'semua' || item.getAttribute('data-category') === filterValue) {
                // Tampilkan jika sesuai
                item.style.display = 'block';
                // Tambahkan animasi muncul sedikit
                setTimeout(() => item.style.opacity = '1', 50);
            } else {
                // Sembunyikan jika tidak sesuai
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
    });
});

// WA Form Handler (Direct Link Only)
document.getElementById('waForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, textarea');
    const nama = inputs[0].value;
    const noWa = inputs[1].value;
    const pesan = inputs[2].value;
    
    const text = `Halo Admin KB Melati, saya ${nama}.%0A%0APesan: ${pesan}`;
    const url = `https://wa.me/${noWa}?text=${text}`;
    
    window.open(url, '_blank');
});

// --- KALENDER DIGITAL LOGIC ---

// DATA JADWAL AKADEMIK (Dummy Data 2025/2026)
// Format: "YYYY-MM": [ { day: Tanggal, title: "Judul Kegiatan" } ]
const academicEvents = {
    "2025-07": [
        { day: 15, title: "Masa Pengenalan Lingkungan Sekolah (MPLS)" },
        { day: 20, title: "Pengukuran Tinggi & Berat Badan" }
    ],
    "2025-08": [
        { day: 17, title: "Peringatan HUT RI Ke-80" },
        { day: 25, title: "Market Day Bulan Agustus" }
    ],
    "2025-09": [
        { day: 10, title: "Lomba Mewarnai Tingkat Kelas" },
        { day: 25, title: "Pemeriksaan Kesehatan Rutin" }
    ],
    "2025-12": [
        { day: 20, title: "Kegiatan Natal & Akhir Tahun" }
    ],
    "2026-01": [
        { day: 5, title: "Awal Masuk Semester Genap" },
        { day: 15, title: "Field Trip ke Kebun Binatang" }
    ],
    "2026-06": [
        { day: 20, title: "Wisuda & Kenaikan Kelas" }
    ]
};

// State Kalender
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

const monthDisplay = document.getElementById('monthYearDisplay');
const calendarDays = document.getElementById('calendarDays');
const eventsList = document.getElementById('eventsList');

// Fungsi Render Kalender
function renderCalendar(month, year) {
    // Update Judul Bulan
    monthDisplay.innerText = `${monthNames[month]} ${year}`;
    
    // Bersihkan Grid
    calendarDays.innerHTML = "";
    
    // Hitung Tanggal
    const firstDay = new Date(year, month, 1).getDay(); // Hari apa tanggal 1
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total hari bulan ini
    
    // Padding Kosong di Awal Bulan
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('day-cell', 'empty');
        calendarDays.appendChild(emptyCell);
    }
    
    // Render Tanggal
    const keyMonth = `${year}-${String(month + 1).padStart(2, '0')}`; // Format "2025-07"
    const eventsThisMonth = academicEvents[keyMonth] || [];
    
    // Reset List Kegiatan
    eventsList.innerHTML = "";

    if (eventsThisMonth.length === 0) {
        eventsList.innerHTML = "<p class='no-events'>Tidak ada kegiatan khusus bulan ini.</p>";
    } else {
        // Render Kegiatan ke Panel Samping
        eventsThisMonth.forEach(evt => {
            const item = document.createElement('div');
            item.classList.add('event-item');
            item.innerHTML = `
                <div class="event-date-badge">${evt.day}</div>
                <div class="event-desc">${evt.title}</div>
            `;
            eventsList.appendChild(item);
        });
    }

    // Render Angka Tanggal di Grid
    for (let i = 1; i <= daysInMonth; i++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day-cell');
        dayCell.innerText = i;
        
        // Cek apakah hari ini (realtime)
        const today = new Date();
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayCell.classList.add('today');
        }
        
        // Cek apakah ada kegiatan di tanggal ini
        const hasEvent = eventsThisMonth.some(e => e.day === i);
        if (hasEvent) {
            dayCell.classList.add('has-event');
        }
        
        calendarDays.appendChild(dayCell);
    }
}

// Event Listener Navigasi
document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Render awal saat load
renderCalendar(currentMonth, currentYear);
