burger=document.querySelector('.burger');
container=document.querySelector('.container');
logo=document.querySelector('.logo');
navservice=document.querySelector('.nav_service');
navlist=document.querySelector('.nav-list');
rocket=document.querySelector('.rocket');

burger.addEventListener('click',()=>{
  logo.classList.toggle('hide');
  navlist.classList.toggle('v-class-resp');
//   rocket.classList.toggle('hide');
  container.classList.toggle('nav-resp');
})