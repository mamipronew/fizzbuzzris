
var canvas = document.getElementById("myCanvas");
canvas.width = 640;		//canvasの横幅（よこはば）
canvas.height = 480;	//canvasの縦幅（たてはば）
var ctx = canvas.getContext("2d");


var canvas2 = document.getElementById("canvas2");

var ctx2 = canvas2.getContext("2d");
canvas2.width = 640;		//canvasの横幅（よこはば）
canvas2.height = 480;	//canvasの縦幅（たてはば）

var canvas3 = document.getElementById("canvas3");

var ctx3 = canvas2.getContext("2d");
canvas3.width = 640;		//canvasの横幅（よこはば）
canvas3.height = 480;	//canvasの縦幅（たてはば）


const gameObj = {
 itemWidth: 30,
  score:0,
  gritYoko: 5,
  gritTate: 8,
  endNum: 42

};


let endingFlag = false;
const MaxY = gameObj.gritTate - 1;
const MaxX = gameObj.gritYoko - 1;
let moveX = 2;
let moveY = 0;



let screenWidth = gameObj.gritYoko * gameObj.itemWidth;
let screenHeight = gameObj.gritTate * gameObj.itemWidth;
let itemArry = [...Array(gameObj.endNum).keys()] ;//配列を作る

ctx.translate(5,5);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, screenWidth, screenHeight); 


ctx.lineWidth = 1;

ctx.strokeRect(screenWidth + 30,  20, 70, 35); 
ctx.fillStyle = "white";
ctx.fillRect(screenWidth + 30,  20, 70, 35); 
ctx.fillStyle = "black";
ctx.fillText("score:", screenWidth + 32, 35);
ctx.strokeRect(screenWidth + 30,  60, 90, 140); 
ctx.fillText("ScoreList", screenWidth + 32, 70);
ctx.fillText("1 = 100", screenWidth + 32, 85);
ctx.fillText("2 = 300", screenWidth + 32, 95);
ctx.fillText("3 = 700", screenWidth + 32, 105);
ctx.fillText("4 = 1500", screenWidth + 32, 115);
ctx.fillText("5 = 3000", screenWidth + 32, 125);
ctx.fillText("6 = 7000", screenWidth + 32, 135);
ctx.fillText("7 = 15000", screenWidth + 32, 145);
ctx.fillText("8 = 30000", screenWidth + 32, 155);
ctx.fillText("GAMECLEAR & ", screenWidth + 32, 175);
ctx.fillText("NO BLOCK LEFT", screenWidth + 32, 185);
ctx.fillText("= 250000", screenWidth + 32, 195);


/*
ctx.strokeRect(screenWidth + 135,  10, 80, 100); 
ctx.fillText("RANKING", screenWidth + 135, 9);
ctx.fillText("1:", screenWidth + 135, 25);
*/



