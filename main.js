//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}
// LOGIN FORM
function showLoginForm() {
    var loginForm = document.getElementById("login-form");
    loginForm.style.display = "block";
}

function showLoginForm() {
    var loginForm = document.getElementById("login-form");
    loginForm.style.display = "block";
}
// Mendapatkan referensi ke elemen formulir login
var loginForm = document.getElementById("login-form");

// Menambahkan event listener untuk submit form
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Mendapatkan nilai username dan password dari input
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;

    // Lakukan validasi login
    if (username === "admin" && password === "admin") {
        // Redirect ke halaman detail.html setelah login berhasil
        window.location.href = "forums.html";
    } else {
        // Tampilkan pesan kesalahan jika login gagal
        alert("Username atau password salah. Silakan coba lagi.");
    }
});

// ... Kode JavaScript lainnya ...

function login() {
    var username = document.getElementById("username-input").value;
    // Verifikasi username dan password, lalu setelah berhasil login:
    document.getElementById("login-form").reset(); // Reset form login
    document.getElementById("login-form").style.display = "none"; // Sembunyikan form login
    document.getElementById("user-name").textContent = username; // Tampilkan nama pengguna di navbar
    document.getElementById("user-profile").classList.remove("hide"); // Tampilkan profil pengguna di navbar
    document.getElementById("navigation").classList.remove("hide"); // Tampilkan menu navigasi di navbar
}

function logout() {
    // Proses logout
    document.getElementById("user-name").textContent = ""; // Hapus nama pengguna dari navbar
    document.getElementById("user-profile").classList.add("hide"); // Sembunyikan profil pengguna dari navbar
    document.getElementById("navigation").classList.add("hide"); // Sembunyikan menu navigasi dari navbar
    // Kode lain yang perlu dijalankan saat logout
}

// ... Kode JavaScript lainnya ...
