let gameToggle = document.querySelector('.game');
let random =  Math.round(Math.random());
let xo=['X', 'O'];
let count = 1;
var y = 1;
var n = 2;
let countTheme=0;
let scoreX = 0;
let scoreO = 0;
let xScore = document.querySelector('.x-score');
xScore.textContent = 'User X: ' + scoreX;
let oScore = document.querySelector('.o-score');
oScore.textContent = 'User O: ' + scoreO;
var screen = document.querySelector('.screen');
screen.textContent = xo[random];
let darkThemeButton = document.querySelector('.btn-theme');
darkThemeButton.addEventListener('click', function(e){changeTheme(e)}, false);
function tie(){
    let divWin = document.createElement('div');
    let screen = document.getElementsByClassName('screen');
    divWin.textContent = "Remis";
    screen[0].textContent = "";
    screen[0].append(divWin);
}
function changeTheme(e){
    let body = document.getElementsByTagName('body');
    let btn = e.target;
    let area = document.querySelectorAll('.area');
    if(count%2===0){
        btn.classList.remove('btn-dark-theme');
        btn.classList.add('btn-light-theme');
        btn.textContent='Ciemny motyw';
        body[0].classList.remove('dark-theme');
        for(i=0; i<area.length; i++){
            area[i].classList.remove('border-white');
            area[i].classList.add('border-black');
        }
    }
    else{
    for(i=0; i<area.length; i++){
        area[i].classList.remove('border-black');
        area[i].classList.add('border-white');
    }  
    btn.classList.remove('btn-light-theme');
    btn.classList.add('btn-dark-theme');
    btn.textContent ='Jasny motyw';
    
    body[0].classList.add('dark-theme');
    }
    count++;
}
gameToggle.addEventListener('click', function (e) {game(e)}, false);
function winF(whoWin){
    let divWin = document.createElement('div');
    let screen = document.getElementsByClassName('screen');
    divWin.textContent = "Wygrał " + whoWin;
    screen[0].textContent = "";
    screen[0].append(divWin);
    if(whoWin ==='X'){
        scoreX+=10;
        scoreO-=10;
        xScore.textContent = 'User X: ' + scoreX;
        oScore.textContent = 'User O: ' + scoreO

        
    }
    else if(whoWin==='O'){
        scoreO+=10;
        scoreX-=10;
        oScore.textContent = 'User O: ' + scoreO;
        xScore.textContent = 'User X: ' + scoreX;
    }
}
function game(e){
    if(e.target.classList.contains('completed')){
        return 0;
    }
    else{
    if(e.target.classList.contains("area")){
        if(count===0){
        e.target.textContent=screen.textContent;
        e.target.classList.add("completed");
        if(screen.textContent==='X'){
            screen.textContent='O';
        }
        else if(screen.textContent==='O'){
            screen.textContent='X';
        }
        }
        else{
            if(screen.textContent==='X'){
                e.target.textContent=xo[0];
                screen.textContent='O';
                e.target.classList.add("completed");
            }
            else if(screen.textContent==='O'){
                e.target.textContent=xo[1];
                screen.textContent='X';
                e.target.classList.add("completed");
            }
        }
        count++;
    }
}
if(count>=5){
    let win = document.querySelectorAll('.area');
    
    if(win[0].textContent != "" && win[0].textContent === win[1].textContent && win[1].textContent === win[2].textContent){
        winF(win[0].textContent);
    }
    else if(win[3].textContent != "" && win[3].textContent === win[4].textContent && win[3].textContent === win[5].textContent){
        winF(win[3].textContent);
    }
    else if(win[6].textContent != "" && win[6].textContent === win[7].textContent && win[6].textContent === win[8].textContent){
        winF(win[6].textContent);
    }
    else if(win[0].textContent != "" && win[0].textContent === win[3].textContent && win[0].textContent === win[6].textContent){
        winF(win[0].textContent);
    }
    else if(win[1].textContent != "" && win[1].textContent === win[4].textContent && win[1].textContent === win[7].textContent){
        winF(win[1].textContent);
    }
    else if(win[2].textContent != "" && win[2].textContent === win[5].textContent && win[5].textContent === win[8].textContent){
        winF(win[2].textContent);
    }
    else if(win[0].textContent != "" && win[0].textContent === win[4].textContent && win[0].textContent === win[8].textContent){
        winF(win[0].textContent);
    }
    else if(win[2].textContent != "" && win[2].textContent === win[4].textContent && win[4].textContent === win[6].textContent){
        winF(win[2].textContent);
    }
    else{
       if(count>9){
       tie();
       }
        
    }
}
    
    
    
}