let txt = "";
//作りかけ
function fizzAnime(dx, dy,txt) {
  let x = 45;
 
  drawStar(canvas2, dx, dy, 10, 12, 0, 8,{
    strokeColor : '#DC0',
    strokeWidth : 1,
    fillColor : '#F00'
  });
  ctx2.fillStyle = "black";
  ctx2.font = "15px 'Arial Black'";
  ctx2.textAlign = "left";
  ctx2.textBaseline = "top";
  
  ctx2.fillText(txt, dx -5, dy -5, 10);
  

  setTimeout(function() {
    ctx2.clearRect(0, 0, screenWidth + 50, screenHeight +50); 
  }, 1*x);

  setTimeout(function() {
    drawStar(canvas2, dx, dy, 20, 12, 0, 16,{
      strokeColor : '#DC0',
      strokeWidth : 1,
      fillColor : '#F00'
    });
    ctx2.fillStyle = "black";
    ctx2.font = "20px 'Arial Black'";
   
    
    ctx2.fillText(txt, dx -10, dy -10, 20); 
  }, 1*x +1);

  setTimeout(function() {
    ctx2.clearRect(0, 0, screenWidth + 50, screenHeight +50); 
  }, 2*x);


  setTimeout(function() {
    drawStar(canvas2, dx, dy, 30, 12, 0, 24,{
      strokeColor : '#DC0',
      strokeWidth : 1,
      fillColor : '#F00'
    });
    ctx2.fillStyle = "black";
    ctx2.font = "30px 'Arial Black'";
   
    
    ctx2.fillText(txt, dx -15, dy -15, 30); 
  }, 2*x +1);
  setTimeout(function() {
    ctx2.clearRect(0, 0, screenWidth + 50, screenHeight +50); 
  }, 3*x);

  setTimeout(function() {
    drawStar(canvas2, dx, dy, 20, 12, 0, 16,{
      strokeColor : '#DC0',
      strokeWidth : 1,
      fillColor : '#F00'
    });
    ctx2.fillStyle = "black";
    ctx2.font = "20px 'Arial Black'";
   
    
    ctx2.fillText(txt, dx -10, dy -10, 20); 
  }, 3*x +1);

  setTimeout(function() {
    ctx2.clearRect(0, 0, screenWidth + 50, screenHeight +50); 
  }, 4*x);

  
  
}



function fizzBuzzAnime(dx, dy) {
  let x = 45;
 

  drawStar(canvas2, dx, dy, 10, 12, 0, 8,{
    strokeColor : '#ff4500',
    strokeWidth : 1,
    fillColor : '#ffd700'
  });
  ctx2.fillStyle = "black";
  ctx2.font = "10px 'Arial Black'";
  ctx2.textAlign = "left";
  ctx2.textBaseline = "top";
  
  ctx2.fillText("FIZZ", dx -5, dy -10, 10);
  ctx2.fillText("BUZZ", dx -5, dy -15, 10);
  

  setTimeout(function() {
    ctx2.clearRect(0, 0, screenWidth + 50, screenHeight +50); 
  }, 1*x);

  setTimeout(function() {
    drawStar(canvas2, dx, dy, 25, 12, 0, 18,{
      strokeColor : '#ff4500',
      strokeWidth : 1,
      fillColor : '#ffd700'
    });
    ctx2.fillStyle = "black";
    ctx2.font = "15px 'Arial Black'";
   
    
    ctx2.fillText("FIZZ", dx -10, dy -15, 20); 
    ctx2.fillText("BUZZ", dx -10, dy -0, 20); 
  }, 1*x +1);

  setTimeout(function() {
    ctx2.clearRect(0, 0, screenWidth + 50, screenHeight +50); 
  }, 2*x);


  setTimeout(function() {
    drawStar(canvas2, dx, dy, 40, 12, 0, 32,{
      strokeColor : '#ff4500',
      strokeWidth : 1,
      fillColor : '#ffd700'
    });
    ctx2.fillStyle = "black";
    ctx2.font = "30px 'Arial Black'";
   
    ctx2.fillText("FIZZ", dx -15, dy -30, 30); 
    ctx2.fillText("BUZZ", dx -15, dy -0, 30); 
  }, 2*x +1);
  setTimeout(function() {
    ctx2.clearRect(0, 0, screenWidth + 50, screenHeight +50); 
  }, 3*x);

  setTimeout(function() {
    drawStar(canvas2, dx, dy, 20, 12, 0, 16,{
      strokeColor : '#ff4500',
      strokeWidth : 1,
      fillColor : '#ffd700'
    });
    ctx2.fillStyle = "black";
    ctx2.font = "20px 'Arial Black'";
   
    
    ctx2.fillText("FIZZ", dx -5, dy -10, 10);
    ctx2.fillText("BUZZ", dx -5, dy -15, 10);
  }, 3*x +1);

  setTimeout(function() {
    ctx2.clearRect(0, 0, screenWidth + 50, screenHeight +50); 
  }, 4*x);

  
  
}



