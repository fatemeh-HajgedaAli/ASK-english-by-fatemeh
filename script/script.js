document.querySelectorAll('.navMenu li').forEach(item => {
  item.addEventListener('click' , function(event){
    event.stopPropagation();
  }) 
  let dropdown=this.querySelector('.dropdown');
  if(drowpdown.style.display === "block"){
    drowpdown.style.display="none"
  }
  
})