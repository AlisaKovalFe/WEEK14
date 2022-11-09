function colorDivFisrt() {
    let first = document.getElementById('first');
    first.style.backgroundColor = 'red';
};

function colorDivSecond(sender) {
    sender.classList.add('backGround');
}

function colorDivThird() {
    let third = document.querySelector('.third');
    third.style.backgroundColor = 'green';
}

function colorDivFourth(sender) {
    sender.classList.add('backGround');
}