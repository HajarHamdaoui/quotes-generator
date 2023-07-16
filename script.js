// let quotesAPI =[]
// async function getQuotes(){
    // const apiURL = 'https://type.fit/api/quotes';
    // try{
    //         response = await fetch(apiURL);
    // quotesAPI=await response.json();
    // }catch(e){}

    
// }
// onload=getQuotes();
let quoteContainer = document.getElementById("quote-container");
let quoteText=document.getElementById("quote-text");
let author= document.getElementById("author");
let newButton = document.getElementById("new-quote");
let twitter = document.getElementById("twitter");
let loader = document.getElementById("loader");
loader.hidden=true;
function loading(){
    loader.hidden = false ; 
    quoteContainer.hidden= true;   
}

function completing()
{
    loader.hidden= true;
    quoteContainer.hidden=false;
}

let randomIndex=Math.floor(Math.random()*localQuotes.length);
let randomQuote = localQuotes[randomIndex];
quoteText.innerHTML= randomQuote.text;
if(randomQuote.author==null){
    author.innerHTML="unknown"
}
else{
    author.innerHTML=randomQuote.author;
}
if(quoteText.textContent.length>120)
{
    quoteText.classList.add("long-quote");
}
else{
    quoteText.classList.remove("long-quote");
}
newButton.onclick=()=>{
    loading();
    let randomIndex=Math.floor(Math.random()*localQuotes.length);
    let randomQuote = localQuotes[randomIndex];
    quoteText.innerHTML= randomQuote.text;
    if(randomQuote.author==null){
        author.innerHTML="unknown"
    }
    else{
        author.innerHTML=randomQuote.author;
    } 
    completing();   

};

twitter.onclick=()=>{
    const twitterURL= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
    window.open(twitterURL,'_blank');
}


let quote = `${quoteText.innerHTML} - ${author.innerHTML}`;
facebook.onclick=(quote)=>{    const encodedText = encodeURIComponent(quote);
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodedText}`;
    window.open(facebookURL, '_blank');}




