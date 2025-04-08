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

const togglePassword=document.querySelector("#togglePassword");
togglePassword.addEventListener("click" , () => {
  const type=passwordInput.getAttribute("type") === "password" ? "text" : "password" ;
  passwordInput .setAttribute("type" , type);

  // Toggle icon (optional)
  togglePassword.classList.toggle("bi-eye-fill");
  togglePassword.classList.toggle("bi-eye-slash-fill");
  togglePassword.classList.toggle("closeEye");
});

//Password alarm;
// گرفتن المنت‌ها (HTML elements)
const passwordInput = document.getElementById("passWordInput");  // گرفتن ورودی رمز عبور
const emailInput = document.getElementById("textInput");
const passwordAlert = document.getElementById("passwordAlert");  // گرفتن هشدار مربوط به رمز عبور
const loginBtn = document.querySelector(".loginBtn");  // گرفتن دکمه لاگین


function isPasswordValid(password) {
  // بررسی رمز عبور با استفاده از عبارات منظم (Regex) برای چک کردن شرایط:
  const lengthCheck = password.length >= 8;  // حداقل ۸ کاراکتر
  const numberCheck = /\d/.test(password);  // وجود حداقل یک عدد
  const uppercaseCheck = /[A-Z]/.test(password);  // وجود حداقل یک حرف بزرگ
  const symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);  // وجود حداقل یک نماد خاص
  console.log("Length check:", lengthCheck);
  console.log("Number check:", numberCheck);
  console.log("Uppercase check:", uppercaseCheck);
  console.log("Symbol check:", symbolCheck);

  return lengthCheck && numberCheck && uppercaseCheck && symbolCheck; // اگر همه شرایط درست باشند، true برمی‌گرداند
}
// افزودن رویداد (event listener) برای دکمه لاگین
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const password = passwordInput.value.trim();  

  if (password === "") {
    passwordAlert.textContent = ""  // پیام هشدار برای فیلد خالی
    passwordAlert.style.display = "none";  // نمایش هشدار
    console.log("رمز عبور خالی است.");
  } else if (isPasswordValid(password)) {
    passwordAlert.style.display = "none";  
    console.log("رمز عبور درست است.");
  } else {
    passwordAlert.style.display = "block"; 
    console.log("رمز عبور مشکل دارد.");
  }
});

// افزودن رویداد برای فشردن دکمه "Enter" برای پاک کردن فیلد
emailInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {  // بررسی اینکه کلید فشرده شده "Enter" باشد
    emailInput.value = "";  // پاک کردن مقدار فیلد ورودی ایمیل
    emailAlert.style.display = "none";  // مخفی کردن هشدار ایمیل
  }
});
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {  // بررسی اینکه کلید فشرده شده "Enter" باشد
    passwordInput.value = "";  // پاک کردن مقدار فیلد ورودی رمز عبور
    passwordAlert.style.display = "none";  // مخفی کردن هشدار رمز عبور
  }
});

