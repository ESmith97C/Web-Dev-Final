
var timerObj = -1;
var i = 0;
function startTimer(){
    if(timerObj!=-1)
            clearInterval(timerObj);

timerObj = setInterval(move, 1000)

}


/////////////////////////////////////////////////////////////////////////////////////
//var marioSpeed = (Math.random() * 100);
//var luigiSpeed = (Math.random() * 100);
//var warioSpeed = (Math.random() * 100);
//var waluigiSpeed = (Math.random() * 100);

var raceDistance = 1000;

var marioPos = 0;
var luigiPos = 0;
var warioPos = 0;
var waluigiPos = 0;

var mario = document.getElementById("mario")
var luigi = document.getElementById("luigi")
var wario = document.getElementById("wario")
var waluigi = document.getElementById("waluigi")
var result = document.getElementById("result")

function startRace(){

document.getElementById('stopLight').src='images/greenlight.png'

marioRight = mario.style.right
luigiRight = luigi.style.right
warioRight = wario.style.right
waluigiRight = waluigi.style.right


marioRight = Number.parseInt(Math.random() * 100);
luigiRight = Number.parseInt(Math.random() * 100);
warioRight = Number.parseInt(Math.random() * 100);
waluigiRight = Number.parseInt(Math.random() * 100);


while (marioPos < raceDistance && luigiPos < raceDistance && warioPos < raceDistance && waluigiPos < raceDistance) {
    marioPos += marioRight;
    luigiPos += luigiRight;
    warioPos += warioRight;
    waluigiPos += waluigiRight;
}


}








//function startRace(){
    



    while (marioPos < raceDistance && luigiPos < raceDistance && warioPos < raceDistance && waluigiPos < raceDistance) {
        marioPos += marioSpeed;
        luigiPos += luigiSpeed;
        warioPos += warioSpeed;
        waluigiPos += waluigiSpeed;
    }




//}
function startRace(){

}


function marioSelected(){
    alert("Mario has been selected!")
}

function luigiSelected(){
    alert("Luigi has been selected!")
}

function warioSelected(){
    alert("Wario has been selected!")
}

function waluigiSelected(){
    alert("Waluigi has been selected!")
}


function timer(){
    disp();
    my_time=setTimeout('timer()',10)
}

function reset1(){
    clearTimeout(my_time);
    document.getElementById('mario').style.left="500px";
    document.getElementById('mario').style.top="100px";
}




