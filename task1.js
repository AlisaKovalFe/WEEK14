function showFirstNumber() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    // if (Number(firstNumber) && Number(secondNumber)) {
    //     alert(+a + +b);
    // } else {
    //     alert('Не посчитаю, введи числа')
    // }
    let a = (Number(firstNumber) + Number(secondNumber));
    
    document.getElementById('result').innerHTML = a
}