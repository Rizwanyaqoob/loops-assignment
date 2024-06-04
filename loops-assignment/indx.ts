//            ASSIGNMENT  1

// <<<<<<<<<<     CREATE A LESSON PLAY (USING FOR LOOP)


///  create a blank array
    const mywork =[]

//////  use a loop to creATE lesson

for (let i =1 ; i<=10;i++ ){
    let Lesson1={
        name:`Lesson`+i,
        status:i%2 ===0,
        false:true
        
        
    }
    mywork.push(Lesson1);
}
console.log(mywork)



////                 ASSIGNMENT 2
/////  <<<<<<<<<<<<<< GUESSING GAME (USING WHILE LOOP)

//step 1
////    set a maximun value

const maxvalue =10;
// step 2
/// generate a rendom number

let randNum:number = (Math.floor(Math.random()*maxvalue+1))
console.log(`RANDOM NUMBER IS ${randNum}`);

// STEP 3
// TRACK THE GUESS STATUS

const guess =[5,2,4,6,7,1,9]
let isguesscorrect = false

let i  = 0 
while(!isguesscorrect && i<guess.length){
    const guessnumber = guess[i]
    if(guessnumber === randNum){
        isguesscorrect =true;
        console.log(` Correct Number is ${guessnumber} `)
    }else{console.log(`you guess Incorrect Number. ${guessnumber} `);
    }i++
}

///<<<<<<<<<<<<<<<<<<<<<<     counter increament

//<<<<<<<<<<<<<<<<<<<<<<< do while loop


////    step 1
let counter =0

/////step 2

do {console.log(`The counting is =${counter}`)
    
    counter++}
    while(counter<=100)


/// <<<<<<<<<<<<<<<<   OBJECT WITN FOR IN LOOP

//         CREATE OBJECT THREE ITEMS

let myobject={
    item1:"bike",
    item2:"car",
    item3:"rickshaw"
}
for(let a in myobject){
    console.log(`${myobject.item1},${myobject.item2}`);
    
}

        ///      ARRAY WITH LOOPS

        //   empty array
let myarray=[]

///use for loop
for(let i =1;i<=10;i++){
    myarray.push(i)
}

// log to array in console 
console.log(myarray);
























