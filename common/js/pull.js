var myimages =[
// Mob fino a Whiskey Peak

//Str
{ image: "f0120.png", probability: 0.00000},
{ image: "f0121.png", probability: 0.00000},
{ image: "f0126.png", probability: 0.00000},
{ image: "f0131.png", probability: 0.00000},
{ image: "f0136.png", probability: 0.00000},
{ image: "f0165.png", probability: 0.00000},
{ image: "f0170.png", probability: 0.00000},
{ image: "f0175.png", probability: 0.00000},
{ image: "f0179.png", probability: 0.00000},
{ image: "f0237.png", probability: 0.00000},
  
  
//qck 
{ image: "f0127.png", probability: 0.00000},
{ image: "f0122.png", probability: 0.00000},
{ image: "f0132.png", probability: 0.00000},
{ image: "f0137.png", probability: 0.00000},
{ image: "f0164.png", probability: 0.00000},
{ image: "f0167.png", probability: 0.00000},
{ image: "f0172.png", probability: 0.00000},
{ image: "f0177.png", probability: 0.00000},
{ image: "f0181.png", probability: 0.00000},
{ image: "f0239.png", probability: 0.00000},
  
  
//dex
{ image: "f0119.png", probability: 0.00000},
{ image: "f0123.png", probability: 0.00000},
{ image: "f0128.png", probability: 0.00000},
{ image: "f0133.png", probability: 0.00000},
{ image: "f0138.png", probability: 0.00000},
{ image: "f0163.png", probability: 0.00000},
{ image: "f0166.png", probability: 0.00000},
{ image: "f0171.png", probability: 0.00000},
{ image: "f0176.png", probability: 0.00000},
{ image: "f0180.png", probability: 0.00000},
{ image: "f0215.png", probability: 0.00000},
{ image: "f0238.png", probability: 0.00000},
  
  
//psy
{ image: "f0124.png", probability: 0.00000},
{ image: "f0129.png", probability: 0.00000},
{ image: "f0134.png", probability: 0.00000},
{ image: "f0139.png", probability: 0.00000},
{ image: "f0168.png", probability: 0.00000},
{ image: "f0173.png", probability: 0.00000},
{ image: "f0178.png", probability: 0.00000},
{ image: "f0182.png", probability: 0.00000},
{ image: "f0240.png", probability: 0.00000},
  
  
//int
{ image: "f0125.png", probability: 0.00000},
{ image: "f0130.png", probability: 0.00000},
{ image: "f0135.png", probability: 0.00000},
{ image: "f0140.png", probability: 0.00000},
{ image: "f0141.png", probability: 0.00000},
{ image: "f0169.png", probability: 0.00000},
{ image: "f0174.png", probability: 0.00000},
{ image: "f0183.png", probability: 0.00000},
{ image: "f0241.png", probability: 0.00000},


// Personaggi unici rimasti
{ image: "f0407.png", probability: 0.90000},
{ image: "f0425.png", probability: 0.10000},
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
  document.write('<img src="https://onepiece-treasurecruise.com/wp-content/uploads/' + getImage() +'" border=0>');
}
