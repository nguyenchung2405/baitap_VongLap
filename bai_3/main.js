document.getElementById('btnTinh').addEventListener('click', function () {
    var number = document.getElementById('txtNumber').value;
    if (number <= 0) {
        alert('Nhập vào số nguyên dương lớn hơn 0.');
        return;
    }
    var giaiThua = 1;
    for (var i = 1; i <= number; i++) {
        giaiThua *= i;
    }
    document.getElementById('thongBao').innerHTML = '';
    document.getElementById('thongBao').innerHTML = 'Tổng là: ' + giaiThua;
});