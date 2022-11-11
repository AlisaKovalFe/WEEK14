// function goNext() {
//     let imageChange = document.querySelector('#imageNew');
//     imageChange.src = './assets/pancake.png';
// }

// function goPrevious() {
//     let imageChangePrevious = document.querySelector('#imageNew');
//     imageChangePrevious.src = './assets/croissant.png';
    
// }


function goNext() {

    let img = document.querySelector('img')

    let img1 = document.createElement('img')
    let img2 = document.createElement('img')
    let img3 = document.createElement('img')

    img1.src = './assets/maffin.png'
    img2.src = './assets/pancake.png'
    img3.src = './assets/zefir.png'

    img.append(img1)
    img.append(img2)
    img.append(img3) 
    
}




