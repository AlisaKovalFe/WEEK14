function goNext() {
    let imageChange = document.querySelector('#imageNew');
    imageChange.src = './assets/pancake.png';
}

function goPrevious() {
    let imageChangePrevious = document.querySelector('#imageNew');
    imageChangePrevious.src = './assets/croissant.png';
    
}

// ниже мои попытки создать элементы img и просвоить аттрибуты src, как дальше их в карусель по нажатию кнопки запустить не знаю, и как массив сделать с текущим уровнем знаний, не разобралась
// function goNext() {

//     let img = document.querySelector('img')

//     let img1 = document.createElement('img')
//     let img2 = document.createElement('img')
//     let img3 = document.createElement('img')

//     img1.src = './assets/maffin.png'
//     img2.src = './assets/pancake.png'
//     img3.src = './assets/zefir.png'

//     img.append(img1)
//     img.append(img2)
//     img.append(img3) 
    
// }




