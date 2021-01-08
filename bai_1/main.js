document.getElementById('btnTim').addEventListener('click', timSoNguyen);

function timSoNguyen() {
    var n = 1;
    var tong = 0;
    // for (n; tong <= 10000; n++) {
    //     tong += n;
    // }
    while (tong <= 10000) {
        tong += n;
        n++;
    }
    var kq = document.createElement('p');
    kq.innerHTML = 'Số nguyên cần tìm là: ' + n;
    document.getElementById('cardFooter').style.display = 'block';
    document.getElementById('cardFooter').appendChild(kq);
}