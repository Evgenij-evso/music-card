let card_container = document.querySelector('.main-container')
let num_card = document.getElementById('num-cards')
let num_cards_septaccord = document.getElementById('num-cards-septaccord')
let add_card = document.getElementById('but-add-cards-classic')
let add_card_septaccord = document.getElementById('but-add-cards-septaccords')
let checkbox_cards = document.querySelectorAll('.checkbox-card')
let radio_but_menu = document.querySelectorAll('.radio-but_menu')
let tab_1 = document.querySelector('.tab-1')
let tab_2 = document.querySelector('.tab-2')
let settings_card = document.querySelector('.settings-card')

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

for(let i = 0; i < radio_but_menu.length; i++){
    radio_but_menu[i].addEventListener('click',function(){
        console.log(this.value)
        if(this.value == 'accords-classic'){
            tab_1.style.display = 'flex'
            tab_2.style.display = 'none'
            settings_card.style.display = 'flex'
        }
        else if(this.value == 'sept-accords'){
            tab_2.style.display = 'flex'
            tab_1.style.display = 'none'
            settings_card.style.display = 'none'
        }
    })
}

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
let septaccord_list = ['б.маж','б.мин','м.маж','м.мин','м.ум','ум']
let septaccord_list_important = ['б.маж','б.мин','м.маж','м.мин','м.ум','ум']

function randomaiz_cards_septaccord(){
    let random_septaccord = getRandomInt(septaccord_list.length)
    let random_sumbol = getRandomInt(tonality_list.length)
    let card = document.createElement("div");
    card.className = 'card-music'
    card.innerHTML = `
        <span class="text-card-music name-tonality-septaccord">${septaccord_list[random_septaccord]}</span>
        <span class="text-card-music sign-symbol-septaccord">${tonality_list[random_sumbol]}</span>
        `
    card_container.append(card);
    septaccord_list.splice(random_septaccord,1)
    if(septaccord_list.length <= 0){
        for(i = 0;i < septaccord_list_important.length;i++){
            septaccord_list.push(septaccord_list_important[i])
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

add_card_septaccord.addEventListener('click',function(){
    get_tonality_list()
    card_container.innerHTML = ''
    for(let i = 0; i < num_cards_septaccord.value; i++){
        randomaiz_cards_septaccord()
    }
})