const drawtemp = function(i){
  //drawImage(image, x1, y1, width1, height1, x2, y2, width2, height2)
  ctx.drawImage(fizzImg, fizzImg.width/5 * i, 0,fizzImg.width/5, fizzImg.height,screenWidth + 32, 200,fizzImg.width/5,fizzImg.height);

}


//fieldArrayは動かないけど消去される。tblArrayは動くけど消去されない。
//　tblArray→fieldArrayにする

let fieldArray = [...Array(gameObj.gritTate).keys()];
for (let index = 0; index < fieldArray.length; index++) {
  fieldArray[index] = new Array(gameObj.gritYoko).fill(0);
  
}
let copyArray = [];
let checkArray = [...Array(gameObj.gritTate).keys()];
for (let index = 0; index < checkArray.length; index++) {
  checkArray[index] = new Array(gameObj.gritYoko).fill(0);
  
};

let tblArray = [...Array(gameObj.gritTate).keys()];
for (let index = 0; index < tblArray.length; index++) {
  tblArray[index] = new Array(gameObj.gritYoko).fill(0);
  
}


function drawBlock(x, y, num) {

  let blockSize = gameObj.itemWidth;
  let px = x * blockSize;
       let py = y * blockSize;
          ctx.fillStyle = "#A22";
        ctx.fillRect(px, py, blockSize, blockSize);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeRect(px, py, blockSize, blockSize); 
        ctx.fillStyle = "white";
        ctx.font = "italic 10px sans-serif";
        ctx.fillText(num, px + blockSize /2- 3, py + blockSize/2+4);
       

}


tblArray[0][0] = 1;
let num = selectNum();
drawAll(num);


function drawAll(num) {
 
  ctx.clearRect(0, 0, screenWidth, screenHeight);
  for (let y = 0; y < gameObj.gritTate ; y++) {
    for (let x = 0; x < gameObj.gritYoko; x++) {
      if (tblArray[y][x] == 1) {
        drawBlock(moveX + x, moveY + y , num) ;
             }     
    }
  }


  for (let y = 0; y < gameObj.gritTate ; y++) {
    for (let x = 0; x < gameObj.gritYoko; x++) {

     //もし動かないならそこの配列の数字を表示する（別な関数でfieldArrayに数字を入れる）
      if (checkArray[y][x] == 1) {
        num = fieldArray[y][x];
        drawBlock(x, y , num);
        if (checkArray[1][2] == 1 && num%3 !=0) {
          gameover();
          endingFlag = true;
        }

        

             }
    }
    
  }

}


function drawGhost(moveY, moveX, num) {
  let blockSize = gameObj.itemWidth;
  let px = moveX * blockSize;
       let py = moveY * blockSize;
          ctx.fillStyle = "#A22";
        ctx.fillRect(px, py, blockSize, blockSize);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeRect(px, py, blockSize, blockSize); 
        ctx.fillStyle = "white";
        ctx.font = "italic 10px sans-serif";
        ctx.fillText(num, px + blockSize /2- 3, py + blockSize/2+4);
  
}



document.onkeydown = function(e)
{

  switch (e.keyCode) {
    case 37: //左
     if(checkMove(-1, 0)){
      moveX --;
      checkBottom();
     }
 
      break;
    
      case 38: //上
      if (checkMove(0, -1)) {
        moveY --;
        checkBottom();
      }
      

      break;
      case 39: //右
      if (checkMove(1, 0)) {
        moveX ++;
        checkBottom();
      }
      
      
      break;
      case 40: //下
      if (checkMove(0, 1)) {
        moveY ++;
        checkBottom();

      }
      break;

  

  }
 if (endingFlag == true) {
   return;
 }
  drawAll(num) ;

}

let speedUp = 1000 - 6*num;

var id = setInterval(() => {
  moveY ++;
  checkBottom();
   if (endingFlag == true) {
   return;}
  
 drawAll(num) ;
 
 
}, speedUp);



