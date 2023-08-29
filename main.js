
let countDownDate = new Date("Dec 31, 2023 00:00:00").getTime(); /* establecemos la fecha límite */

let x = setInterval(function(){  /* la funcion se actualiza cada segundo */

    let now = new Date().getTime(); /* fecha y hora de hoy */
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 *60 *24));
    let hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 * 60));
     let minutes = Math.floor((distance % (1000 * 60 * 60)) 
     / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){

        clearInterval(x); /* cuando la diferencia sea menor o igual a cero, la funcion se destruye */

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

    }

}, 1000);




