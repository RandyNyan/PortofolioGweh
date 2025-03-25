document.addEventListener("DOMContentLoaded", function() {
    const popup = document.createElement("div");
    popup.classList.add("popup-image");
    popup.innerHTML = '<img src="Stiker.jpg" alt="Gambar Keren">';
    popup.style.display = "none";
    document.body.appendChild(popup);

    const btnGambar = document.querySelector(".content .btn");
    btnGambar.addEventListener("click", function() {
        popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
    });

    popup.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
