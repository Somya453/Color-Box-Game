let s1=document.getElementById("s1");
s1.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100);

    s1.innerHTML=`<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>1</h1>`;
});




let s2=document.getElementById("s2");
let clr="green";
s2.addEventListener("mouseenter",function(){
    

if(clr="green"){
    s2.style.backgroundColor=`green`;
        clr="red";
}
else if(clr="red"){
    s2.style.backgroundColor=`red`;
    clr="blue";
}
else{
    s2.style.backgroundColor=`blue`;
    clr="red";
}});
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";
});



let s3=document.getElementById("s3");
s3.addEventListener("mouseenter",function(){
    let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
    let r3=Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${r1}, ${r2} , ${r3})`;
});
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";

});


let s4=document.getElementById("s4");
s4.addEventListener("mouseenter",function(){

    let r4=Math.floor(Math.random()*256);
    let r5=Math.floor(Math.random()*256);
    let r6=Math.floor(Math.random()*256);

    s1.style.backgroundColor=`rgb(${r4}, ${r5} , ${r6})`;
    s2.style.backgroundColor=`rgb(${r5}, ${r6} , ${r4})`;
    s3.style.backgroundColor=`rgb(${r6}, ${r4} , ${r5})`;
    
    
});

s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
});