const input = document.querySelector('input');
const hideWord = document.querySelector('.secret');
const btnCheck = document.querySelector('.check');

const wordsList = ['humanidad','humano','persona','gente','hombre','mujer','bebé','niño','niña',
    'adolescente','adulto','adulta','anciano','anciana','don','doña','señor','señora','caballero',
    'dama','individuo'];

const wordIndex = Math.floor(Math.random() * wordsList.length - 1);
const randomWord = wordsList[wordIndex];
const randomWordArr = randomWord.split('')


let wordHide = [];


for(let letter of randomWordArr){
	wordHide.push(' _')
}
hideWord.textContent = `${wordHide.join('')}`
const checkWord = function(ch){
	
}


btnCheck.addEventListener('click', () => {
	const chart = input.value;
	checkWord(chart);
	input.value = '';
});