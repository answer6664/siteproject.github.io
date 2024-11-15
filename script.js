// Получаем элементы
const openFormButton = document.getElementById('openForm');
const modal = document.getElementById('formModal');
const closeFormButton = document.getElementById('closeForm');

// Открываем модальное окно
openFormButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Закрываем модальное окно
closeFormButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Закрываем модальное окно при клике вне его
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

$(document).ready(function() {
    // Применяем плавную прокрутку при клике на ссылки с href начинающимися с '#'
    $('a[href^="#"]').on('click', function(event) {
        // Останавливаем стандартное поведение (переход по ссылке)
        event.preventDefault();
        
        // Получаем класс секции из href (например, href="#car-types-section")
        var targetClass = $(this).attr('href').substring(1); // Убираем символ '#' в начале
        
        // Находим первый элемент с этим классом
        var targetElement = $('.' + targetClass);
        
        // Проверяем, существует ли элемент с этим классом
        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top
            }, 800); // 800 - это длительность анимации (в миллисекундах)
        }
    });
});
