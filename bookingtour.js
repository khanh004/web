// scripts.js

document.getElementById('tour-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn hành động submit mặc định của form

    // Lấy giá trị từ các input
    const tourName = document.getElementById('tour-name').value;
    const tourDate = document.getElementById('tour-date').value;
    const tourDuration = document.getElementById('tour-duration').value;
    const tourPeople = document.getElementById('tour-people').value;
    const tourEmail = document.getElementById('tour-email').value;
    const tourPhone = document.getElementById('tour-phone').value;

    // Kiểm tra dữ liệu nhập vào (có thể thêm các điều kiện kiểm tra chi tiết hơn)
    if (tourName && tourDate && tourDuration && tourPeople && tourEmail && tourPhone) {
        // Thêm thông tin tour vào bảng danh sách
        const table = document.getElementById('tour-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        // Tạo các ô cho dữ liệu tour
        newRow.insertCell(0).innerText = tourName;
        newRow.insertCell(1).innerText = tourDate;
        newRow.insertCell(2).innerText = tourDuration + " ngày";
        newRow.insertCell(3).innerText = tourPeople + " người";
        newRow.insertCell(4).innerText = tourEmail;
        newRow.insertCell(5).innerText = tourPhone;

        // Reset form sau khi submit
        document.getElementById('tour-form').reset();

        alert('Bạn đã đăng ký tour thành công!');
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
});
