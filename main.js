


var i=0
function turnRedOrYellow(coin) {
	if (i%2==0) {
		$(coin).css("background-color", "red")
		$(".RedOrYellow").html("au tour des  <br> jaunes")
	} else { 
		$(coin).css("background-color", "gold")
		$(".RedOrYellow").html("au tour des <br> rouges")
	}
i++
	}

	
var hauteur = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function play(x) {
	var colomnPlayedOn = ".colomn" + x
	
	$(colomnPlayedOn).click(function() {
		var firstCoin = "#coin" + (40 + x)
		var secondCoin = "#coin" + (32 + x)
		var thirdCoin = "#coin" + (24 + x)
		var fourthCoin = "#coin" + (16 + x)
		var fifthCoin = "#coin" + (8 + x)
		var sixthCoin = "#coin" + x


		if (hauteur[x]==0) {
			turnRedOrYellow(firstCoin)
			} else if (hauteur[x]==1) {
			turnRedOrYellow(secondCoin)
			} else if (hauteur[x]==2) {
			turnRedOrYellow(thirdCoin)
			} else if (hauteur[x]==3) {
			turnRedOrYellow(fourthCoin)
			} else if (hauteur[x]==4) {
			turnRedOrYellow(fifthCoin)
 			} else if (hauteur[x]==5) {
 			turnRedOrYellow(sixthCoin) }
		hauteur[x]++
	})
 }

for (var y=0; y<9; y++) {
	play(y)

}

$(".reset").click( function() {
	
	setTimeout(function() { $(".coin").css("background-color", "white"); }, 1000)
	hauteur = [0, 0, 0, 0, 0, 0, 0, 0, 0]





 var resetGame = anime({
  targets: '.coin',
  duration: 1000,
  easing: 'linear',
  translateY: 800,
  direction: 'alternate'

})

})


