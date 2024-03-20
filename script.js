let card_container = document.querySelector('.main-container')
let num_card = document.getElementById('num-cards')
let add_card = document.getElementById('but-add-cards')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let tonality_list = ['C','D','E','F','G','A','H','B','c','d','e','f','g','a','h','b']
let sumbol_list = ['#','♭']
add_card.addEventListener('click',function(){
    card_container.innerHTML = ''
    for(let i = 0; i < num_card.value; i++){

        let card = document.createElement("div");
        card.className = 'card-music'
        card.innerHTML = `
        <span class="text-card-music sign-symbol">${sumbol_list[getRandomInt(sumbol_list.length)]}</span>
        <span class="text-card-music name-tonality">${tonality_list[getRandomInt(tonality_list.length)]}</span>`
        card_container.append(card);
    }
})
