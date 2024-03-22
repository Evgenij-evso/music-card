let card_container = document.querySelector('.main-container')
let num_card = document.getElementById('num-cards')
let add_card = document.getElementById('but-add-cards')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

let tonality_list = ['C','D','E','F','G','A','H']
let sumbol_list = ['#','♭','ㅤ']
let temp_sumbol
let temp_tonality

function randomaiz_cards(){
    let random_tonality = getRandomInt(tonality_list.length)
    let random_sumbol = getRandomInt(sumbol_list.length)
    let card = document.createElement("div");
    card.className = 'card-music'
    if (temp_tonality == random_tonality){
        randomaiz_cards()
        console.log('True')
    }
    card.innerHTML = `
        <span class="text-card-music sign-symbol">${sumbol_list[random_sumbol]}</span>
        <span class="text-card-music name-tonality">${tonality_list[random_tonality]}</span>`
    card_container.append(card);
    temp_tonality = random_tonality
    temp_sumbol = random_sumbol
        // console.log('1')
}
add_card.addEventListener('click',function(){
    card_container.innerHTML = ''
    for(let i = 0; i < num_card.value; i++){
        randomaiz_cards()
    }
})