let tempY = 0;
let lineFlag = false;
let lineCount = 0;
function checkLine(y,x){
   copyArray = JSON.parse(JSON.stringify(fieldArray));
 for (let px = 0; px < gameObj.gritYoko; px++) {
   if (checkArray[y][px] == 1) {
    lineCount ++;
   }
   if (lineCount == gameObj.gritYoko) {
     tempY = y;
     lineFlag = true;

     play(56,0.1);
     setTimeout(function() {
      play(53,0.1);
    }, 100);
    setTimeout(function() {
      play(54,0.1)
    }, 200);
     fizzAnime(x * gameObj.itemWidth + gameObj.itemWidth /2 , y * gameObj.itemWidth + gameObj.itemWidth/2,"BUZZ") ;

     
   }
 }
   
  
         
  }
  

        function lineDelCopy(tempY, lineFlag) {
          if(tempY == 0) return;
          if(lineFlag == false) return;
          
         if (lineFlag) {
          fieldArray[tempY][0] = 0;
          fieldArray[tempY][1] = 0;
          fieldArray[tempY][2] = 0;
          fieldArray[tempY][3] = 0;
          fieldArray[tempY][4] = 0;

          checkArray[tempY][0] = 0;
          checkArray[tempY][1] = 0;
          checkArray[tempY][2] = 0;
          checkArray[tempY][3] = 0;
          checkArray[tempY][4] = 0;


           
         }
        
      
        
          for (let ny = 1; ny < tempY + 1; ny++) {
            for (let nx = 0; nx < gameObj.gritYoko; nx++) {
            
              fieldArray[ny][nx] = copyArray[ny -1][nx];
              if (copyArray[ny -1][nx] != 0) {
                checkArray[ny][nx] = 1;
              }
              if (copyArray[ny -1][nx] == 0) {
                checkArray[ny][nx] = 0;
              }
              fieldArray[0][nx] = 0;
              checkArray[0][nx] = 0;

            }
            
          }
          
         lineFlag = false;
          lineCount = 0;
          scoreChecker(gameObj.gritYoko);
          
        }


function lineDelCopy2(num,x,y){
  copyArray = JSON.parse(JSON.stringify(fieldArray));
  
 


  if(num % 100 == 1){

    for (let ny = 0; ny < y-2 ; ny++) {
      if(!copyArray[y][x-1])continue;
      fieldArray[y + 1][x-1] = copyArray[y][x-1];

      fieldArray[y + 1][x-1]=0;
      checkArray[y + 1][x-1]=0;
    }

  }

  if(num % 100 == 3){

    for (let ny = 0; ny < y-1 ; ny++) {
      if(!copyArray[y -1][x-1])continue;
      fieldArray[y][x-1] = copyArray[y -1][x-1];

      fieldArray[y][x-1] =0;
      checkArray[y][x-1] =0;
    }

  }



}


       


function deleteChecker(x,y ,num) {

  if (num % 15 == 0) {
    checkFizzBuzz(x, y);
    scoreFizzBuzz = 0;


    
  } else if(num % 5 == 0)
    { 
      
      checkLine(y, x);
      console.log(lineFlag);
      if (lineFlag = true) {
        lineDelCopy(tempY);
      }
     
      tempY = 0;
      lineFlag = false;
      lineCount = 0;

      
}
 
  else if (num % 3 == 0 && y != 7) {
   
    check3(x ,y);

  }

  
}

function check3(x,y){
  let score3 = 0;

  for (let ny = 0; ny < gameObj.gritTate; ny++) {
    if(checkArray[ny][x] == 1){ score3 ++;}
    fieldArray[ny][x] = 0;
    checkArray[ny][x] = 0;
   
    
  }
 if (score3 == 1) {
 
   score3 = 0;
 }
 if (score3 !=0) {
   //みかんフィズの音

   play(55,0.1);
   setTimeout(function() {
    play(52,0.1);
  }, 100);
  setTimeout(function() {
    play(53,0.1)
  }, 200);


  


  
  fizzAnime(x * gameObj.itemWidth + gameObj.itemWidth /2 , y * gameObj.itemWidth + gameObj.itemWidth/2,"FIZZ") ;
 }
 
 scoreChecker(score3);

}


