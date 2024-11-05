const url="https://api.coindesk.com/v1/bpi/currentprice.json"
const factsinseter=document.querySelector('#fact')
const btn =document.querySelector('#btn')
const getfacts= async () => {
    let response=await fetch(url)
    //console.log(response); //json format
    let data=await response.json();
    console.log(data.text);
    factsinseter.innerHTML=data.text;
}
// getfacts()
btn.addEventListener("click",getfacts);