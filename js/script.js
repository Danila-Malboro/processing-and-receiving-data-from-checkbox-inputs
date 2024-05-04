const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

// Объект elements - содержит все элементы формы.
// Доступ к полям формы можно получить через name.
sendButton.addEventListener('click', (event) => {
    // Отмена действия по умолчанию
    event.preventDefault();

    // Получить данные из текстового поля
    console.log(myForm.elements.lastName.value);
    console.log(myForm.elements.name.value);

    // Получить значения из раскрывающегося списка
    if (myForm.elements.gender.value === 'm') {
        console.log('Мужчина')
    } else {
        console.log('Женщина')
    }

    // Определить состояние чекбокса
    let isAuto = myForm.elements.auto.checked;
    if (isAuto) {
        console.log('Есть автомобиль')
    } else {
        console.log('Нет Автомобиля')
    }
})