let scoreFizzBuzz = 0;
function checkFizzBuzz(x,y){
  play(57,0.1);
  setTimeout(function() {
    play(53,0.1);
  }, 100);
  setTimeout(function() {
    play(55,0.1);
  }, 200);
  setTimeout(function() {
    play(59,0.1);
  }, 300);
  fizzBuzzAnime(x * gameObj.itemWidth + gameObj.itemWidth /2 , y * gameObj.itemWidth + gameObj.itemWidth/2);

  copyArray = JSON.parse(JSON.stringify(fieldArray));
  
  if (y != MaxY) {
    let judgeX = 0;

    if (checkArray[y + 1][x] == 1) {
      if (checkArray[y + 1][x -1] ==1 && x != 0) {
        judgeX = x-1;
        judgeChecker3(judgeX,y);
        


      }
      if (checkArray[y + 1][x +1] == 1 && x !=MaxX) {
        judgeX = x+1;
        judgeChecker3(judgeX,y);
        
        
      }
   
      //15の下も消す
      checkArray[y + 1][x] = 0;
      fieldArray[y + 1][x] = 0;
      scoreFizzBuzz = scoreFizzBuzz + 1;
       //１５自体も消す
       checkArray[y][x] = 0;
       fieldArray[y][x] = 0;

       scoreFizzBuzz = scoreFizzBuzz + 1;
       scoreChecker(scoreFizzBuzz);
      
    }
    
  }

  else {

    //judgeXの判定式
    
    let bx = x;
    let by = y;
    
    //パターンは４つ
    //左上がある→左横もある judgeXはbx-1
    //右上がある→右横もある
    //score判定も考える
    let judgeX = 0;
    //☆もしなんかだったらjudgeXはbx-1という判定式
    
 
    
    if (checkArray[y][x-1] == 1 && x != 0) {
      judgeX = x-1;
    }
    
    judgeChecker(judgeX, y);
    if (checkArray[y][x+1] == 1 && x !=MaxX) {
      judgeX = x+1;
    }
    judgeChecker(judgeX, y);
     //１５自体も消す
     checkArray[y][x] = 0;
     fieldArray[y][x] = 0;
     scoreFizzBuzz = scoreFizzBuzz + 1;
     scoreChecker(scoreFizzBuzz);
  }


}

function judgeChecker(judgeX, y) {
  if(checkArray[y -1][judgeX] ==1)
{
  console.log(fieldArray[y -1][judgeX]);


 

  for (let ny = y; ny > 1; ny--) {
    fieldArray[ny][judgeX] = copyArray[ny -2][judgeX];
    checkArray[ny][judgeX] = checkArray[ny -2][judgeX];
    
  }
  scoreFizzBuzz = scoreFizzBuzz + 2;

} else {


  fieldArray[y][judgeX] = 0;
  
  for (let ny = y; ny > 0; ny--) {
    fieldArray[ny][judgeX] = copyArray[ny -1][judgeX];
    checkArray[ny][judgeX] = checkArray[ny -1][judgeX];
    
  
  }
  scoreFizzBuzz = scoreFizzBuzz + 1;

}

  
}

