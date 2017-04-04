var myimages = [
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f1434.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f1434.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f1434.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0122.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0123.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0124.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0125.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0126.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0127.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0128.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0129.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0130.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0136.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0137.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0138.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0139.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0140.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0141.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0163.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0164.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0165.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0166.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0167.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0168.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0169.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0170.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0171.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0172.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0173.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0174.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0175.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0176.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0177.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0178.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0179.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0180.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0181.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0182.png", probability: 0.02499},
{ image: "http://onepiece-treasurecruise.com/wp-content/uploads/f0183.png", probability: 0.02499}, // Mob fino ad arlong
// Personaggi unici rimasti
{ image: "https://onepiece-treasurecruise.com/wp-content/uploads/f0231.png", probability: 0.02539},
];

function getImage() {
  var rand = Math.random();
  var probabilitiy_sum = 0;
  for (var i = 0; i < myimages.length; i++) {
    probabilitiy_sum += myimages[i].probability;
    if (rand <= probabilitiy_sum) {
      return myimages[i].image;
    }
  }
  return myimages[myimages.length].image;
}

for (var i = 0; i < 1; i++) {
  document.write('<img id="textbox" src="' + getImage() +'" border=0>');
}
