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
			gameOver();
			break;
		}
	}

	if(clickedOrder.length == order.length){
		alert(`pontuação: $(score)\n Você Acertou Iniciando próximo nível`)
		nextLevel();
	}
}

//função para o clique do usuario
let click = (color) => {
	clickedOrder(clickedOrder.length) = color;
	createColorElement(color).classList.add('selected');

	setTimeout(() =>{
		createColorElement(color).classList.add('selected');
	})

	checkOrder();
}


//funcao referente a cor 
let createColorElement = (color) => {
	if(color == 0) {
		return green;
	} else if(color == 1){
		return red;
	} else if(color == 2){
		return yellow;
	} else if(color == 3) {
		return blue;
	}
}

// funcao responsavel de aumentar os pontos e mudar o nivel
let nextLevel = ( ) => {
	score++;
	shuffleOrder();
}

//funcao de fim de jogo
let gameOver = () => {
	alert(`Pontuação: $(score)! \n Você perdeu o jogon\n Clique em ok para iniciar um novo jogo`);
	order = [];
	clickedOrder= []

	playGame();
}

//funcao de iniciar o jogo
let playGame = () => {
	alert('Bem-vindo ao GENESIS! Iniciando novo jogo...')
	score = 0;
}