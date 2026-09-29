// DATABASE MINI: Ubah data menu, tanggal, isi makanan, gizi, dan gambar di sini dengan mudah
const dataMenu = {
    "senin": {
        hari: "Senin",
        tanggal: "21 September 2026",
        namaMenu: "Ayam Goreng Lengkuas",
        gambar: "comingsoon.png", 
        isiMakanan: ["Nasi Putih", "Ayam Goreng Lengkuas", "Tempe Goreng", "Tumis Wortel Buncis", "Pisang"],
        giziBesar: { energi: "555", protein: "20.6", lemak: "22.9", karbo: "67.4", serat: "4.6" },
        giziKecil: { energi: "490", protein: "19.3", lemak: "22.8", karbo: "53.3", serat: "4.4" }
    },
    "selasa": {
        hari: "Selasa",
        tanggal: "22 September 2026",
        namaMenu: "comingsoon.png",
        gambar: "menu 2.jpg",
        isiMakanan: ["Nasi Putih", "Rendang Daging", "Sayur Daun Singkong", "Sambal Ijo", "Jeruk"],
        giziBesar: { energi: "620", protein: "25.4", lemak: "28.1", karbo: "60.2", serat: "5.1" },
        giziKecil: { energi: "510", protein: "21.0", lemak: "24.5", karbo: "50.1", serat: "4.8" }
    },
    "rabu": {
        hari: "Rabu",
        tanggal: "23 September 2026",
        namaMenu: "Ikan Nila Bakar Madu",
        gambar: "menu 3.jpeg",
        isiMakanan: ["Nasi Putih", "Ikan Nila Bakar", "Tahu Bacem", "Sayur Asem", "Semangka"],
        giziBesar: { energi: "530", protein: "28.5", lemak: "15.2", karbo: "65.0", serat: "6.2" },
        giziKecil: { energi: "460", protein: "24.1", lemak: "12.8", karbo: "55.3", serat: "5.5" }
    },
    "kamis": {
        hari: "Kamis",
        tanggal: "24 September 2026",
        namaMenu: "Ayam Bakar Taliwang",
        gambar: "comingsoon.png",
        isiMakanan: ["Nasi Putih", "Ayam Bakar Taliwang", "Plecing Kangkung", "Tahu Goreng", "Melon"],
        giziBesar: { energi: "545", protein: "22.3", lemak: "18.5", karbo: "68.1", serat: "7.0" },
        giziKecil: { energi: "480", protein: "18.9", lemak: "15.2", karbo: "58.4", serat: "6.1" }
    },
    "jumat": {
        hari: "Jumat",
        tanggal: "25 September 2026",
        namaMenu: "Soto Ayam Lamongan",
        gambar: "comingsoon.png",
        isiMakanan: ["Nasi Putih", "Soto Ayam", "Telur Rebus (1/2)", "Perkedel Kentang", "Pisang"],
        giziBesar: { energi: "515", protein: "19.8", lemak: "16.4", karbo: "70.5", serat: "3.5" },
        giziKecil: { energi: "450", protein: "16.5", lemak: "13.2", karbo: "60.8", serat: "3.0" }
    }
};

const hariKeys = Object.keys(dataMenu);

function renderTabs(activeHari) {
    const container = document.getElementById('tab-container');
    container.innerHTML = ''; 
    
    hariKeys.forEach(hari => {
        const isActive = hari === activeHari;
        
        // Desain pill modern MBG Blue untuk tab aktif
        const btnClass = isActive 
            ? "flex-none min-w-[100px] flex-1 bg-brand-600 text-white font-bold py-3 px-6 rounded-full shadow-md shadow-brand-500/30 text-sm transition-all text-center scale-100"
            : "flex-none min-w-[100px] flex-1 bg-transparent text-slate-500 font-semibold py-3 px-6 rounded-full hover:bg-brand-50 hover:text-brand-700 text-sm transition-all text-center cursor-pointer scale-95 hover:scale-100";
        
        const btn = document.createElement('button');
        btn.className = btnClass;
        btn.innerText = dataMenu[hari].hari;
        btn.onclick = () => ubahMenu(hari);
        container.appendChild(btn);
    });
}

function ubahMenu(hariDipilih) {
    const data = dataMenu[hariDipilih];
    
    const kontenMenu = document.getElementById('konten-menu');
    const kontenGizi = document.getElementById('konten-gizi');
    
    kontenMenu.classList.remove('fade-in');
    kontenGizi.classList.remove('fade-in');
    void kontenMenu.offsetWidth; 
    kontenMenu.classList.add('fade-in');
    kontenGizi.classList.add('fade-in');

    document.getElementById('tampil-hari').innerText = data.hari;
    document.getElementById('tampil-tanggal').innerText = data.tanggal;
    
    document.getElementById('tampil-hari-kecil').innerText = data.hari;
    document.getElementById('tampil-tanggal-kecil').innerText = data.tanggal;
    document.getElementById('tampil-nama-menu').innerText = data.namaMenu;
    document.getElementById('tampil-gambar').src = data.gambar;

    // Desain pill tag biru muda untuk list isi makanan
    const wadahIsi = document.getElementById('wadah-isi-makanan');
    wadahIsi.innerHTML = '';
    data.isiMakanan.forEach(item => {
        wadahIsi.innerHTML += `<span class="bg-brand-50 text-brand-700 font-semibold px-4 py-2 rounded-full text-[13px] border border-brand-100 shadow-sm transition-colors hover:bg-brand-100 hover:text-brand-900">${item}</span>`;
    });

    document.getElementById('b-energi').innerText = data.giziBesar.energi;
    document.getElementById('b-protein').innerText = data.giziBesar.protein;
    document.getElementById('b-lemak').innerText = data.giziBesar.lemak;
    document.getElementById('b-karbo').innerText = data.giziBesar.karbo;
    document.getElementById('b-serat').innerText = data.giziBesar.serat;

    document.getElementById('k-energi').innerText = data.giziKecil.energi;
    document.getElementById('k-protein').innerText = data.giziKecil.protein;
    document.getElementById('k-lemak').innerText = data.giziKecil.lemak;
    document.getElementById('k-karbo').innerText = data.giziKecil.karbo;
    document.getElementById('k-serat').innerText = data.giziKecil.serat;

    renderTabs(hariDipilih);
}

// ==========================================
// DETEKSI HARI OTOMATIS (REAL-TIME)
// ==========================================
function setHariRealTime() {
    // Mengambil data hari dari sistem/perangkat pengguna
    const indexHariIni = new Date().getDay(); // 0 = Minggu, 1 = Senin, 2 = Selasa, dst.
    
    let hariAktif = 'senin'; // Default jika weekend (Sabtu/Minggu)

    if (indexHariIni === 1) hariAktif = 'senin';
    else if (indexHariIni === 2) hariAktif = 'selasa';
    else if (indexHariIni === 3) hariAktif = 'rabu';
    else if (indexHariIni === 4) hariAktif = 'kamis';
    else if (indexHariIni === 5) hariAktif = 'jumat';

    // Jalankan menu sesuai hari real-time
    ubahMenu(hariAktif);
}

// Eksekusi fungsi deteksi hari saat web pertama kali dimuat
setHariRealTime();
