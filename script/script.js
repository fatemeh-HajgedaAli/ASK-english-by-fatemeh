//use reload for first showing site;
const loaderElem=document.querySelector('.loaderHidden');
window.addEventListener('load', function(){
  this.setTimeout(() => {
this.document.querySelector(".loaderHidden").style.display="none";},3000);
  });

//reload and Refresh the site.
document.querySelector('.linkitem.active').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'index.html'; // هدایت به صفحه اصلی
});