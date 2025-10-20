$("#guess_number").click(function(){
    let number=prompt("which number from 0 to 5");
    let numbertoguess=Math.floor(Math.random()*6);
    if (number===null){
        return;
    }
    if(number==numbertoguess){
        alert("Congratulations. you guessed right!")
    }
    else{
        alert(`Oops. wrong guess. The number was ${numbertoguess}`)
    }
})