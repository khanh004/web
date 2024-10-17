// Tạo danh sách ngày tháng năm
document.addEventListener('DOMContentLoaded', function() {
    var selectNgay = document.getElementById('ngay');
    var selectThang = document.getElementById('thang');
    var selectNam = document.getElementById('nam');

    // Tạo ngày từ 1 đến 31
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectNgay.add(option);
    }

    // Tạo tháng từ 1 đến 12
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectThang.add(option);
    }

    // Tạo năm từ 1950 đến năm hiện tại
    var currentYear = new Date().getFullYear();
    for (var i = 1950; i <= currentYear; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectNam.add(option);
    }
});

function validateForm() {
    // Lấy giá trị từ form
    var ho = document.getElementById("ho").value;
    var ten = document.getElementById("ten").value;
    var sdt = document.getElementById("sdt").value;

    // Đặt lại các thông báo lỗi
    document.getElementById("hoError").textContent = "";
    document.getElementById("tenError").textContent = "";
    document.getElementById("sdtError").textContent = "";

    var valid = true;

    // Kiểm tra họ
    if (ho.trim() === "") {
        document.getElementById("hoError").textContent = "Vui lòng nhập họ.";
        valid = false;
    }

    // Kiểm tra tên
    if (ten.trim() === "") {
        document.getElementById("tenError").textContent = "Vui lòng nhập tên.";
        valid = false;
    }

    // Kiểm tra số điện thoại
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(sdt)) {
        document.getElementById("sdtError").textContent = "Số điện thoại phải là 10 chữ số.";
        valid = false;
    }

    // Nếu có lỗi, không gửi form
    if (!valid) {
        return false;
    }

    // Nếu không có lỗi, gửi form
    alert("Form đã được gửi thành công!");
}
