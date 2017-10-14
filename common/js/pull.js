var myimages =[
// Mob fino a Whiskey Peak

//Str
{ image: "0120.png", probability: 0.00000},
{ image: "0121.png", probability: 0.00000},
{ image: "0126.png", probability: 0.00000},
{ image: "0131.png", probability: 0.00000},
{ image: "0136.png", probability: 0.00000},
{ image: "0165.png", probability: 0.00000},
{ image: "0170.png", probability: 0.00000},
{ image: "0175.png", probability: 0.00000},
{ image: "0179.png", probability: 0.00000},
{ image: "0237.png", probability: 0.00000},
  
  
//qck 
{ image: "0127.png", probability: 0.00000},
{ image: "0122.png", probability: 0.00000},
{ image: "0132.png", probability: 0.00000},
{ image: "0137.png", probability: 0.00000},
{ image: "0164.png", probability: 0.00000},
{ image: "0167.png", probability: 0.00000},
{ image: "0172.png", probability: 0.00000},
{ image: "0177.png", probability: 0.00000},
{ image: "0181.png", probability: 0.00000},
{ image: "0239.png", probability: 0.00000},
  
  
//dex
{ image: "0119.png", probability: 0.00000},
{ image: "0123.png", probability: 0.00000},
{ image: "0128.png", probability: 0.00000},
{ image: "0133.png", probability: 0.00000},
{ image: "0138.png", probability: 0.00000},
{ image: "0163.png", probability: 0.00000},
{ image: "0166.png", probability: 0.00000},
{ image: "0171.png", probability: 0.00000},
{ image: "0176.png", probability: 0.00000},
{ image: "0180.png", probability: 0.00000},
{ image: "0215.png", probability: 0.00000},
{ image: "0238.png", probability: 0.00000},
  
  
//psy
{ image: "0124.png", probability: 0.00000},
{ image: "0129.png", probability: 0.00000},
{ image: "0134.png", probability: 0.00000},
{ image: "0139.png", probability: 0.00000},
{ image: "0168.png", probability: 0.00000},
{ image: "0173.png", probability: 0.00000},
{ image: "0178.png", probability: 0.00000},
{ image: "0182.png", probability: 0.00000},
{ image: "0240.png", probability: 0.00000},
  
  
//int
{ image: "0125.png", probability: 0.00000},
{ image: "0130.png", probability: 0.00000},
{ image: "0135.png", probability: 0.00000},
{ image: "0140.png", probability: 0.00000},
{ image: "0141.png", probability: 0.00000},
{ image: "0169.png", probability: 0.00000},
{ image: "0174.png", probability: 0.00000},
{ image: "0183.png", probability: 0.00000},
{ image: "0241.png", probability: 0.00000},


// Personaggi unici rimasti
{ image: "0407.png", probability: 0.90000},
{ image: "0425.png", probability: 0.10000},
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
  document.write('<img src="https://onepiece-treasurecruise.com/wp-content/uploads/f' + getImage() +'" border=0>');
}
