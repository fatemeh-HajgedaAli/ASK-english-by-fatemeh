//use reload for first showing site;
const loaderElem=document.querySelector('.loaderHidden');
window.addEventListener('load', function(){
  this.setTimeout(() => {
this.document.querySelector(".loaderHidden").style.display="none";},100);
  });

//reload and Refresh the site.
document.querySelector('.linkitem.active').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'index.html'; // هدایت به صفحه اصلی
});
//password icon
const passwordInput=document.querySelector(".showPassword");
const togglePassword=document.querySelector("#togglePassword");
togglePassword.addEventListener("click" , () => {
  const type=passwordInput.getAttribute("type") === "password" ? "text" : "password" ;
  passwordInput .setAttribute("type" , type);
  // Toggle icon (optional)
  togglePassword.classList.toggle("bi-eye-fill");
  togglePassword.classList.toggle("bi-eye-slash-fill");
  togglePassword.classList.toggle("closeEye");
});