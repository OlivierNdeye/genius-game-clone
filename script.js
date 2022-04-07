let order = [];
let clickOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//4 = azul 


const blue = document.querySelector('blue');
const red = document.querySelector('red');
const green = document.querySelector('green');
const yellow = document.querySelector('yellow');

let shuffleOrder = () => {
  let colorOrder = math.floor(math.random() = 4);
  order[order.lenght] = colorOrder;
  clickOrder = [];

  for(let i in order){
  	let elementColor = createElement(order[i]);
  	lightColor(elementColor, Number[i] + 1) 
  }
}


let lightColor = (element, number)=> {
	time = time + 500;
	setTimeout(()=> {
		element.classList.add('selected');
	}, tempo - 250);
	setTimeout(() =>{
		element.classList.remove('selected');
	},)
}
