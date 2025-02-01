const minNum =1;
const maxNum =100;
const answer =Math.floor(Math.random() *(maxNum -minNum +1)) +minNum
console.log(answer);


let attempts =0;
let guess;
let running =true;

while(running){
    guess =window.prompt(`guess a number betwin ${minNum} -${maxNum}`);
    guess =Number(guess);
    if(isNaN(guess)){
        window.alert('please enter valid number')
    }else if(guess <minNum || guess >maxNum){
        window.alert('please enter valid number')
    }else {
        attempts++
        if(guess <answer){
            window.alert('to low ,try again' )
        }else if(guess >answer){
            window.alert('to high ,try again' )
        }else{
            window.alert(`correct the answer was ${answer} it took you ${attempts}`)
            running =false
        }
    }
    
    
}
