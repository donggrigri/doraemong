let canvas = document.getElementById("canv");
let ctx = canvas.getContext('2d');
let BothHeight = 60;
let rightEyeXpos = 128;
let leftEyeXpos = 96;
let bigcircleradius = 15;
let smallcirclereadius = 7;
let img = new Image();
img.src = "doramong.jpg";

//
document.addEventListener('mousemove',function(e){
    let Xposition = e.clientX- canvas.offsetLeft;
    let Yposition = e.clientY - canvas.offsetTop;
    
    BigCircle({x:Xposition,y:Yposition});
    
//console.log(addd - canvas.offsetTop);
//console.log(asd -);//이 차이를 더한후 작은원의 반지름만큼 뺀값까지가 최대 범위인데 이것보다 좌표값이 ~크거나 ~보다작으면    각각그려준다
//console.log(e.offsetX,e.offsetY);
 //이 차이값이 일정수준 이상 or 이하라면 고정값지정
});

function BigCircle(diff){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img,0,0);
    ctx.clearRect(98,50,13,15.5);//왼쪽눈 그림제거
    ctx.clearRect(115,50,13,15.5);//오른쪽눈 그림제거
    leftEye(diff);
    rightEye(diff);
    ctx.beginPath();
    ctx.arc(leftEyeXpos, BothHeight,bigcircleradius, 0, Math.PI * 2); //큰 기준원이되는 눈 생성
    ctx.moveTo(rightEyeXpos+bigcircleradius,BothHeight);
    ctx.arc(rightEyeXpos, BothHeight, bigcircleradius, 0, Math.PI * 2); // Outer circle
    ctx.strokeStyle= "transparent"; //기준원 색깔설정
    //ctx.strokeStyle= "black";
    ctx.stroke();
    ctx.closePath();
}
function leftEye(differ){
    let xpos = differ.x - leftEyeXpos;
    let ypos = differ.y - BothHeight;
    if(ypos>bigcircleradius-smallcirclereadius){
        ypos = bigcircleradius-smallcirclereadius;
    }else if(ypos<-bigcircleradius+smallcirclereadius){
        ypos = -bigcircleradius+smallcirclereadius;
    }
    //xpos 와 ypos를이용한 반지름이 기존원의 반지름제곱보다크다면 조정
    if( (xpos*xpos)+(ypos*ypos)>(bigcircleradius*bigcircleradius) ){
        if(xpos>0){
            xpos= Math.sqrt((bigcircleradius*bigcircleradius)-(ypos*ypos));//x좌표값이 정해졋으나 작은원을 그려야하므로 반지름만큼 뒤로물러난다
        }else{
            xpos=-Math.sqrt((bigcircleradius*bigcircleradius)-(ypos*ypos));
        }
    }

    
    
    ctx.beginPath();
    ctx.fillStyle = "black";
    if(xpos>0){
        ctx.arc(leftEyeXpos+xpos-smallcirclereadius, BothHeight+ypos, smallcirclereadius, 0, Math.PI * 2);
    }else{
        ctx.arc(leftEyeXpos+xpos+smallcirclereadius, BothHeight+ypos, smallcirclereadius, 0, Math.PI * 2);
    }
    ctx.fill();
}
function rightEye(differ){
    let xpos = differ.x-rightEyeXpos;
    let ypos = differ.y -BothHeight;
    if(ypos>bigcircleradius-smallcirclereadius){
        ypos = bigcircleradius-smallcirclereadius;
    }else if(ypos<-bigcircleradius+smallcirclereadius){
        ypos = -bigcircleradius+smallcirclereadius;
    }

    if( (xpos*xpos)+(ypos*ypos)>(bigcircleradius*bigcircleradius) ){
        if(xpos>0){
            xpos= Math.sqrt((bigcircleradius*bigcircleradius)-(ypos*ypos));//x좌표값이 정해졋으나 작은원을 그려야하므로 반지름만큼 뒤로물러난다
        }else{
            xpos=-Math.sqrt((bigcircleradius*bigcircleradius)-(ypos*ypos));
        }
    }

    ctx.beginPath();
    if(xpos>0){
        ctx.arc(rightEyeXpos+xpos-smallcirclereadius, BothHeight+ypos, smallcirclereadius, 0, Math.PI * 2);
    }else{
        ctx.arc(rightEyeXpos+xpos+smallcirclereadius, BothHeight+ypos, smallcirclereadius, 0, Math.PI * 2);
    }
    ctx.fillStyle = "black";
    ctx.fill();
}