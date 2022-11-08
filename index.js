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


let person = prompt('Как тебя зовут?', 'Твое имя');
let yourName = () => alert(`Привет, ${person}!`); 
yourName()
