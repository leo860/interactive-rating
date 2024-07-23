const submit = document.getElementById("submit")
const oneButton	= document.getElementById("but1")
const twoButton = document.getElementById("but2")
const threeButton = document.getElementById("but3")
const fourButton =  document.getElementById("but4")
const fiveButton = document.getElementById("but5")
const rating = document.getElementById("rating")
const showThankYou = document.getElementById("thankYou")
const scoreFinal = document.getElementById("scoreFinal")

submit.addEventListener("click", (e)=>{
	console.log("funcional")
 	showThankYou.style.display = "flex"
 	rating.style.display  = "none"
}) 

scoreFinal.innerHTML = `You selected Nothing out of 5`
oneButton.addEventListener("click", (e)=>{
	oneButton.style.backgroundColor = 'white'
	oneButton.style.color = ' hsl(216, 12%, 8%) '
	twoButton.style.backgroundColor = null
	twoButton.style.color = null
	threeButton.style.backgroundColor = null
	threeButton.style.color = null
	fourButton.style.backgroundColor = null
	fourButton.style.color = null
	fiveButton.style.backgroundColor = null 
	fiveButton.style.color = null
	scoreFinal.innerHTML = `You selected ${oneButton.innerHTML} out of 5 `
})
twoButton.addEventListener("click", (e)=>{
	oneButton.style.backgroundColor = null
	oneButton.style.color = null
	twoButton.style.backgroundColor = 'white'
	twoButton.style.color = ' hsl(216, 12%, 8%) '
	threeButton.style.backgroundColor = null
	threeButton.style.color = null
	fourButton.style.backgroundColor = null
	fourButton.style.color = null
	fiveButton.style.backgroundColor = null 
	fiveButton.style.color = null
	scoreFinal.innerHTML = `You selected ${twoButton.innerHTML} out of 5 `
})
threeButton.addEventListener("click", (e)=>{
	oneButton.style.backgroundColor = null
	oneButton.style.color = null
	twoButton.style.backgroundColor = null
	twoButton.style.color = null
	threeButton.style.backgroundColor = 'white'
	threeButton.style.color = ' hsl(216, 12%, 8%) '
	fourButton.style.backgroundColor = null
	fourButton.style.color = null
	fiveButton.style.backgroundColor = null 
	fiveButton.style.color = null
	scoreFinal.innerHTML = `You selected ${threeButton.innerHTML} out of 5 `
})
fourButton.addEventListener("click", (e)=>{
	oneButton.style.backgroundColor = null
	oneButton.style.color = null
	twoButton.style.backgroundColor = null
	twoButton.style.color = null
	threeButton.style.backgroundColor = null
	threeButton.style.color = null
	fourButton.style.backgroundColor = 'white'
	fourButton.style.color = ' hsl(216, 12%, 8%) '
	fiveButton.style.backgroundColor = null 
	fiveButton.style.color = null
	scoreFinal.innerHTML = `You selected ${fourButton.innerHTML} out of 5 `
})
fiveButton.addEventListener("click", (e)=>{
oneButton.style.backgroundColor = null
	oneButton.style.color = null
	twoButton.style.backgroundColor = null
	twoButton.style.color = null
	threeButton.style.backgroundColor = null
	threeButton.style.color = null
	fourButton.style.backgroundColor = null 
	fourButton.style.color = null
	fiveButton.style.backgroundColor = 'white'
	fiveButton.style.color = ' hsl(216, 12%, 8%) '
	scoreFinal.innerHTML = `You selected ${fiveButton.innerHTML} out of 5 `
})


console.log(oneButton.type)





