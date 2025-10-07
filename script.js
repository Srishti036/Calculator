let screen = document.getElementById("screen");
let op = document.querySelectorAll(".operator");
let button = document.querySelectorAll(".button");

let curr_op = '';
let past_val = '';
let curr_val = '';

button.forEach(button => {
    button.addEventListener("click",(event)=>{
        curr_val += event.target.value;
        screen.value += curr_val;
        screen.value = `${past_val} ${curr_op} ${curr_val}`;
    });
});

op.forEach(op => {
    op.addEventListener("click",(event)=>{
        if(curr_val === '')
        {
            return;
        }
        if(past_val !== '')
        {
            calculate();
        }
        curr_op = event.target.value;
        past_val = curr_val;
        curr_val = '';
        screen.value = `${past_val} ${curr_op}`;
    });
});

function calculate(){
  if(past_val === '' || curr_val === '')
    {
        return;
    }  
   
    let result;
    let past = parseInt(past_val);
    let curr = parseInt(curr_val);

    switch(curr_op)
    {
        case '+' : result = past+curr ;
                   break;
        case '-' : result = past-curr ;
                   break;
        case '*' : result = past*curr ;
                   break;
        case '/' : result = past/curr ;
                   break;
        default : return;
    }
    curr_val = result.toString();
    curr_op = '';
    past_op = '';
    screen.value = curr_val;
}

function clearScr()
{
    curr_val = '';
    past_val = '';
    curr_op = '';
    screen.value = "";
};
