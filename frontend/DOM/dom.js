var one  =  document.querySelector('#one');
var two  =  document.querySelector('#two');
var three  =  document.querySelector('#three');

one.addEventListener('dblclick',function(){
  one.textContent = 'Hello Brother';
  one.style.color = 'red';
})
one.addEventListener('mouseout',function(){
  one.textContent = 'Sentence 1';
  one.style.color = 'red';
})
one.addEventListener('mouseover',function(){
  one.textContent = 'Sentence 1';
  one.style.color = 'black';
})
