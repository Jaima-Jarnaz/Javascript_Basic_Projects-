var button_element1=document.getElementById('btnGreen');
var button_element2=document.getElementById('btnOrchid');
var button_element3=document.getElementById('btnYellow');
var button_element4=document.getElementById('btnTomato');
var back_color=document.querySelector('header');
var h1_color=document.querySelector('h1');


button_element1.addEventListener('click',function(){
    back_color.style.backgroundColor="green";
    h1_color.style.color="white";
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


var currentValue='';
formInput.addEventListener('input',function(e){
    currentValue=e.target.value;
    console.log(currentValue)
});

const newUnorderToDoList=document.getElementById("toDo-Unorderlist");

 function createNewTodo(){
    const createNewToDo=document.createElement("li");
    createNewToDo.innerText=currentValue;
    createNewToDo.classList.add("toDoList");
    newUnorderToDoList.appendChild(createNewToDo);
    createNewToDo.id="item"+ (newUnorderToDoList.childElementCount +1);
    let id=createNewToDo.id;
    return newUnorderToDoList;
 }


    deleteTodoList=()=>{
        var newDeleteButton=document.createElement("i");
        newDeleteButton.classList.add("fa-trash-alt");
        var buttonDeleteTextNode=document.createTextNode("Delete");
        var addDeleteButton=newDeleteButton.appendChild(buttonDeleteTextNode);
        var count=1;
        newDeleteButton.id="btn"+count++;
        newUnorderToDoList.appendChild(newDeleteButton);
 }


submitButton.addEventListener('click',()=>{
    if(currentValue!=undefined && currentValue!=null && currentValue!=''){
        createNewTodo();
    }
    else{
        alert("Enter a valid todo item");
    }
    formInput.value='';
    currentValue='';

})
