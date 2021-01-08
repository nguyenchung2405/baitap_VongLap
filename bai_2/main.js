document.getElementById('btnTinhTong').addEventListener('click', tinhTong);

function tinhTong() {

    var soNguyen = document.getElementById('txtSoNguyen').value;
    var soMu = document.getElementById('txtSoLuyThua').value;

    var tong = 0;
    for (var n = 1; n <= soMu; n++) {
        tong += Math.pow(soNguyen, n);
    }
    document.getElementById('cardFooter').innerHTML = 'Tổng lũy thừa là: ' + tong;
}