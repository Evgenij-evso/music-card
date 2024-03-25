let card_container = document.querySelector('.main-container')
let num_card = document.getElementById('num-cards')
let add_card = document.getElementById('but-add-cards')
let checkbox_cards = document.querySelectorAll('.checkbox-card')
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



let tonality_list = []
let tonality_list_important = []
let sumbol_list = ['#','♭','ㅤ']
let temp_sumbol
let temp_tonality

function randomaiz_cards(){
    let random_tonality = getRandomInt(tonality_list.length)
    let random_sumbol = getRandomInt(sumbol_list.length)
    let card = document.createElement("div");
    card.className = 'card-music'
    card.innerHTML = `
        <span class="text-card-music sign-symbol">${sumbol_list[random_sumbol]}</span>
        <span class="text-card-music name-tonality">${tonality_list[random_tonality]}</span>`
    card_container.append(card);
    tonality_list.splice(random_tonality,1)
    if(tonality_list.length <= 0){
        for(i = 0;i < tonality_list_important.length;i++){
            tonality_list.push(tonality_list_important[i])
        }
    }
    console.log(tonality_list)
    // console.log('1')
}
function get_tonality_list(){
    for(let i = 0; i < checkbox_cards.length; i++){
        if(checkbox_cards[i].checked){
            tonality_list.push(checkbox_cards[i].value)
            tonality_list_important.push(checkbox_cards[i].value)
        }
    }
}
add_card.addEventListener('click',function(){
    get_tonality_list()
    if (tonality_list.length == 0){
        console.log('break')
        return
    }

    card_container.innerHTML = ''
    for(let i = 0; i < num_card.value; i++){
        randomaiz_cards()
    }
    tonality_list = []
    tonality_list_important = []
    console.log(tonality_list_important)
})
