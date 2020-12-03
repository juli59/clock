
const getCurrentTime = () => {
    
        const currentDate = new Date(); 
        
        
        const hours = padNumbers(currentDate.getHours());
        const minutes = padNumbers(currentDate.getMinutes());
        const seconds = padNumbers(currentDate.getSeconds());
        
    
    return `${[hours, minutes, seconds].join(':')}`;
    };
      
    
    const padNumbers = (num) => {
      
       return num < 10 ? `0${num}` : `${num}`;
    };
    
    setInterval( () => {
    const time = getCurrentTime();
    console.log(time);
    const clockFace = document.querySelector('.clock-face');
    clockFace.textContent = time;
    }, 1000 );
    //1 másodpercenként lefut
    //stopperóra
    //*let stopperTime = 0;
    /*setInterval( () => {
    stopperTime++;
    
        const minutes = padNumbers(stopperTime / 60);
        const seconds = padNumbers(stopperTime / 60 % 60);
        const time = getCurrentTime(stopperTime / 3600);
        console.log(time);
        const clockFace = document.querySelector('.stopper-face');
        clockFace.textContent = time;
        }, 1000 );*/