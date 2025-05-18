let secondsPassed = 0;
let minutesPassed = 0;
let hoursPassed = 0;
let isRunning = false;
let intervalId = null;

let counting = () => {
    intervalId = setInterval(()=> {
    if(secondsPassed < 60){
            secondsPassed++;
            document.querySelector("#sec").innerHTML = secondsPassed;
        } else{
            secondsPassed = 0;
            minutesPassed++;
        }

        if(minutesPassed < 60){
            document.querySelector("#min").innerHTML = minutesPassed;
        }else{
            minutesPassed = 0;
            hoursPassed++;
        }

        if(hoursPassed < 60){
            document.querySelector("#hr").innerHTML = hoursPassed;
        }else{
            clearInterval(intervalId)
                document.querySelector("#sec").innerHTML = 0;
                document.querySelector("#min").innerHTML = 0;
                document.querySelector("#hr").innerHTML = 0;
                secondsPassed = 0;
                minutesPassed = 0;
                hoursPassed = 0;

        }

},1000)
} 
        
document.querySelector("#start").addEventListener("click", ()=>{
    if(!isRunning){
        counting()
        isRunning = true;
    }
    
})


document.querySelector("#stop").addEventListener("click", ()=> {
    isRunning = false;
    clearInterval(intervalId);
})

document.querySelector("#reset").addEventListener("click", ()=> { 
    isRunning  = false;  
    clearInterval(intervalId);
    document.querySelector("#sec").innerHTML = 0;
    document.querySelector("#min").innerHTML = 0;
    document.querySelector("#hr").innerHTML = 0;
    secondsPassed = 0;
    minutesPassed = 0;
    hoursPassed = 0;

})




