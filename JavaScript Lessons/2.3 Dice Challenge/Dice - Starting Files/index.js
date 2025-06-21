let rollBTN = document.getElementsByTagName("button")[0];

rollBTN.addEventListener("click", function (){
    let randomNumL = Math.floor(Math.random() * 6) + 1;
    let randomNumR = Math.floor(Math.random() * 6) + 1;

    let image1 = document.getElementsByClassName("img1")[0];
    let image2 = document.getElementsByClassName("img2")[0];

    image1.src = `./images/dice${randomNumL}.png`;
    image2.src = `./images/dice${randomNumR}.png`;

    let text = document.getElementsByTagName("h1")[0];
    if (randomNumL > randomNumR){
        text.textContent = "Player 1 WIN!!"
    } else if (randomNumR > randomNumL){
        text.textContent = "Player 2 WIN!!"
    } else {
        text.textContent = "Its a DRAW!"
    }
})




