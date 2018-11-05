var timer;
timer=window.setInterval(changeNum,1000);
// function startTimer(speed){
//     timer = window.setInterval(changeNum,speed);
// }
// startTimer(1000);
var h2Obj = document.querySelector('h2');
var images1 = document.querySelector('#images');
var images2 = document.getElementById('images');

console.log(images1);
console.log(images2);
console.log(images2.children[3]);
// images2.children[4].style
// console.log(h2Obj);
var currentNo = 0;
function changeNum(){
    if(currentNo<9) currentNo++;
    else currentNo=0;
    h2Obj.innerHTML='<img src="images/0'+currentNo+'.jpg"alt=""></img>'
}
var btnObj= document.getElementById('btnObj')
function startChange(){
    startTimer(500);
    btnObj.textContent= "停止";
}
function stopchange(){
    timer = window.setInterval(changeNum,100);
    btnObj.textContent = "启动";
}
btnObj.addEventListener('nouseover',stopchange);
btnObj.addEventListener('moueout',stopchange);
// var timer;
// function startChange(speed){
//     timer = window.setInterval(changeNum,speed);
// }
// setInterval(1000);
// var h2Obj=document.querySelector('h2');
// console.log(h2Obj);
// var currentNo=1;
// var flag=true;
// function changeNum(){
// h2Obj.textContent=currentNo;
// // if(flag){
// if(currentNo<9) currentNo++;
// else flag = false;

// }
// else{
//     if(currentNo>0) currentNo--;
//     else flag = true;

// }
// // }

// console.log(timer);

// var btnObj=document.getElementById("btnObj")
// console.log(btnObj);
// btnObj.addEventListener('click',stopChangeNum);
// function stopChangeNum(){
//     if(flag){
//         window.clearInterval(timer);
//         btnObj.textContent='启动';
//         flag=false;
//     }
//     else{
//         timer=window.setInterval(changeNum,1000);
//         btnObj.textContent='停止'
//         flag=true;
//     }

// }
// brnObj.addEventListener('mouseover',stopchange);
// function stopchange(){
//     window.clearInterval(timer);
//     btnObj.textContent='启动'
// }