function judgeChecker3(judgeX, y) {
  if(checkArray[y -1][judgeX] ==1)
{
 

 




  for (let ny = y + 1; ny > 2; ny--) {
    fieldArray[ny][judgeX] = copyArray[ny - 3][judgeX];
    checkArray[ny][judgeX] = checkArray[ny - 3][judgeX];
  }
  scoreFizzBuzz = scoreFizzBuzz + 3;
}
  else if (checkArray[y][judgeX] ==1) {
  
   

    for (let ny = y; ny > 1; ny--) {
      fieldArray[ny][judgeX] = copyArray[ny - 2][judgeX];
      checkArray[ny][judgeX] = checkArray[ny - 2][judgeX];
    }
    scoreFizzBuzz = scoreFizzBuzz + 2;
  }

 else {



 
  for (let ny = y-1; ny>0; ny--) {
    fieldArray[ny][judgeX] = copyArray[ny -1][judgeX];
    checkArray[ny][judgeX] = checkArray[ny -1][judgeX];
  }
  scoreFizzBuzz = scoreFizzBuzz + 1;
}

  
}





function scoreChecker(num) {
  switch (num) {
    case 1:
      gameObj.score += 100;
      
      break;
    case 2:
      gameObj.score += 300;
      
      break;
    case 3:
      gameObj.score += 700;
      break;

    case 4:
      gameObj.score += 1500;
      break;

    case 5:
      gameObj.score += 3000;
      break;
    case 6:
      gameObj.score += 7000;
      break;
    case 7:
      gameObj.score += 15000;
      break;
      case 8:
        gameObj.score += 30000;
        break;

 
  }
  ctx.fillStyle = "white";
ctx.fillRect(screenWidth + 30,  20, 70, 35); 
ctx.fillStyle = "black";
ctx.fillText("score:", screenWidth + 32, 35);

  ctx.fillStyle = "red";
  
  ctx.fillText(gameObj.score, screenWidth + 35, 50);
  console.log(gameObj.score);
}



//x, yの動きの幅を引数に取るのでmx,my
function checkMove(mx, my) {
  for (let y = 0; y < gameObj.gritTate ; y++) {
    for (let x = 0; x < gameObj.gritYoko; x++) {

let nx = 0;
let ny = 0;
      if (tblArray[y][x] == 1) {
        nx = moveX + mx +x;
        ny = moveY + my +y;
        
        if(
          nx < 0 ||
            ny < 0 ||
            nx > gameObj.gritYoko -1 ||
            ny > gameObj.gritTate -1 ||
           checkArray[ny][nx] == 1
            
            ){
        return false;
        }

             }
      
    }


}
return true;
}

function selectNum() {

  let num = itemArry[0] + 1;
  itemArry.shift();
  return num;
    
  }



  function checkBottom() {
   
   
    for (let y = 0; y < gameObj.gritTate ; y++) {
      for (let x = 0; x < gameObj.gritYoko; x++) {
        let nx = 0;
        let ny = 0;
        if (tblArray[y][x] == 1) {
          nx = moveX + x;
          ny = moveY + y;


          if(ny >= gameObj.gritTate -1 || checkArray[ny + 1][nx] == 1){
          
            fieldArray[ny][nx] = num;
            checkArray[ny][nx] = 1;
 
            if (checkArray[1][moveX] ==1 && checkArray[0][moveX]==1 && num%3 !=0) {
              gameover();
              return;
            }
            
            deleteChecker(nx,ny,num);
            

            if (num == gameObj.endNum) {
              checkEnd();
              
            }
            num = selectNum();
           ;
          moveX = 2;
          moveY = 0;
          if (endingFlag == true) {
            return;}
          drawAll(num) ;
          
          }

        }
 
      }

  }
    
  }

  function gameover() {
ctx3.font = "italic bold 40px sans-serif";
ctx3.fillStyle = "black";
ctx3.fillText("GAME OVER", 0, 85);
ctx3.fillStyle = "red";
ctx3.font = "italic bold 20px sans-serif";
ctx3.fillText("NEW GAME", 5, 145);
ctx3.fillStyle = "white";
ctx3.font = "italic 10px sans-serif";
clearInterval(id);
document.onkeydown = function(e)
{return false;
}


  canvas3.addEventListener('click', function(e){
    window.location.reload();
	}, false);



}

