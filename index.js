let playerHP = document.querySelector("#playerHP").innerText
const playerAttack = document.querySelector("#playerAttack").innerText
const playerDefense = document.querySelector("#playerDefense").innerText
let enemyHP = document.querySelector("#enemyHP").innerText
const enemyAttack = document.querySelector("#enemyAttack").innerText
const enemyDefense = document.querySelector("#enemyDefense").innerText

//Function for player to attack enemy and enemy to attack player back
function makeAttack(playerHP, playerAttack, playerDefense, enemyHP, enemyAttack, enemyDefense){
  console.log(playerHP)
  
  //playerHP -= (enemyAttack > playerDefense) ? (enemyAttack - playerDefense) : 0
  //enemyHP -= (playerAttack > enemyDefense) ? (playerAttack - enemyDefense) : 0
}


document.querySelector("#clickMe").addEventListener('click', makeAttack)