var link = document.querySelector('.contacts-button');
var popup = document.querySelector('.feedback');
var close = popup.querySelector('.close-button');

// Открытие окна
link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('modal__show');
});


// закрытие окна
close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('modal__show');
});
