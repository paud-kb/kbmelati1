// ======== 
// Tombol "Daftar Sekarang" & "Daftar Online" 
// ======== 
function  openRegistrationForm ()  { 
    // Ganti dengan link Google Form resmi 
    jendela sekolah . buka ( "https://forms.gle/UuD4pguJJe7w2XBf8" ,  "_blank" ); 
}

// ======== 
// Tombol "Konsultasi" â†' buka WhatsApp 
// ======== 
function  openWhatsAppConsultation ()  { 
    // Nomor WhatsApp sekolah (format internasional tanpa 0 di depan) 
    const  waNumber  =  "6283895603395" ; 

    const  waMessage  =  ` * KONSULTASI  PENDAFTARAN  KB  MELATI  1 *% 0 A % 0 A `  + 
        ` Halo ,  saya  ingin  berkonsultasi  mengenai :% 0 A `  + 
        ` â –¡  Informasi  pendaftaran % 0 A `  + 
        ` â –¡  Program  pembelajaran % 0 A `  + 
        ` â –¡  Biaya  sekolah % 0 A `  + 
        ` â –¡  Fasilitas  sekolah % 0 A `  + 
        ` â –¡  Jadwal  kunjungan % 0 A % 0 A `  + 
        ` Mohon  informasinya .  Terima  kasih !  ğŸ ™�` ;

    const  waURL  =  ` https : //wa.me/${waNumber}?text=${waMessage}`; 
    jendela . buka ( waURL ,  "_blank" ); 
}

// ======== 
// Fungsi alert Opsional 
// ======== 
function  halo ()  { 
    alert ( "Halo dari KB Melati 1!" ); 
}

// ======================= 
// TikTok Embed (pemuat opsional) 
// ======================= 
( fungsi  loadTikTokEmbed ()  { 
    jika  ( ! dokumen . pemilih kueri ( 'skrip[src="https://www.tiktok.com/@kobermelati1/embed.js"]' ))  { 
        const  skrip  =  dokumen . buat Elemen ( "skrip" ); 
        skrip . src  =  "https://www.tiktok.com/@kobermelati1/embed.js" ; 
        skrip . asinkron  =  benar ; 
        dokumen . badan . tambahkan Anak ( skrip ); 
    } 
})();

// ======================= 
// Tombol Gulir ke Atas 
// ======================= 
const scrollToTop  =  document.getElementById  ( " scrollToTop" ); const header = document.getElementById ( " header" ) ;
   

window.addEventListener ( " gulir " , ( ) = > { if ( window.scrollY > 100 ) { header.classList.add ( " digulir " ) ; scrollToTop.classList.add ( " terlihat " ) ; } else { header.classList.remove ( " digulir " ) ; scrollToTop.classList.remove ( " terlihat " ) ; } } ) ;​​   
        
        
        
      
        
        
    


scrollToTop .addEventListener ( "klik" , () => { window . scrollTo ({ top : 0 , perilaku : " halus" }); });   
    
         
         
    


// ======== 
// Data Galeri (pakai path GitHub Pages /images/) 
// ======== 
const  galleryData  =  { 
    kegiatan :  { 
        title :  "Kegiatan Belajar" , 
        items :  [ 
            {  type :  "image" ,  src :  "images/gallery/kegiatan-belajar/kbm1.jpg" ,  caption :  "Belajar sambil bermain"  }, 
            {  type :  "image" ,  src :  "images/gallery/kegiatan-belajar/kbm2.jpg" ,  caption :  "Kelompok kegiatan"  } 
        ] 
    }, 
    fasilitas :  { 
        title :  "Fasilitas Sekolah" , 
        item :  [ 
            {  type :  "image" ,  src :  "images/gallery/fasilitas-sekolah/mainan-dalam.jpg" ,  caption :  "Mainan dalam ruangan"  }, 
            {  type :  "image" ,  src :  "images/gallery/fasilitas-sekolah/taman-bermain.jpg" ,  caption :  "Taman bermain outdoor"  } 
        ] 
    }, 
    prestasi :  { 
        title :  "Prestasi Siswa" , 
        item :  [ 
            {  type :  "image" ,  src :  "images/gallery/prestasi-siswa/Trofi.jpg" ,  caption :  "Piala prestasi siswa"  } 
        ] 
    }, 
    acara :  { 
        title :  "Acara Wisuda" , 
        item :  [ 
            {  type :  "image" ,  src :  "images/gallery/acara-wisuda/wisuda1.jpg" ,  caption :  "Wisuda anak-anak"  } 
        ] 
    }, 
    outdoor :  { 
        title :  "Kegiatan Outdoor" , 
        item :  [ 
            {  type :  "image" ,  src : "gambar/galeri/luar ruangan/kbmo1.jpg" ,  keterangan : "Kegiatan belajar di luar ruangan"  } 
        ] 
    } 
};

// ======================= 
// Fungsi Galeri Modal 
// ======================= 
function  openGalleryModal ( category )  { 
    const  modal  =  document .getElementById ( "galleryModal" ); const modalTitle = document .getElementById ( " modalTitle " ) ; const modalContent = document .getElementById ( " modalContent " ) ;
       
       

    const  categoryData  =  galleryData [ kategori ]; 
    jika  ( ! categoryData )  kembali ;

    modalJudul . textContent  =  kategoriData . judul ;

    biarkan  konten  =  '<div class="modal-gallery-grid">' ; 
    categoryData . item . forEach (( item )  =>  { 
        jika  ( item . jenis  ===  "video" )  { 
            konten  +=  ` 
                < div  kelas = "modal-galeri-item"  onclick = "openImageViewer('${item.src}', '${item.caption}', 'video')" > 
                    < video  src = "${item.src}"  kontrol >< /video> 
                < /div> 
            ` ; 
        }  yang lain  { 
            konten  +=  ` 
                < div  kelas = "modal-galeri-item"  onclick = "openImageViewer('${item.src}', '${item.caption}', 'gambar')" > 
                    < img  src = "${item.src}"  alt = "${item.caption}" > 
                < /div> 
            ` ; 
        } 
    }); 
    konten  +=  "</div>" ;

    modalContent.innerHTML = konten ; modal.style.display = " blok " ; document.body.style.overflow = " tersembunyi " ; }​ ​​​​​​​ 
      
fungsi  closeGalleryModal ( )  { 
    const  modal  =  document.getElementById ( " galleryModal " ) ; modal.style.display = " none " ; document.body.style.overflow = " auto " ; }​​​​
    fungsi  openImageViewer ( src ,  caption ,  tipe )  { 
    window . open ( src ,  "_blank" ); 
}

// Tutup modal bila klik di luar 
jendela area . onclick  =  fungsi ( acara )  { 
    const  modal  =  dokumen . getElementById ( "galleryModal" ); 
    if  ( acara .target === modal  ) { closeGalleryModal ( ); } };  
        
    
