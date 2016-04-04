function card(value, name, suit){
    this.value = value;
    this.name = name;
    this.suit = suit;
}

function deck(){
    this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
    var cards = [];
    
    for( var i = 0; i < this.suits.length; i++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+2, this.names[n], this.suits[i] ) );
        }
    }

    return cards;
}
var myDeck = new deck();

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

myDeck = shuffle(myDeck);

console.log(myDeck.length);




function Player(name){
    this.playerDeck = [];
    this.name = name;
}
Player.prototype.takeCard = function(){
        var shiftedCard = myDeck.shift();
        this.playerDeck.push(shiftedCard);
        //console.log(this.playerDeck);
    };

var player1 = new Player('player1');
var player2 = new Player('player2');
var player3 = new Player('player3');
var player4 = new Player('player4');

var playersArr = [player1, player2, player3, player4];

