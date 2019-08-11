document.addEventListener('DOMContentLoaded', () => {

function popUpOpen() {
  if (event.target.dataset.action === 'thank') {
   document.getElementById("popUp1").style.display = "flex";
   document.getElementById("popUp1").style.right= '30%';
   document.getElementById("popUp1").style.top= '30%';
   setTimeout(function()
   {document.getElementById("popUp1").style.display = "none"; }, 8000);
  }
  else if (event.target.dataset.action === 'cancel') {
    console.log('hi')
   document.getElementById("popUp2").style.display = "flex";
   document.getElementById("popUp2").style.right= '30%';
   document.getElementById("popUp2").style.top= '30%';
   setTimeout(function()
   {document.getElementById("popUp2").style.display= "none"; }, 8000);

  }

}
})
