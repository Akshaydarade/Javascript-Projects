const dayE1=document.getElementById('days');
const hoursE1=document.getElementById('hours');
const minsE1=document.getElementById('mins');
const secondsE1=document.getElementById('second');




const newyears="1 jan 2022";

function countdown(){

    const currentDate=new Date();
    const newYearsDate=new Date(newyears);

    const seconds=(newYearsDate-currentDate)/1000;

    const days=Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    const minutes=Math.floor(seconds/60)%60;
    const second=Math.floor(seconds)%60;

    dayE1.innerHTML =formattime(days);
    hoursE1.innerHTML=formattime(hours);
    minsE1.innerHTML=formattime(minutes);
    secondsE1.innerHTML=formattime(second);

    

}

function formattime(time){
    return time <10? ('0'+time
    ):time;
}


countdown();
setInterval(countdown,1000);