function gameover2() {
  ctx3.font = "italic bold 30px sans-serif";
  ctx3.fillStyle = "black";
  ctx3.fillText("FINISH!", 0, 85);
  ctx3.fillText("TRY AGAIN!!", 5, 125);
  ctx3.fillStyle = "red";
  ctx3.font = "italic bold 20px sans-serif";
  ctx3.fillText("NEW GAME", 5, 165);
  ctx3.fillStyle = "white";
  ctx3.font = "italic 10px sans-serif";
  cle3arInterval(id);
  document.onkeydown = function(e)
  {return false;
  }
  
  
    canvas3.addEventListener('click', function(e){
      window.location.reload();
    }, false);
  
  
  
  }

  function checkEnd() {
    let endFlag = true;
    for (let py = 0; py < gameObj.gritTate; py++) {
      for (let px = 0; px < gameObj.gritYoko; px++) {
        if (checkArray[py][px] ==1) {
          endFlag = false;
          
        }
        
      }
      
    }
    if (endFlag == false) {
      gameover2();
      endingFlag = true;
    } else {
      gameClear();
      endingFlag = true;
    }

  }
  

  function gameClear() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    gameObj.score += 250000;
    
    ctx3.fillStyle = "white";
    ctx3.fillRect(screenWidth + 30,  20, 70, 35); 
    ctx3.fillStyle = "black";
    ctx3.fillText("score:", screenWidth + 32, 35);
    
    ctx3.fillStyle = "red";
      
    ctx3.fillText(gameObj.score, screenWidth + 35, 50);
    ctx3.font = "italic bold 30px sans-serif";
    ctx3.fillStyle = "black";
    ctx3.fillText("☆★GAME CLEAR!!★☆", 5, 85);
    ctx3.fillText("Congratulations!", 5, 125);
    ctx3.fillStyle = "red";
    ctx3.font = "italic bold 20px sans-serif";
    ctx3.fillText("NEW GAME", 20, 165);
    ctx3.fillStyle = "white";
    ctx3.font = "italic 10px sans-serif";
    clearInterval(id);
    document.onkeydown = function(e)
    {return false;
    }
    
    
      canvas3.addEventListener('click', function(e){
        window.location.reload();
      }, false);
    
    
    
    }
  

function twinkle() {
  let x =101;
  play(48,0.1);
  setTimeout(function() {
    play(48,0.1);
  }, x);
  setTimeout(function() {
    play(55,0.1);
  }, 2*x);
  setTimeout(function() {
    play(55,0.1);
  }, 3*x);
  setTimeout(function() {
    play(57,0.1);
  }, 4*x);
  setTimeout(function() {
    play(57,0.1);
  }, 5*x);
  setTimeout(function() {
    play(57,0.2);
  }, 6*x);
  setTimeout(function() {
    play(55,0.1);
  }, 7*x);
  setTimeout(function() {
    play(55,0.1);
  }, 8*x);
  setTimeout(function() {
    play(53,0.1);
  }, 9*x);
  setTimeout(function() {
    play(53,0.1);
  }, 10*x);
  setTimeout(function() {
    play(52,0.1);
  }, 11*x);
  setTimeout(function() {
    play(52,0.1);
  }, 12*x);
  setTimeout(function() {
    play(50,0.1);
  }, 13*x);
  setTimeout(function() {
    play(50,0.1);
  }, 14*x);
  setTimeout(function() {
    play(48,0.2);
  }, 15*x);
  
}

