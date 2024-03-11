const time = document.getElementById('clock')

setInterval( function(){
    let date = new Date();
    //Hours:Minutes:Seconds
    time.innerHTML = date.toLocaleTimeString();
}, 1000);