$(document).ready(function () {
    $('.posts-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        easing: 'ease',
        infinite: false,
        waitForFnimate: false,
        responsive:[
            {
                breakpoint:576,
                settings:{
                    slidesToShow: 1,
                    centerMode:true,
                }
                
            }
        ]
    });
});

let popup_start = document.querySelector('.popup-show')
popup_start.onclick = function (event) {
    event.preventDefault();
}

function showValue() {
    let name = document.querySelector('#request-name');
    console.log(name.value);
    let adress = document.querySelector('#request-adress');
    console.log(adress.value);
    let description = document.querySelector('#request-desc');
    console.log(description.value);
};

function getCheckedCheckBoxes() {
    let checked = [];
    let list_checkbox = document.querySelectorAll('input[type="checkbox"]');
    for (let j = 0, J = list_checkbox.length; j < J; j++)
        if (list_checkbox[j].checked) checked.push(document.querySelector('label[for=' + list_checkbox[j].id + ']').innerText);

    if (checked.length) console.log('Выбрано: ' + checked.join(', '));
    else console.log('Пользователь не сделал выбор');
}
let body = document.body;
function showPopup() {
    let popup = document.querySelector('#popup');
    popup.classList.add('show')
    body.classList.add('stop-scroll')

}

popup_start.addEventListener("click", showValue);
popup_start.addEventListener("click", getCheckedCheckBoxes);
popup_start.addEventListener("click", showPopup);



let popup_close = document.querySelector('.popup-wrapper')
function closePopup() {
    popup.classList.remove('show')
    body.classList.remove('stop-scroll')
}
function resetForm() {
    let form = document.querySelector('form');
    form.reset()
}

popup_close.addEventListener("click", closePopup)
popup_close.addEventListener("click", resetForm)

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
console.log(anchor_btn)
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
