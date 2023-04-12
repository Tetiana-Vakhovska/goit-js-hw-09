const timer = {
    intervalId:null,
    isActive:false,
    start(){
        if (this.isActive){
            return;
        }
        const startTime = Data.now();
        this.isActive=true;

        this.intervalId=setInterval( ()=>{
            const currentTime=Date.now();
            const deltaTime=currentTime - startTime;
            const { hours, mins, secs}= getTimeComponents(deltaTime);
            console.log('${hours}:${mins}:${secs}');
        }, 1000 );
    },
    stop(){
        clearInterval(this.intervalId);
        this.isActive=false;
    },
};
refs.startBtn.addEventListener('clic', () =>{
    timer.start();
});
refs.stopBtn.addEventListener('clic', () =>{
    timer.stop();
});
function updateClockface({hours,mins,secs}){
    refs.Clockface.textContent='${hours}:${mins}:${secs}';
}