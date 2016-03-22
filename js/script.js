
//создаем объект с методами для создания дом
var test = {
//объявляем функцию,в которой будут создаваться дом-элементы
addInner: function() {

    var mainDiv = document.createElement("div"); //создаем элемент div
        mainDiv.className = 'wrapper'; //присваиваем div класс 'wrapper'
        mainDiv.style.width = '700px';//ширина
        mainDiv.style.margin = '50px';//отступы
        mainDiv.style.padding = '30px';//внутренний отступ
        mainDiv.style.border = '1px solid black';
        mainDiv.style.backgroundColor = '#E0FFFF';
        document.body.appendChild(mainDiv);//вставляем div в body
    
    var wrapper = document.querySelector('.wrapper');
        elemHeader = document.createElement('h3');//создаем элемент заголовок
        elemHeader.innerHTML = 'Тест по программированию';//создаем текст заголовка
        elemHeader.style.textAlign = 'center';//центрируем заголовок
        wrapper.appendChild(elemHeader);//помещаем заголовок в див 

for (var i = 1; i < 4; i++) {
        questionsText = document.createElement('p');//cсоздаем четыре абзаца с вопросами
        questionsText.className = 'lead';//стиль через бутстрап
        questionsText.classList.add('text-primary');
        questionsText.innerHTML = i+'. Вопрос №'+i;//текст для вопросов + порядковый номер
        wrapper.appendChild(questionsText);//помещаем абзацы в главный див

        questionsUl = document.createElement('ul');//создаем четыре списка
        wrapper.appendChild(questionsUl);//помещаем их в абзацы

    var ul = mainDiv.querySelectorAll('ul');//все элементы ul в одной переменной

for(var j = 1; j < 4; j++){
        elemUl = document.createElement('li');//создаем четыре li элемента в каждом ul
        elemUl.style.listStyle = 'none';//убираем стандартные маркеры
        ul[i-1].appendChild(elemUl);//вставляем начиная с [0] ul

    var li = ul[i-1].querySelectorAll('li');//переменная содержащая все li
        answerCheckbox = document.createElement('input');//создаем чекбокс со всеми свойствами
        answerCheckbox.setAttribute('type', 'checkbox');
        answerCheckbox.className = 'checkbox';
        answerCheckbox.style.float = 'left';
        answerCheckbox.style.marginRight = '15px';
        li[j-1].appendChild(answerCheckbox);//вставляем чекбокс во все li

        testText = document.createElement('span');//текст вопросов
        testText.style.fontSize = ('16px');
        testText.innerHTML = j+'.Вариант ответа №'+j;
        li[j-1].appendChild(testText);//вставляем во все ли
}
}

        buttonTest = document.createElement('button');
        buttonTest.setAttribute('type', 'button');
        buttonTest.innerHTML = 'Проверить мои результаты';
        buttonTest.className = 'btn';
        buttonTest.classList.add('btn-primary');
        buttonTest.classList.add('btn-block');
        buttonTest.style.marginTop = '40px';
        buttonTest.style.marginBottom = '40px';
        wrapper.appendChild(buttonTest);
}

};


test.addInner();