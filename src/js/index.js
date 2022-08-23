//настройка слайдера
$(document).ready(function () {
    $('.posts-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        easing: 'ease',
        infinite: false,
        waitForFnimate: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }

            }
        ]
    });
});


//выводим значения из инпутов в консоль
function showValue() {
    let inputValue=document.querySelectorAll('.form__input');
    for (let i=0; i<inputValue.length;i++){
        if(inputValue[i].value==0){
            continue
        }else{
        console.log(inputValue[i].value)
        }
    }
};
//выводим значения чекбоксов
function getCheckedCheckBoxes() {
    let checked = [];
    let list_checkbox = document.querySelectorAll('input[type="checkbox"]');
    for (let j = 0, J = list_checkbox.length; j < J; j++)
        if (list_checkbox[j].checked) checked.push(document.querySelector('label[for=' + list_checkbox[j].id + ']').innerText);

    if (checked.length){
        console.log(checked.join(', '));
    } 
}


//начинаем работать с формой
document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('form');
    form.addEventListener('submit',formSend);

    async function formSend(e){
        e.preventDefault();
        let error=formValidate(form);
        if (error===0){
            showPopup();
            showValue();
            getCheckedCheckBoxes();
            form.reset();
        }
    }
    function formValidate(form){
        let error=0;
        let formReq=document.querySelectorAll('._req');//required - обязательные поля

        for (let index=0; index<formReq.length; index++){
            const input=formReq[index];
            formRemoveError(input)

            if(input.classList.contains ('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else {
                if(input.value===''){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //проверка email
    function emailTest(input){
        return !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
    }
})

let body = document.body;

let popup_section = document.querySelector('#popup');//секция

function showPopup() {
    popup_section.classList.add('show')// добавляем секции класс show
    body.classList.add('stop-scroll')// запрещаем скролл контента
}

//закрываем попап
let popup_wrapper = document.querySelector('.popup-wrapper')
let popup = document.querySelector('.popup-content');

function targetCheck(e) {//кликнули на враппер попапа?
    if ((e.target) == popup_wrapper) {
        popup_section.classList.remove('show')//убираем у секции класс show
        body.classList.remove('stop-scroll')//разрешаем скролл контента
    }
}
function resetForm() {//очищаем поля формы
    form.reset()
}

popup_wrapper.addEventListener("click", targetCheck)




//плавная прокрутка
const anchor_menu = document.querySelectorAll('.header-menu__list a[href*="#"]')
for (let anchor of anchor_menu) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

const anchor_btn = document.querySelectorAll('.firstscreen-about a[href*="#"]')
for (let anch of anchor_btn) {
    anch.addEventListener('click', function (e) {
        e.preventDefault()
        const block = anch.getAttribute('href').substr(1)
        document.getElementById(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//burger
let header_burger_wrap = document.querySelector('.header-burger-wrap')
let header_menu = document.querySelector('.header-menu')
let header_menu__list = document.querySelector('.header-menu__list')
let header_burger = document.querySelector('.header-burger')
function burger() {
    header_menu.classList.toggle('burger_fullscreen');
    body.classList.toggle('stop-scroll')
    header_burger_wrap.classList.toggle('active-burger');
    header_burger.classList.toggle('active');
}
header_burger_wrap.addEventListener('click', burger)


header_menu.addEventListener('click', function () {
    if (header_menu.classList.contains('burger_fullscreen')) { burger() }
})

