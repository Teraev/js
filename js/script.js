let open_buttons = document.querySelectorAll('[data-modal]')
let close_buttons = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')


function open_close_modal(arr , open) {
    arr.forEach(button => {
      button.onclick = () => {
        modal.classList[open ? "add" : "remove"] ('show' , 'fade')
        document.body.style.overflow = open ? "hidden" : "scroll"
      }  
    });
}

open_close_modal(open_buttons , true)
open_close_modal(close_buttons , false)



const slides = document.querySelectorAll('.offer__slide')
const next_button = document.querySelector('.offer__slide-next')
const prev_button = document.querySelector('.offer__slide-prev')

let slidesIndex = 0

slidesShow()

function slidesShow(n) {

    slides.forEach(slide => slide.classList.add('hide' , 'fade'))
    slides[slidesIndex].classList.remove('hide')
}

next_button.onclick = () => {
    slidesIndex++
    slidesShow()
}
