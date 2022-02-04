let button = document.querySelectorAll('button');
let input = document.querySelector('input');
// let plus = document.querySelector('#plus');

button.forEach(element => {
   element.addEventListener('click', () => {
      input.value = element.value;
   });
});

