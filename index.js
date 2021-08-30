function prints(){
    document.getElementById("notgay").innerHTML = "I am not gay lol";
}
let a;
let date;
let time;
setInterval(() => {
a = new Date();
date = a.toLocaleDateString();
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById("time").innerHTML = 'Time ' + time + ' Date ' +  date;
}, 1000);
