let [hour,minutes,seconds] = [0,0,0];
let time = document.querySelector(".timer")
let int = null;

document.querySelector("button.start").addEventListener("click",()=>{
    if(int !== null ){
        clearInterval(int);
    }
    int = setInterval(displayTimer,1000);
});

document.querySelector("button.stop").addEventListener("click",()=>{
clearInterval(int)
});

document.querySelector("button.reset").addEventListener("click",()=>{
    clearInterval(int);
    [hour,minutes,seconds]=[0,0,0];
    time.innerHTML = "00 : 00 : 00";
});

const displayTimer=()=>{
    seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;
    }
    if(minutes==60){
        minutes = 0;
        hour++;
    }
    
    let h = hour < 10 ? "0" + hour : hour;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    time.innerHTML = `${h} : ${m} : ${s}`;
}