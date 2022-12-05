let playerScore = 0 
let ComputerScore = 0
const getComputerChoice = () => {
    const arrOfChoices = ['stone', 'paper','scissor']
    const randomNum = Math.floor(Math.random()* 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
} 
const playRound = (playerSelection ,computerSelection) => {
    if (playerSelection === 'stone' && computerSelection === 'stone') {
        return 'Its a tie you both choose stone'
    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Its a tie you both choose paper'
    }else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        return 'Its a tie you both choose scissor'
    }else if (playerSelection === 'stone' && computerSelection === 'scissor') {
        playerScore++
        return 'You won Stone crushed scissor'
    }else if (playerSelection === 'stone' && computerSelection === 'paper') {
        ComputerScore++
        return 'You loose paper folded stone inside it'
    }else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        ComputerScore++
        return 'You loose scissor cuts paper'
    }else if (playerSelection === 'paper' && computerSelection === 'stone') {
        playerScore++
        return 'You won paper beats stone'
    }else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++
        return 'You won scissor cuts paper into pieces'
    }else if (playerSelection === 'scissor' && computerSelection === 'stone') {
        ComputerScore++
        return 'you loose Stone break scissor'
    }
}



const game = () => {
    for(let i=0; i < 5; i++ ) {
        const playerSelection = prompt('choose what to throw', 'stone,paper,scissor').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log('1', playRound(playerSelection, computerSelection));
    }
    if(playerScore > ComputerScore){
       return 'You saved the humankind you beat! the computer you are a genius!'
    }else if(playerScore < ComputerScore){
       return 'You failed to save humankind you loose! keep practicing to improve your throws!'
    }else{
       return 'You tried your best! you were this close please try again its a tie!'
    }
}
console.log(game())