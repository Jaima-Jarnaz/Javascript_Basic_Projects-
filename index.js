var button_element1=document.getElementById('btn-1');
var button_element2=document.getElementById('btn-2');
var button_element3=document.getElementById('btn-3');
var button_element4=document.getElementById('btn-4');
var back_color=document.querySelector('header');
var h1_color=document.querySelector('h1');


button_element1.addEventListener('click',function(){
    changebackground=Math.floor(Math.random()*255);
    console.log(changebackground);
    //back_color.style.backgroundColor="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
    back_color.style.backgroundColor="green";
    h1_color.style.color="white";
    //button_element2.style.border="1px"+" "+"solid"+" "+"rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
});

button_element2.addEventListener('click',function(){
    back_color.style.backgroundColor="Orchid";
    h1_color.style.color="black";
});

button_element3.addEventListener('click',function(){
    back_color.style.backgroundColor="yellow";
    h1_color.style.color="black";
});

button_element4.addEventListener('click',function(){
    back_color.style.backgroundColor="tomato";
    h1_color.style.color="white";
});



///Calculator code start from here

let calculatorInputField=document.getElementById("input-calculator");
var allCalculatorButtons=document.querySelectorAll('table button') //select all buttons in table tag
let screenValue='';

let screenStringValueGenerate=(textButton)=>{
    screenValue+=textButton; 
    calculatorInputField.value=screenValue;

}

for(clickedButtons of allCalculatorButtons){
    clickedButtons.addEventListener('click',(e)=>{
        textButton=e.target.innerText;//inner text of those buttons
        if(textButton=='x'){
            textButton='*';
            screenStringValueGenerate(textButton);
        }
        else if(textButton=='+'){
            screenStringValueGenerate(textButton);

        }
        else if(textButton=='-'){
            screenStringValueGenerate(textButton);

        }
        else if(textButton=='÷'){
            textButton='/';
            screenStringValueGenerate(textButton);
        }
        else if(textButton=='Sin'){  
            calculatorInputField.value=Math.sin(screenValue)
            console.log(calculatorInputField.value);
        }
        else if(textButton=='Cos'){
            
            calculatorInputField.value=Math.cos(screenValue)
        }
        else if(textButton=='Tan'){
            calculatorInputField.value=Math.tan(screenValue)
        }
        else if(textButton=='log'){
            calculatorInputField.value=Math.log(screenValue)
        }
        else if(textButton=='C'){
            screenValue='';
            calculatorInputField.value=screenValue;
        }
        else if(textButton=='='){
            calculatorInputField.value=eval(screenValue);//40 "2+3"

        }
        else{
            screenValue+=textButton;//"7"
            calculatorInputField.value=screenValue;
        }
   
    })
}

/*---Todo list code start from here-----*/
const formInput=document.getElementById("formInput");
const submitButton=document.getElementById("submitButton");

const newToDoList=document.getElementById("toDo-Unorderlist");
console.log(newToDoList);


var currentValue='';
formInput.addEventListener('input',function(e){
    currentValue=e.target.value;
    console.log(currentValue)
});


submitButton.addEventListener('click',function(){  

    const createNewToDo=document.createElement("li");
    console.log(createNewToDo)
    createNewToDo.innerText=currentValue;
    createNewToDo.classList.add("toDoList");
    newToDoList.appendChild(createNewToDo);
    console.log(newToDoList);

})

