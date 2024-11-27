var searchForm =document.getElementById('searchForm')
searchForm.addEventListener('submit',function(event){
event.preventDefault();
var search =document.getElementById('new').value
console.log(search);
localStorage.setItem{'search',search}
var result =document.getElementById('result')
result.innerHTML="you searh about"+localStorage.getItem{'search'}
})
   
