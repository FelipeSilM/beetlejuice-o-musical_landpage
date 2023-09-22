AOS.init();

document.addEventListener('DOMContentLoaded', function(){

    const questions = document.querySelectorAll("[data-faq-question]")

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener("click", toogleFaqAnswer)

    }

})


function toogleFaqAnswer(e){
    const newClass = "faq__questions__item--is-open"
    const parentElement = e.target.parentNode

    parentElement.classList.toggle(newClass)
}



const eventDate = new Date("Oct 06, 2023 20:30:00")
const eventTimeStamp = eventDate.getTime()

const timerToEvent = setInterval(function(){
    const currentDate = new Date()
    const currentTimeStamp = currentDate.getTime()

    const eventDistance = eventTimeStamp - currentTimeStamp

    const daysMs = 1000 * 60 * 60 * 24
    const hoursMs = 1000 * 60 * 60
    const minutesMs = 1000 * 60
    const secondsMs = 1000

    const daysToEvent = Math.floor(eventDistance / daysMs)
    const hoursToEvent = Math.floor((eventDistance % daysMs) / hoursMs)
    const minutesToEvent = Math.floor((eventDistance % hoursMs) / minutesMs)
    const secondsToEvent = Math.floor((eventDistance % minutesMs) / secondsMs)

    document.querySelector(".timer-element").innerHTML = `${daysToEvent}D ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`

    if(eventDistance <= 0){
        document.querySelector(".timer-element").parentNode.innerHTML = "A sessão de estreia ja foi, fique de olho nas outras sessões"
    }

}, 1000)
