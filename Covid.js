import Person from "./person.js";

export default class Covid {
    peopleEnteringFromTheKeyboard;
    peopleInfectedCovidFromP;
    constructor(){
      
        this.peopleEnteringFromTheKeyboard = [];
        this.peopleInfectedCovidFromP = [];
    }

    EnterPeopleFromKeyBoard(people){
       if(people instanceof Person){
           this.peopleEnteringFromTheKeyboard.push(people)
           console.log(this.peopleEnteringFromTheKeyboard)
       }
    }

    PeopleInfectedCovid(peopleInfected){
         for(let i = 0;i<this.peopleEnteringFromTheKeyboard.length;i++){
             let X = peopleInfected.locationX - this.peopleEnteringFromTheKeyboard[i].locationX;
             let Y = peopleInfected.locationY - this.peopleEnteringFromTheKeyboard[i].locationY;
             if(Math.abs(X) <2 || Math.abs(Y) <2 ){
                 this.peopleInfectedCovidFromP.push(this.peopleEnteringFromTheKeyboard[i]);
                 console.log(this.peopleInfectedCovidFromP)
                
             }
            
         }
       
    }


}
let covid = new Covid();
let a = new Person('a',123,3,4);
let b = new Person('b',1234,1,4);
let c = new Person('c',1235,10,14);
covid.EnterPeopleFromKeyBoard(a)
covid.EnterPeopleFromKeyBoard(b)
covid.EnterPeopleFromKeyBoard(c)
covid.PeopleInfectedCovid(a)


