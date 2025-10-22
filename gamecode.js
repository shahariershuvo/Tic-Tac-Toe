let boxes=document.querySelectorAll(".box");
//for class we use (.)
// for id we use (#)
let newgamebtn=document.querySelector("#new-btn");
let newcontainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let resetgame =document.querySelector("#reset-btn");

let turnO =true; //playerO or playerX 

// let arr=["apple","banana","litchi"];

// // 2D Array 
// let arr2 = [
//     ["apple","banana"],
//     ["potato","mushroom"],
//     ["pants","shirts"],
// ];
let counter = 0;
const winpattern =[

[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]

];
const resetGame=()=>{
    turnO =true;
    enableboxes();
    newcontainer.classList.add("hide")
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO=== true){
         box.innerText="O";
         box.style.color="red";
         turnO = false;
        }
        else{
            box.innerText="X";
            box.style.color="black";
            turnO = true;
        }
        box.disabled = true;
        counter++;
        checkwinner();
        
    });
});

const disableboxes = () =>{
for(let box of boxes){
    box.disabled = true;
}
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner = (winner) => {
    msg.innerText=`Congratulation ! , Winner is ${winner}`;
   newcontainer.classList.remove("hide");
   disableboxes();
}

const checkwinner = () =>{
for (let pattern of winpattern){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText
    // );   
    
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            // console.log("winner!",pos1val);           
            showwinner(pos1val);
        }
    }
}
}
if (counter === 9){
    showdraw();
}

showdraw = () => {
   msg.innerText=`Match is Draw`;
   newcontainer.classList.remove("hide");
   disableboxes();
    
}

newgamebtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);
resetgame.addEventListener("click",resetGame);




