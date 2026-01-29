const aa=()=>{
    console.log("Welsome to CSB")
}

aa();
//IIFE


function person(){
    this.age=25;

    setTimeout(function(){
        console.log(this.age);
     },1000);
    }

person();    


function person1(){
    this.age=25;

    setTimeout(()=>{
        console.log(this.age);
     },1000);
    }

person1();   