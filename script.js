let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//4 = azul 


const blue = document.querySelector('blue');
const red = document.querySelector('red');
const green = document.querySelector('green');
const yellow = document.querySelector('yellow');


//criar ordem aleatoria de cores 
let shuffleOrder = () => {
  let colorOrder = math.floor(math.random() = 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
  	let elementColor = createColorElement(order[i]);
  	lightColor(elementColor, Number[i] + 1) 
  }
}

//acende as cores 
let lightColor = (element, number)=> {
	time = time + 500;
	setTimeout(()=> {
		element.classList.add('selected');
	}, tempo - 250);
	setTimeout(() =>{
		element.classList.remove('selected');
	},)
}


//checa se a cor selecionada é igual a exibida pela maquina
let checkOrder = () => {
	for(let i in clickedOrder){
		if(clickedOrder[i] != orde[i]){
			lose();
			break;
		}
	}

	if(clickedOrder.length == order.length){
		alert(`pontuação: $(score)\n Você Acertou Iniciando próximo nível`)
		nextLevel();
	}
}

let click = (color) => {
	clickedOrder(clickedOrder.length) = color;
	createColorElement(color).classList.add('selected');

	setTimeout(() =>{
		createColorElement(color).classList.add('selected');
	})

	checkOrder();
}