const html_btn_start = document.getElementById('btn_start');
const html_btn_stop = document.getElementById('btn_stop');
const html_btn_reset = document.getElementById('btn_reset');

const increment_time = function(){
    time_sec++;
    show_timer();
}

const start_chrono = function(){
    if(!interval_id){
        interval_id = setInterval(increment_time, 1000);
    }
}

const stop_chrono = function(){
    clearInterval(interval_id);
    interval_id = undefined;
}

const reset_chrono = function(){
    stop_chrono();
    time_sec = 0;
    show_timer();
}

const write_timer = function(time){
    let second = time % 60
    let minute = Math.floor(time / 60) % 60
    let hour = Math.floor(time/3600)
    return `${(hour < 10)?'0'+hour: hour}:${two_number(minute)}:${two_number(second)}`
}

const two_number = function(nb){
    if(nb < 10) return '0'+nb;
    else return `${nb}`;
}

const show_timer = function(){
    let html_affichage = document.getElementById('affichage')
    html_affichage.innerText = write_timer(time_sec);
}

let time_sec = 0;
let interval_id;

html_btn_start.addEventListener('click', start_chrono);
html_btn_stop.addEventListener('click', stop_chrono);
html_btn_reset.addEventListener('click', reset_chrono);

