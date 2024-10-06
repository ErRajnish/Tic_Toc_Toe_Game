let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let new_btn=document.querySelector("#new-btn");
let msg_cont=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turn0=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetbtn=()=>{
    turn0=true;
    enabledbtn();
    msg_cont.classList.add("hide");
}
const disabledbtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledbtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        findwinner();
    });

});

const findwinner=()=>{
    for(pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                showwinner(pos1val);
            }
        }
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulation ,Winner is ${winner}`;
    msg_cont.classList.remove("hide");
    disabledbtn();
}

new_btn.addEventListener("click",resetbtn);
reset_btn.addEventListener("click",resetbtn);
