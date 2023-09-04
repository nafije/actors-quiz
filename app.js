const correctAnswers=['A','A','A','A'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    //chech answers
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=25;
        }
    });
    //show result on page
    scrollTo(0,0);
    var resultSpan = document.getElementById("resultSpan");

    let output=0;
    const timer=setInterval(()=>{
        resultSpan.textContent = "The result is: " + output+"%";
        if(output === score){
            clearInterval(timer);
        }else {
            output++;
        }
    },10);
});


