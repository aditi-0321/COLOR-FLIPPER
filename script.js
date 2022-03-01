var btn=document.querySelector('.btn');
var colour=document.querySelector('.colour');
var arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener('click',function(){
    var hex="#";
    for(var i=0;i<6;i++)
    {
        hex+=arr[Math.floor(Math.random()*arr.length)]
    }
  
    colour.textContent=hex;
    document.body.style.backgroundColor=hex;
})