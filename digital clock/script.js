function updateClock(){


let now= new Date();

let hours= now.getHours();
let minutes= now.getMinutes();
let seconds= now.getSeconds();

let ampm = hours >=12?"PM":"AM";

hours=hours%12;
hours = hours ? hours :12;// 0 "should be 12 in 12 hours

hours = hours <10 ? "0" + hours: hours;
minutes = minutes <10 ? "0" + minutes : minutes;
seconds = seconds<10 ? "0" + seconds:seconds;

document.getElementById("hours").innerText=hours+ ":";
document.getElementById("minutes").innerText=minutes + ":";
document.getElementById("seconds").innerText=seconds ;
document.getElementById("ampm").innerText=ampm;
}

setInterval(updateClock, 1000);
updateClock();
