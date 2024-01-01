// Fungsi untuk mengambil elemen HTML berdasarkan id
function get(id) {
    return document.getElementById(id);
}

// Fungsi untuk mengambil elemen HTML berdasarkan kelas
function getAll(cls) {
    return document.getElementsByClassName(cls);
}

// Fungsi untuk mengganti tema web menjadi gelap atau terang
function toggleTheme() {
    // Mengambil elemen body
    let body = get("body");
    // Mengambil elemen button yang mengganti tema
    let btn = get("theme-btn");
    // Mengganti kelas body menjadi dark atau light
    if (body.className === "dark") {
        body.className = "light";
        btn.innerHTML = "Dark Theme";
    } else {
        body.className = "dark";
        btn.innerHTML = "Light Theme";
    }
}

// Fungsi untuk memvalidasi inputan formulir kontak
function validateForm() {
    // Mengambil elemen inputan nama, email, subjek, dan pesan
    let name = get("name");
    let email = get("email");
    let subject = get("subject");
    let message = get("message");
    // Mengambil elemen pesan error
    let error = get("error");
    // Membuat variabel untuk menyimpan pesan error
    let errorMessage = "";
    // Mengecek apakah inputan nama kosong atau tidak
    if (name.value === "") {
        errorMessage += "Nama tidak boleh kosong. \n";
    }
    // Mengecek apakah inputan email kosong atau tidak
    if (email.value === "") {
        errorMessage += "Email tidak boleh kosong. \n";
    }
    // Mengecek apakah inputan email valid atau tidak
    if (!email.value.includes("@")) {
        errorMessage += "Email tidak valid. \n";
    }
    // Mengecek apakah inputan subjek kosong atau tidak
    if (subject.value === "") {
        errorMessage += "Subjek tidak boleh kosong. \n";
    }
    // Mengecek apakah inputan pesan kosong atau tidak
    if (message.value === "") {
        errorMessage += "Pesan tidak boleh kosong. \n";
    }
    // Jika ada pesan error, tampilkan di elemen error dan kembalikan false
    if (errorMessage !== "") {
        error.innerHTML = errorMessage;
        return false;
    }
    // Jika tidak ada pesan error, kembalikan true
    return true;
}

// Fungsi untuk menampilkan gambar kopi yang dipilih
function showImage(index) {
    // Mengambil elemen gambar kopi
    let image = get("coffee-image");
    // Mengambil elemen judul kopi
    let title = get("coffee-title");
    // Mengambil elemen deskripsi kopi
    let desc = get("coffee-desc");
    // Mengambil elemen item galeri
    let items = getAll("gallery-item");
    // Mengganti sumber gambar, judul, dan deskripsi sesuai dengan index
    switch (index) {
        case 0:
            image.src = "gallery1.png";
            title.innerHTML = "Kopi Arabika";
            desc.innerHTML =
                "Kopi Arabika adalah jenis kopi yang paling banyak dikonsumsi di dunia. Kopi Arabika memiliki rasa yang lebih halus, asam, dan aromatik daripada Robusta. Kopi Arabika berasal dari Ethiopia dan tumbuh di ketinggian 900-2000 meter di atas permukaan laut.";
            break;
        case 1:
            image.src = "gallery2.png";
            title.innerHTML = "Kopi Robusta";
            desc.innerHTML =
                "Kopi Robusta adalah jenis kopi yang paling banyak dibudidayakan di Indonesia. Kopi Robusta memiliki rasa yang lebih pahit, kuat, dan berkafein daripada Arabika. Kopi Robusta berasal dari Kongo dan tumbuh di ketinggian 200-800 meter di atas permukaan laut.";
            break;
        case 2:
            image.src = "gallery3.png";
            title.innerHTML = "Kopi Espresso";
            desc.innerHTML =
                "Kopi Espresso adalah jenis kopi yang dibuat dengan cara menyeduh kopi bubuk yang sangat halus dengan air panas bertekanan tinggi. Kopi Espresso memiliki rasa yang pekat, kental, dan berbusa. Kopi Espresso biasanya digunakan sebagai dasar untuk minuman kopi lainnya, seperti Cappuccino, Latte, Mocha, dan lainnya.";
            break;
        case 3:
            image.src = "gallery4.png";
            title.innerHTML = "Kopi Cappuccino";
            desc.innerHTML =
                "Kopi Cappuccino adalah jenis minuman kopi yang dibuat dengan cara mencampurkan kopi espresso, susu panas, dan busa susu. Kopi Cappuccino memiliki rasa yang lembut, manis, dan kremi. Kopi Cappuccino berasal dari Italia dan biasanya ditaburi dengan bubuk cokelat atau kayu manis di atasnya.";
            break;
        case 4:
            image.src = "gallery5.png";
            title.innerHTML = "Kopi Latte";
            desc.innerHTML =
                "Kopi Latte adalah jenis minuman kopi yang dibuat dengan cara mencampurkan kopi espresso dan susu panas. Kopi Latte memiliki rasa yang lebih ringan dan lebih manis daripada Cappuccino. Kopi Latte berasal dari Italia dan biasanya dihiasi dengan latte art di atasnya.";
            break;
        case 5:
            image.src = "gallery6.png";
            title.innerHTML = "Kopi Tubruk";
            desc.innerHTML =
                "Kopi Tubruk adalah jenis kopi yang dibuat dengan cara menyeduh kopi bubuk dengan air panas tanpa menggunakan filter. Kopi Tubruk memiliki rasa yang sangat kuat, pahit, dan berampas. Kopi Tubruk berasal dari Indonesia dan biasanya disajikan dengan gula terpisah.";
            break;
    }
    // Menghilangkan kelas active dari semua item galeri
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
    }
    // Menambahkan kelas active ke item galeri yang dipilih
    items[index].classList.add("active");
}

// Fungsi untuk menambahkan event listener ke elemen-elemen tertentu
function addListeners() {
    // Mengambil elemen button yang mengganti tema
    let btn = get("theme-btn");
    // Menambahkan event listener click ke button
    btn.addEventListener("click", toggleTheme);
    // Mengambil elemen item galeri
    let items = getAll("gallery-item");
    // Menambahkan event listener click ke setiap item galeri
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            showImage(i);
        });
    }
}

// Menjalankan fungsi addListeners saat halaman web dimuat
window.onload = addListeners;