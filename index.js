// selecting all of the css classes on which we want to apply functionalities
const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

// setting up the period of working
setInterval(()=>{
    // extracting the current time from DATE() function
    let day = new Date()
    let hour = day.getHours()
    let minutes = day.getMinutes()
    let seconds = day.getSeconds()

    // formula that is explained above for the rotation of different hands
    let hrrotation = (30 * hour) + (0.5 * minutes)
    let minrotation = 6 * minutes
    let secrotation = 6 * seconds

    hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`
    min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`
    sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`
})