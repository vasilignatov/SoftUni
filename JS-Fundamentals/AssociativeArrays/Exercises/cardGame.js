let cardGame = function (input){
    const colors = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    const cards = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let players = {};

    for (const line of input){
        let [name, hand] = line.split(': ');
        hand = hand.split(', ');

        if (!players.hasOwnProperty(name)){
            players[name] = [];
        }
        players[name].push(...hand);
    }

    for (let key in players){
        let cardsArr = new Set(players[key]);
        
        Array.from(cardsArr)
        .forEach( card => {
            let elements = card.split('');
            let color = element.join('');
            let cardNum = element.join('')
            if (isNaN(cardNum)){
                cardNum = cards[cardNum]
            }

            let total += colors[color] * Number(cardNum);
            plalyers[key] 
        })

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])