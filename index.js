// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }

  
//   console.log(checkAge(90));


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
//   }
  
//   console.log(checkAge(98));

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

//   console.log(checkAge(70));

// function min (a, b) {
//     if (a > b) {
//         return b; 
//     } else {
//         return a;
//     }
// }
//  console.log(min(1, 1))

// function pow(x, n) {
    
//     x = prompt('what first');
//     n = prompt('what second');

//     if (n > 1) {
//     return x ** n;
//     } else {
//         return false;
//     }
// }

// alert(pow(1, -5));

// function sayHi() {   // (1) создаём
//     alert( "Привет" );
//   }
  
//   let func = sayHi;    // (2) копируем
  
//   func(); // Привет     // (3) вызываем копию (работает)!
//   sayHi(); // Привет    //     эта тоже все ещё работает (почему бы и нет)



// let age = 20; // возьмём для примера 16

// if (age < 18) {
//   welcome();               // \   (выполнится)
//                            //  |
//   function welcome() {     //  |
//     alert("Привет!");      //  |  Function Declaration доступно
//   }                        //  |  во всём блоке кода, в котором объявлено
//                            //  |
//   welcome();               // /   (выполнится)

// } else {

//   function welcome() {
//     alert("Здравствуйте!");
//   }
// }

// // здесь фигурная скобка закрывается,
// // поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.

// welcome(); // Ошибка: welcome is not defined

// let age = prompt("Сколько Вам лет?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Привет!");
//   };

// } else {

//   welcome = function() {
//     alert("Здравствуйте!");
//   };

// }

// welcome(); // теперь всё в порядке


// function sum(a, b) {   //sum - название функции
//     return a + b;}

// alert(sum(4,5))

// function yourName() 
// {
//     let name = prompt('Как тебя зовут?', 'Твое имя');
//     alert(`Привет, ${name}!`);    
// }

// yourName() 

//////////////////////////////////Домашка (решение тестов)//////////////////////////////

//10.
// let person = prompt('Как тебя зовут?', 'Твое имя');
// let yourName = () => alert(`Привет, ${person}!`); 
// yourName()

// let yourName = () => {
//     let person = prompt('Как тебя зовут?', 'Твое имя');
//     alert(`Привет, ${person}!`)
// }

//8.
// yourName()

// function changeMe() {
//     let catImage = document.getElementById('catImage');
//     catImage.src = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"
// }

// function pathMe() {
//     window.location.href = "https://learn.javascript.ru/";    
// }

//9.
// document.getElementById('greet').value = "";

//7.


//console.log(document.getElementById('age-table'));           //работает


// function labelSearch() {                                     //работает
//     let tbl = document.getElementById('age-table');
//     console.log(tbl.getElementsByTagName('label'));
// }

// labelSearch()                            


// function formName() {                                        //работает
//     let formNameSearch = document.getElementsByTagName('form');
//     console.log(formNameSearch[1]);
// }
// formName()




////////////////////////////////////////пробы 7 задания////////////////////////////////////////
//console.log(table.getElementsByTagName('label'));

// function labelsTable() {
//     let lab = document.getElementsByTagName('table');
//     console.log(lab.label[0]);
// }
// labelsTable() 



// function exp() {
//     let formName = document.getElementsByTagName('form');
//     console.log(formName.name);
// }
// exp()

//console.log(form.getElementsByName('name'));


// let inputs = table.getElementsByTagName('input');
// console.log(inputs);

//console.log(table.getElementsByTagName('input'))


function formSearch() {   
    // let search = document.getElementsByTagName('form');
    // let search2 = search.getElementsByName('search-person');
    // console.log(search2); 
    // let find = document.getElementsByTagName('form');
    // console.log(find.getElementsByName('search-person'));
    // let labelSearch = document.getElementsByTagName('label');
    // //let inputSearch = labelSearch.getElementsByTagName('input');
    // console.log(labelSearch.getElementsByTagName('input'));
    let find = document.getElementsByTagName('form');
    console.log(find.getElementByName('search-person'));
    
}
formSearch()

