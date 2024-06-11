// let obj1={
//     firstname:"shubham",
//     lastname:"Chauhan",
//     Printname(){
//         console.log(obj1.firstname+obj1.lastname);
//     }




// }
// function createobj(){
//          return {
//             firstname:"shubham ",
//             lastname:"chauhan",
//             pname(){
//                 console.log(this.firstname+this.lastname);
//             }
//          }
// }
// let obj2=createobj();
// console.log(obj2.firstname+" "+obj2.lastname);
// function person() {
//     this.firstName="John",
//     this.lastName="Doe",
//      this.fullName =function(){
//       return this.firstName + " " + this.lastName;
//     }
//   };
  
  // Display data from the object using a getter:
  
// Object.defineProperty(person,"changefirstname",{
//     set:function(fn){
//         this.firstName=fn;
//     }
// })
// Object.defineProperty(person,"changelastname",{
//     set:function(ln){
//         this.lastName=ln;
//     }
// })
// person.prototype.middleName="kumar";
// let obj3=new person();
// console.log(obj3.middleName);
// let name="shubham";
// let tareekh=new Date('2024  31');
// console.log(tareekh);

// let s="Shubham";
// console.log(s.charAt(1));
// console.log(s.includes('bb'));
// let arr=[1,2,3,4,5,6];
// let numbers=arr;


// console.log(arr);
// console.log(numbers);
// console.log(x);
// const body=document.querySelector('body');
// body.style.display='flex';
// body.style.flexDirection='column';
// body.style.gap='20px';
// const container = document.querySelectorAll('div');
// for(let values of container){
//     values.style.color='blue';
//     values.style.backgroundColor='red';
//     values.style.border='2px solid black';
//     values.style.borderRadius='20px';
//     values.style.paddingLeft='10px';
//     values.style.paddingRight='10px';
// }
// let h2=document.createElement('h2');
// h2.innerHTML='Another Heading';
// let div2=document.querySelector('#ved');
// div2.append(h2);
// h2.classList.add('demo');
// console.log(h2.classList.contains('emo'));
let quotes=[{quote:"The best and most beautiful things in the world cannot be seen or even touched , they must be felt with the heart.",
             writer:"Hellen Keller"
            },
        {
          quote:"Trust is not the same as faith. A friend is someone you trust. Putting faith in anyone is a mistake.",
          writer:"Christopher Hitchens"  
        },
    {quote:"Light thinks it travels faster than anything but it is wrong. No matter how fast light travels, it finds the darkness has always got there first, and is waiting for it.",
     writer:"Terry Pratchet"

    },
    {
        quote:"You cannot control what happens to you, but you can control your attitude toward what happens to you, and in that, you will be mastering change rather than allowing it to master you.",
        writer:"Brian Tracy"
    },
    {
        quote:"Failure will never overtake me if my determination to succeed is strong enough.",
        writer:"Og Mandino"
    }
]
let quote=document.querySelector('#quote');
let author=document.querySelector('#writer');
let btn=document.querySelector('#new-btn');
const  changequote= ()=>{
    let i=Math.floor(Math.random()*quotes.length);
    
    quote.innerHTML=`"${quotes[i].quote}"`;
    author.innerHTML=quotes[i].writer;
}

btn.addEventListener('click',changequote);