//これは見つけたコードの改変です（星を作っています）。
    var drawStar = function(canvas2, cx, cy, viewRadius, points, outerRadius, innerRadius, options) {
      var i, x, y, radians, halfRadians, angle, oneAngle, base, height;
      var ctx, strokeColor, strokeWidth, fillColor;
    
      ctx = canvas2.getContext('2d');
    
      outerRadius = (outerRadius) ? outerRadius : 0;
      innerRadius = (innerRadius) ? innerRadius : 0;
    
      oneAngle = 360 / points;
    
      strokeColor = (options && options.strokeColor) ? options.strokeColor : '#000';
      strokeWidth = (options && options.strokeWidth) ? options.strokeWidth : 0;
      fillColor   = (options && options.fillColor)   ? options.fillColor   : '#000';
    
      ctx.save();
      ctx.beginPath();
    
      for (i = 0; i < points; i++) {
          angle       = -90 + (oneAngle * i);
          radians     = angle * (Math.PI / 180);
          halfRadians = (angle + (oneAngle / 2)) * (Math.PI / 180);
    
          base   = (viewRadius + outerRadius) * Math.cos(radians);
          height = (viewRadius + outerRadius) * Math.sin(radians);
    
          x = cx + base;
          y = cy + height;
    
          if (i === 0) {
              ctx.moveTo(x, y);
          } else {
              ctx.lineTo(x, y);
          }
    
          base   = (viewRadius - innerRadius) * Math.cos(halfRadians);
          height = (viewRadius - innerRadius) * Math.sin(halfRadians);
    
          x = cx + base;
          y = cy + height;
    
          ctx.lineTo(x, y);
      }
    
      ctx.closePath();
    
      if (fillColor !== 'transparent') {
          ctx.fillStyle = fillColor;
          ctx.fill();
      }
    
      if (strokeColor !== 'transparent' && strokeWidth > 0) {
          ctx.lineWidth   = strokeWidth;
          ctx.strokeStyle = strokeColor;
          ctx.stroke();
      }
    
      ctx.restore();
    
      return canvas2;
    };
    
    //こちらも見つけたコードです(音を作っています)

    var audio;
  
  //音階を再生
  //node ノード(ド=48,ド#=49…)
  //sec 再生秒数
  function play(node,sec)
  {
      stop();
      if(node>=96)return;
  
      Hz=11025;//サンプリングレート
  
      //Waveデータ
      var bytes=new Uint8Array(Math.floor(Hz*sec)+100);
  
      //Waveヘッダー作成
      var header="524946460000000057415645666D74201000000001000100112B0000112B0000010008006461746100000000";
      for(fp = 0; fp < header.length/2; fp++){
          bytes[fp]=parseInt(header.substr(fp*2,2),16);
      }
  
      //音階(ドド#レ…シ)の周波数(1オクターブ下がると1/2倍)
      var freqs=[4180, 4428, 4708, 4968, 5264, 5592, 5884, 6300, 6676, 6988, 7476, 7848];
  
      //1サンプルあたりの位相計算
      octave = Math.floor(node/12); //オクターブ
      freq = freqs[node%12] / (1<<(7-octave)); //周波数
      phase = 6.28 / (Hz / freq);
  
      //波形作成
      for (t = 0; t < Math.floor(Hz*sec); t++){
          bytes[fp++] = Math.floor(Math.sin(phase*t)*127)+128;
      }
  
      //データ補正
      setLittleEndian(bytes,4,fp-8);  //ファイルサイズ
      setLittleEndian(bytes,24,Hz);   //サンプリングレート
      setLittleEndian(bytes,40,fp-44);//波形サイズ
  
      //BASE64変換してオーディオ作成
      str="";
      for (i=0;i<fp;i++){str+=String.fromCharCode(bytes[i]);}
      audio=new Audio("data:audio/wav;base64,"+btoa(str));
      audio.play();
  }
  
  function stop()
  {
      if (audio&&!audio.ended){audio.pause();audio.currentTime=0;}
  }
  
  function setLittleEndian(bytes,p,data)
  {
      bytes[p] = (data & 0xFF);
      bytes[p+1] = ((data >> 8) & 0xFF);
      bytes[p+2] = ((data >> 16) & 0xFF);
      bytes[p+3] = ((data >> 24) & 0xFF);
  }