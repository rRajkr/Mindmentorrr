function showmodal()
{
   document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginform').classList.add('showloginform');
}
 showmodal();
 function closeModel(){
   document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginform').classList.remove('showloginform');
 }
var c = document.querySelector("span");
c.addEventListener("click",closeModel);