let btn = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
let body = document.querySelector("body");
let AC = document.querySelector(".clear");
let started = 0;
let pointno = 0;
        /* AC work */
    AC.addEventListener("click",function(){
        if(started == 0){
        display.classList.add("started");
        display.innerHTML = `<h1>${0}</h1>`;
        started++;
        value();
        operation();
        
        }
        else{
            nextOne = 0;
            pointno = 0;
            console.log(nextOne);
            display.innerHTML = `<h1>${0}</h1>`;
        }
    })

        /* normal button work */
function value(){
    for(btns of btn){
        btns.addEventListener("click",function() {
      /*   console.log(this.innerText);
        console.log(this); */
            if(pointno == 0)
            screenValue(this.innerText);  
            else
            pointValue(this.innerText);
        })
    }
}

    /* screen show function */
let nextOne = 0;
function screenValue(val){
    let digit = parseInt(val);
/*     console.log(digit);
    console.log(typeof(digit)); */
    nextOne = nextOne*10 + digit;
    console.log(nextOne);
    /* console.log(typeof(nextOne)); */
    display.innerHTML = `<h1>${nextOne} </h1>`
    
}

let next = 0;
    function pointValue(val){
            pointno = pointno*10;
        let digit = parseInt(val);
        nextOne =nextOne*10+ digit;
        next = nextOne/pointno;
        console.log(next);
        display.innerHTML = `<h1>${next} </h1>`
        }


function operation(){
    //to do calculator operation methods js part 6 check
    /* plus access */
let plus = document.querySelector(".add");
plus.addEventListener("click",Op);
    /* subtraction access */
let sub = document.querySelector(".sub");
sub.addEventListener("click",Op);
    /* Multiplication access */
let multiply  = document.querySelector(".mul");
multiply.addEventListener("click",Op);
    /* divide access */
let divide = document.querySelector(".divide");
divide.addEventListener("click",Op);
    /* point access */
let point = document.querySelector(".point");
point.addEventListener("click",()=>{
    pointno = 1;
    let lpoint = nextOne;
})
    /* CR work */
    let CR = document.querySelector(".undo");
    CR.addEventListener("click",function(){
        let clear = Math.floor(nextOne/10);
        console.log(clear);
        display.innerHTML = `<h1>${clear}</h1>`;
        nextOne = clear;
    })
    
    
    let digit1 = 0;
    let opCase = "";
    function Op(){
        if(pointno == 0){
        console.log(this);
         digit1 = nextOne;
         console.log(digit1);
         nextOne = 0;
         opCase = this.innerText;
        }
        else{
            digit1 = next;
            console.log(digit1);
            nextOne = 0;
            opCase = this.innerText;
            pointno = 0;
            
        }
    }
    
    let equalto = document.querySelector(".total");
    equalto.addEventListener("click",function(){
        let total = 0;
        if(pointno == 0)
        switch(opCase){
            case '+':
                total = digit1+nextOne;
                break;
            case '-':
                total = digit1-nextOne;
                break;
            case '*':
                total = digit1*nextOne;
                break;
            case '/':
                total = digit1/nextOne;
                break;
        }
        else{
            switch(opCase){
                case '+':
                    total = digit1+next;
                    break;
                case '-':
                    total = digit1-next;
                    break;
                case '*':
                    total = digit1*next;
                    break;
                case '/':
                    total = digit1/next;
                    break;
            }
        }
        console.log(total);
        display.innerHTML = `<h1>${total}</h1>`;
        nextOne = 0;
        pointno = 0;
    })
    
}


//on completion please read this implementation and understand it properly for concept building
