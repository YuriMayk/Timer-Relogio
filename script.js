let horaMostrada = document.querySelector("span#hour")
let agora = new Date
let image = document.querySelector("img#image")
let actualHour = agora.getHours()
let actualMinutes = agora.getMinutes()

if (actualHour < 12) {
    horaMostrada.innerHTML = `Agora são exatamente <b> ${actualHour} horas e ${actualMinutes} minutos.</b></p>`
    document.body.style.backgroundColor = "#FAE1AA"
    image.src = "./morning-gimp.png"
} else if (actualHour < 18) {
    horaMostrada.innerHTML = `Agora são exatamente <b> ${actualHour} horas e ${actualMinutes} minutos.</b></p>`
    document.body.style.backgroundColor = "#6a5a41"
    image.src = "./afternoon-gimp.png"
} else if (actualHour < 22){
    horaMostrada.innerHTML = `Agora são exatamente <b> ${actualHour} horas e ${actualMinutes} minutos.</b></p>`
    document.body.style.backgroundColor = "#24507A"
    image.src = "./soon-night-gimp.png"
} else if(actualHour <24) {
    horaMostrada.innerHTML = `Agora são exatamente <b> ${actualHour} horas e ${actualMinutes} minutos.</b></p>`
    document.body.style.backgroundColor = "#543c4d"
    image.src = "./night-gimp.png"
}