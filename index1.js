
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







