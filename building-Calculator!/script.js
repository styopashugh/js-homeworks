const screenDisplay =document.querySelector('.screen');
const buttons =document.querySelectorAll('button');

let calculation =[]
let acumulaetiveCalculation

function calculate(button){
    const value =button.textContent
    
    if(value ==="CLEAR"){
        calculation =[]
        screenDisplay.textContent ='.'
    }else if(value == '='){
        console.log(acumulaetiveCalculation);
        
        screenDisplay.textContent =eval(acumulaetiveCalculation)
    }else{
        calculation.push(value)
        acumulaetiveCalculation =calculation.join('')
        screenDisplay.textContent =acumulaetiveCalculation
    }
   
    
    
    
    
}


buttons.forEach(button =>button.addEventListener('click',() =>calculate(button)))
