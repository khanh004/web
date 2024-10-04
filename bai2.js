function findMinMax() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",").map(Number);
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    document.getElementById("result").innerHTML = `Số lớn nhất: ${max}, Số nhỏ nhất: ${min}`;
}
