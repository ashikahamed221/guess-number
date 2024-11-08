var input=document.getElementById('enter')
var result=document.getElementById('result')
var score=document.getElementById('score')
var totscore=document.getElementById('score')
var totscore=10;

function check()
{
    var guess=Math.floor(Math.random()*10)+1;
    var enter=input.value;

    if(guess==enter)
    {
        result.textContent="you won";
        window.alert("....you won....")
        totscore=totscore+1;
        score.textContent="your score:" + totscore;


    }
    else{
        result.textContent="wrong";
        totscore=totscore-1;
        score.textContent="Your Score:"+ totscore;
    }
}
