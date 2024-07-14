player = 0 


let boxe =  document.querySelectorAll(".box");

let msg = document.querySelector("#msg");

let msgContainer = document.querySelector(".msg-container");

let resetBtn = document.querySelector("#reset-btn");







let turnO = true ;

let winnerChance = [

    [0,1,2] , [0,3,6]  , [0,4,8] , [1,4,7] , [ 2,5,8] , [2,4,6] , [3,4,5] , [6,7,8] 
];





let checkWinner =()=>{

      for(let pattern of winnerChance){

         let post1Val = boxe[pattern[0]].innerText ;

         let post2Val = boxe[pattern[1]].innerText ;

         let post3Val = boxe[pattern[2]].innerText ;
      

      if(post1Val != "" && post2Val != "" && post3Val != ""){

         if(post1Val === post2Val && post2Val === post3Val){

               showWinner(post1Val)
         }
      }
}
}

let showWinner = (winner)=>{

        




    msg.innerText =`congratulation  , winner is ${winner}`

    msgContainer.classList.remove("hide")

     disableBoxes();
}


let disableBoxes = ()=>{

     for(let box of boxe){
               
         box.disabled = true ;  
     }
}

let enableBoxes = ()=>{

      for(let box of boxe){

         box.disabled = false

         box.innerHTML = "" ;
      }
}



let resetGame = ()=>{

      turnO = true ;

      enableBoxes()

      player.innerText = "0"
      msgContainer.classList.add("hide")
}


boxe.forEach((box)=>{

    box.addEventListener("click" , ()=>{

          if(turnO){
          
            console.log("counter" , box)
              box.innerText = "X"

              turnO = false

              
          }

          else{

              box.innerText = "O"

              turnO = true
          }

          box.disabled = true ;

          checkWinner();
    })
})



resetBtn.addEventListener("click" , resetGame)