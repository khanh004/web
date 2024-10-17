let slideIndex = 0;
showSlides(slideIndex);

// Hàm điều khiển chuyển ảnh
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Hiển thị slide dựa trên slideIndex
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0; // Quay lại slide đầu tiên khi đến cuối
    }

    if (n < 0) {
        slideIndex = slides.length - 1; // Quay lại slide cuối khi về đầu
    }

    // Ẩn tất cả các slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Hiển thị slide hiện tại
    slides[slideIndex].style.display = "block";
}
