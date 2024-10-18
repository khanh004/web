// Xử lý khi nhấp vào ảnh để mở iframe
document.querySelectorAll('.image-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn việc điều hướng mặc định

        // Lấy URL từ thuộc tính data-url
        const url = this.getAttribute('data-url');
        
        // Gắn URL vào src của iframe
        const iframe = document.getElementById('iframe-content');
        iframe.src = url;

        // Hiển thị iframe
        const miniWeb = document.getElementById('mini-web');
        miniWeb.style.display = 'block';
    });
});

// Xử lý khi nhấn nút đóng iframe
document.getElementById('close-iframe').addEventListener('click', function() {
    const miniWeb = document.getElementById('mini-web');
    miniWeb.style.display = 'none';

    // Xóa nội dung trong iframe
    document.getElementById('iframe-content').src = '';
});
