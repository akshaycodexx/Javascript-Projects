const questions=[{'que':'which of the following is a mark up language?',
'a':'html',
'b':'css',
'c':'javascript',
'd':'php',
'correct':'a'
}
,
{'que':'Who was the prime minister of india ?',
'a':'Modi',
'b':'lalu',
'c':'pappu',
'd':'momo',
'correct':'a'
}
,
{'que':'kha ho jawaniya _________ dala bu',
'a':'deep',
'b':'Achar',
'c':'kuch nhi',
'd':'onion',
'correct':'b'
}

]


let index=0;
let total=questions.length;
let correct=0;
let right=0;
let wrong=0;
const que=document.querySelector("#nn")
const option=document.querySelectorAll(".op")
const loadQuestion =()=>{
   if(index===total){
 return endq()
   }else{
        reset()
       const data= questions[index]
       que.innerText=data.que
       option[0].nextElementSibling.innerText=data.a
       option[1].nextElementSibling.innerText=data.b
       option[2].nextElementSibling.innerText=data.c
       option[3].nextElementSibling.innerText=data.d
   }
}
// by using on click onto in html
const submitq=()=>{
    const ans=getAnswer()
    const data= questions[index]
    if(ans== data.correct){
right++;
    }else{
wrong++
    }
    index++;
    loadQuestion();
    return ;
}
const getAnswer=()=>{
    let ans;
    option.forEach(
        //using call back
        (input)=>{
            if(input.checked){
               ans=input.value;
               
            }
        }
    )
    return ans;
}

const reset =()=>{
    option.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endq=()=>{
    document.querySelector("#box").innerHTML=`
    <h3>Thankyou for playing......</h3>

    <h2>you win : ${right}/${total} </h2>
    `
}
loadQuestion()













