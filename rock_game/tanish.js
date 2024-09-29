let you = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 

const generate = () => {
    const arr = ["Rock", "Paper", "Scissors"];
    let radinx = Math.floor(Math.random() * 3);
    return arr[radinx];
}

const getuser = (user_choice) => {
    console.log("User choice :- ", user_choice);
    const comp_choice = generate();
    console.log("Computer choice :- ", comp_choice);

    if (user_choice === comp_choice) {
        console.log("Match was Draw");
        msg.innerText = "It's a Draw";
        msg.style.backgroundColor = "yellow";
        msg.style.color="black";
    } 
    else if ((user_choice === "Rock" && comp_choice === "Scissors") ||
        (user_choice === "Paper" && comp_choice === "Rock") ||
        (user_choice === "Scissors" && comp_choice === "Paper")) {
        console.log("User won");
        msg.innerText = "You Win";
        msg.style.backgroundColor="green";
        you++;
    }
     else {
        console.log("Computer won");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "Red";
        comp++; 
    }

    document.querySelector("#You").innerText = you; 
    document.querySelector("#Comp").innerText = comp;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        getuser(user_choice);
    })
})
