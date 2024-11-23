/*let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll(".reset");
let newgamebutton =document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msgcont");
let msg = document.querySelector("#msg");



let turno = true;
 
 const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


 ];

 const resetgame =() => {
   turno = true;
   enableboxes();
   msgcontainer.classList.add("hide");


 }
 
 boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        
       if(turno){
        box.innerText = "o";
        turno = false;
        


       }else{
        box.innerText = "x";
        turno = true;
           }
           box.disabled = true;

           cheakwinner();


    });
 });
const disableboxes = () => {
   for(let box of boxes){
      box.disabled = true;
      
   };
   const enableboxes = () => {
      for(let box of boxes){
         box.disabled = flase;
         box.innerText= "";

         
      };
}
 const showwinner = (winner) =>{
   msg.innerText = `congratulation , winner is ${winnner}`;
   msgcontainer.classList.remove("hide");
   disableboxes();

 };


 const cheakwinner =() => {
    for(let pattern of winpatterns){
    
         let pos1val =  boxes[pattern[0]].innerText;
         let pos2val =  boxes[pattern[1]].innerText;
         let pos3val =  boxes[pattern[2]].innerText;
if(pos1val != "" && pos2val != "" && pos3val != ""){
   if(pos1val===pos2val && pos2val === pos3val){
      console.log("winner", pos1val);
      showwinner(pos1val);

   }
}

    }
 };

newgamebutton.addEventListener("click", newgamebutton);
resetBtn.addEventListener("click", resetBtn);


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newgamebutton = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msgcont");
let msg = document.querySelector("#msg");

let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Reset the game
const resetgame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

// Disable all boxes
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Enable all boxes
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Show the winner message
const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

// Check for a winner
const cheakwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner:", pos1val);
            showwinner(pos1val);
            return;
        }
    }

    // Check for a draw
    const allBoxesFilled = Array.from(boxes).every((box) => box.innerText !== "");
    if (allBoxesFilled) {
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
};

// Box click event
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        cheakwinner();
    });
});

// New Game button functionality
newgamebutton.addEventListener("click", resetgame);

// Reset button functionality
resetBtn.addEventListener("click", resetgame);
*/

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newgamebutton = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msgcont");
let msg = document.querySelector("#msg");

let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Reset the game
const resetgame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

// Disable all boxes
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Enable all boxes
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Show the winner message
const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

// Check for a winner
const cheakwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner:", pos1val);
            showwinner(pos1val);
            return;
        }
    }

    // Check for a draw
    const allBoxesFilled = Array.from(boxes).every((box) => box.innerText !== "");
    if (allBoxesFilled) {
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
};

// Box click event
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        cheakwinner();
    });
});

// New Game button functionality
newgamebutton.addEventListener("click", resetgame);

// Reset button functionality
resetBtn.addEventListener("click", resetgame);
