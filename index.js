const form = document.querySelector('#formulario');
const input = document.querySelector('#input-escribir');
const btn = document.querySelector('#btn-agg');
const list = document.querySelector('.list');
const li = document.querySelector('#li');
const borrar = document.querySelector('.botonb');




let id = 0;
let total = 0;

btn.addEventListener('click', e => {
	e.preventDefault();
	addTarea();
	total ++;
	  cantidad.innerHTML = total;
});

let addTarea = () => {
	id++;

       const inputValue = input.value;
	   console.log(inputValue);
	 

	contenedor.innerHTML += `
	<div class="list" id="${id}">
        
        <ul id="tarea">
          <button id="botonl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
		</svg>
		</button>

		
		<li id="li">${inputValue}</li>

		<button class="botonb"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
</svg>
</button>
 </ul>
	 </div>`;

	  input.value = '';
	  
};

borrar.addEventListener('click', e =>{
	li.removeEventListener(li, id);
});

