function openLightbox(imageSrc, title) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox-title").innerText = title;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
