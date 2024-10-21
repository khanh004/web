// scripts.js

document.getElementById('car-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn hành động submit mặc định của form

    // Lấy giá trị từ các input
    const pickupLocation = document.getElementById('car-pickup-location').value;
    const dropoffLocation = document.getElementById('car-dropoff-location').value;
    const pickupDate = document.getElementById('car-pickup-date').value;
    const carPeople = document.getElementById('car-people').value;
    const carEmail = document.getElementById('car-email').value;
    const carPhone = document.getElementById('car-phone').value;

    // Kiểm tra dữ liệu nhập vào (có thể thêm các điều kiện kiểm tra chi tiết hơn)
    if (pickupLocation && dropoffLocation && pickupDate && carPeople && carEmail && carPhone) {
        // Thêm thông tin đặt xe vào bảng danh sách
        const table = document.getElementById('car-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        // Tạo các ô cho dữ liệu đặt xe
        newRow.insertCell(0).innerText = pickupLocation;
        newRow.insertCell(1).innerText = dropoffLocation;
        newRow.insertCell(2).innerText = pickupDate;
        newRow.insertCell(3).innerText = carPeople + " người";
        newRow.insertCell(4).innerText = carEmail;
        newRow.insertCell(5).innerText = carPhone;

        // Reset form sau khi submit
        document.getElementById('car-form').reset();

        alert('Bạn đã đặt xe thành công!');
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
});
