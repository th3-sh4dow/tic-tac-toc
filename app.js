let boxes = document.querySelectorAll(".box");
let rest_btn = document.querySelector(".reset-btn");
let xbtn = document.querySelector(".x");
let obtn = document.querySelector(".o");
let msg = document.querySelector(".msg");
let new_btn = document.querySelector("#new-btn");
let dcon = 0;

const winPattens = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];
const restGame = () => {
    turn0 = true;
    xbtn.disabled = false;
    obtn.disabled = false;
    xbtn.innerHTML = "X";
    obtn.innerHTML = "O";
    disebledboxes();
    msgContnoir.classList.add("hide");

    xbtn.style.fontSize = "";
    obtn.style.fontSize = "";
    
    boxes.forEach((box) => {

        box.innerHTML = "";
    });

}


const draw = () => {

    if (dcon === 9) {
        msgContnoir.classList.remove("hide");
        //msg.innerHTML = `Winner is ${pos1}`;
        msgContnoir.scrollIntoView({ behavior: 'smooth', block: 'center' });
        msg.innerHTML = `Match is Draw!' Reset`;
        dcon=0;
        
    }
    
}




let turn0; //true = x, false = o 
const choces = () => {
    //console.log("button was clicked!");
    if (xbtn.innerHTML === "X") {
        xbtn.innerHTML = "You Selected";
        xbtn.style.fontSize = "1rem";
        turn0 = true;
        obtn.style.fontSize = "1rem";
        enabledboxes();
        xbtn.disabled = true;
        obtn.disabled = true;
        obtn.innerHTML = "Com Selected";
    } else {
        turn0 = false;
        obtn.innerHTML = "You Selected";
        obtn.style.fontSize = "1rem";
        xbtn.innerHTML = "Com Selected";
        obtn.disabled = true;

    }
}



boxes.forEach((box) => {
    
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerHTML = "X";
            turn0 = false;
            
        } else {
            box.innerHTML = "O";
            box.style.color = "red";
            turn0 = true;
            
        }
        dcon++;
        box.disabled = true;
        checkWinner();

        let isWinner = checkWinner();
        console.log(isWinner);

        if(dcon === 9 ){
            
            alert("It's a draw!");
            draw();
        }
        console.log(dcon);
    });

});

window.addEventListener("load", () => {

    disebledboxes();
});

const disebledboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;

    });
}

const enabledboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;

    });
}
let msgContnoir = document.querySelector(".msg-container");

const checkWinner = () => {

    for (let pattern of winPattens) {
        //console.log(pattern[0],pattern[1],pattern[2]);

        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        //console.log(pos1, pos2, pos3);

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                msgContnoir.classList.remove("hide");
                msg.innerHTML = `Winner is ${pos1}`;
                msgContnoir.scrollIntoView({ behavior: 'smooth', block: 'center' });
                disebledboxes();

            }
        }
    }
};

console.log(dcon);





rest_btn.addEventListener("click", restGame);
new_btn.addEventListener("click", restGame);