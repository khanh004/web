function calculate(operation) {
    // Tính toán kết quả dựa trên phép toán được chọn
    if (operation === 'add') {
        let add1 = parseFloat(document.getElementById('add1').value) || 0;
        let add2 = parseFloat(document.getElementById('add2').value) || 0;
        let addResult = add1 + add2;
        document.getElementById('addResult').value = addResult;
        updateResults('add', `${add1} + ${add2} = ${addResult}`);
    } else if (operation === 'sub') {
        let sub1 = parseFloat(document.getElementById('sub1').value) || 0;
        let sub2 = parseFloat(document.getElementById('sub2').value) || 0;
        let subResult = sub1 - sub2;
        document.getElementById('subResult').value = subResult;
        updateResults('sub', `${sub1} - ${sub2} = ${subResult}`);
    } else if (operation === 'mul') {
        let mul1 = parseFloat(document.getElementById('mul1').value) || 0;
        let mul2 = parseFloat(document.getElementById('mul2').value) || 0;
        let mulResult = mul1 * mul2;
        document.getElementById('mulResult').value = mulResult;
        updateResults('mul', `${mul1} * ${mul2} = ${mulResult}`);
    } else if (operation === 'div') {
        let div1 = parseFloat(document.getElementById('div1').value) || 0;
        let div2 = parseFloat(document.getElementById('div2').value) || 1; // Tránh chia cho 0
        let divResult = div1 / div2;
        document.getElementById('divResult').value = divResult;
        updateResults('div', `${div1} ÷ ${div2} = ${divResult}`);
    }
}

function updateResults(operation, resultText) {
    // Xóa màu đỏ từ các phép toán trước
    document.getElementById('addOperation').classList.remove('red-text');
    document.getElementById('subOperation').classList.remove('red-text');
    document.getElementById('mulOperation').classList.remove('red-text');
    document.getElementById('divOperation').classList.remove('red-text');

    // Cập nhật phép toán vừa thực hiện và đổi màu đỏ
    if (operation === 'add') {
        document.getElementById('addOperation').textContent = `PHÉP CỘNG ${resultText}`;
        document.getElementById('addOperation').classList.add('red-text');
    } else if (operation === 'sub') {
        document.getElementById('subOperation').textContent = `PHÉP TRỪ ${resultText}`;
        document.getElementById('subOperation').classList.add('red-text');
    } else if (operation === 'mul') {
        document.getElementById('mulOperation').textContent = `PHÉP NHÂN ${resultText}`;
        document.getElementById('mulOperation').classList.add('red-text');
    } else if (operation === 'div') {
        document.getElementById('divOperation').textContent = `PHÉP CHIA ${resultText}`;
        document.getElementById('divOperation').classList.add('red-text');
    }
}
