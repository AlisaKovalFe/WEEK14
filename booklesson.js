
    var classList = document.body.classList;

    classList.remove('page'); // удалить класс
    classList.add('post'); // добавить класс

    for (var i = 0; i < classList.length; i++) { // перечислить классы
      console.log( classList[i] ); // main, затем post
    }

    console.log( classList.contains('post') ); // проверить наличие класса

    console.log( document.body.className ); // main post, тоже работает

   document.querySelector('#hi')