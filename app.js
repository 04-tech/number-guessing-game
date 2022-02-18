 function category(attempts){
const a= Math.floor(Math.random()*100);
if(a==0)
  a=1;
  let sum=attempts;
  let b=document.getElementById("number");
btn1.addEventListener("click",checknum);
function checknum(){

    let btn=document.getElementById("btn2");
      b=document.getElementById("number").value;
      // console.log(b)
     if(a==b)
       {
           document.getElementById("update").innerHTML="✨🎉 You guess it correct🎉✨"
           btn.style.display="block";
       }
       else if(b=="")
       {
         alert("please enter value")
       }
       else if(a>b)
       {
        sum--;
        document.getElementById("preguess").innerHTML+=(b+",");
        document.getElementById("remainguess").innerHTML=sum;
        document.getElementById("update").innerHTML="Low,try again!";
        document.getElementById("number").value="";
       }
       else
       {
         sum--;
        document.getElementById("preguess").innerHTML+=(b+",");
        document.getElementById("remainguess").innerHTML=sum;
       document.getElementById("update").innerHTML="high!try again!"
       document.getElementById("number").value="";
       }
       if(sum==0){
          document.getElementById("update").innerHTML=`Number is ${a},let's do again`;
          setTimeout(() => {
              location.reload();
          }, 1000);
       }
       btn2.addEventListener("click",()=>{
        location.reload()
    })
}
b.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btn1").click();
    }
});
}
const easy=document.getElementById("easy");
const hard=document.getElementById("hard");
easy.addEventListener("click",()=>{
  document.getElementById("section").style.display="none"
  document.getElementsByClassName("conatainer")[0].style.display="block";
  document.getElementById("easyattemptnumber").innerHTML=10;
  category(10);
})
hard.addEventListener("click",()=>{
  document.getElementById("section").style.display="none"
  document.getElementsByClassName("conatainer")[0].style.display="block";
  document.getElementById("easyattemptnumber").innerHTML=5;
  category(5);
})

