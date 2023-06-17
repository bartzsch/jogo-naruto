const personagem = document.querySelector(".mario")
const obstaculo = document.querySelector(".pipe")
//console.log(obstaculo)   
const pulo = () => {
    personagem.classList.add('jump')
    setTimeout(() => {
        personagem.classList.remove('jump')
    }, 700)
}
const looping = setInterval(()=>{
const obstaculoPosition=obstaculo.offsetLeft
const personagemPosition=+window.getComputedStyle(personagem).bottom.replace('px','')
if(obstaculoPosition<=90 && obstaculoPosition>0 && personagemPosition<=77){
obstaculo.style.animation='none'
obstaculo.style.left=`${obstaculoPosition}px`
personagem.style.animation='none'
personagem.style.bottom=`${personagemPosition}px`
personagem.src='game_over.gif'
personagem.style.width='90%'
clearInterval(looping)
}
console.log(personagemPosition)
},10)





document.addEventListener('keydown',pulo)















