var myimages =[
// Mob fino a Whiskey Peak

//Str 10
{ image: "0120", probability: 0.01410},
{ image: "0121", probability: 0.01410},
{ image: "0126", probability: 0.01410},
{ image: "0131", probability: 0.01410},
{ image: "0136", probability: 0.01410},
{ image: "0165", probability: 0.01410},
{ image: "0170", probability: 0.01410},
{ image: "0175", probability: 0.01410},
{ image: "0179", probability: 0.01410},
{ image: "0237", probability: 0.01410},
  
  
//qck 10
{ image: "0127", probability: 0.01410},
{ image: "0122", probability: 0.01410},
{ image: "0132", probability: 0.01410},
{ image: "0137", probability: 0.01410},
{ image: "0164", probability: 0.01410},
{ image: "0167", probability: 0.01410},
{ image: "0172", probability: 0.01410},
{ image: "0177", probability: 0.01410},
{ image: "0181", probability: 0.01410},
{ image: "0239", probability: 0.01410},
  
  
//dex 12
{ image: "0119", probability: 0.01410},
{ image: "0123", probability: 0.01410},
{ image: "0128", probability: 0.01410},
{ image: "0133", probability: 0.01410},
{ image: "0138", probability: 0.01410},
{ image: "0163", probability: 0.01410},
{ image: "0166", probability: 0.01410},
{ image: "0171", probability: 0.01410},
{ image: "0176", probability: 0.01410},
{ image: "0180", probability: 0.01410},
{ image: "0215", probability: 0.01410},
{ image: "0238", probability: 0.01410},  
  
//psy 9
{ image: "0124", probability: 0.01410},
{ image: "0129", probability: 0.01410},
{ image: "0134", probability: 0.01410},
{ image: "0139", probability: 0.01410},
{ image: "0168", probability: 0.01410},
{ image: "0173", probability: 0.01410},
{ image: "0178", probability: 0.01410},
{ image: "0182", probability: 0.01410},
{ image: "0240", probability: 0.01410},
  
  
//int 9
{ image: "0125", probability: 0.01410},
{ image: "0130", probability: 0.01410},
{ image: "0135", probability: 0.01410},
{ image: "0140", probability: 0.01410},
{ image: "0141", probability: 0.01410},
{ image: "0169", probability: 0.01410},
{ image: "0174", probability: 0.01410},
{ image: "0183", probability: 0.01410},
{ image: "0241", probability: 0.01410},


// Personaggi unici rimasti
{ image: "0407", probability: 0.01500},
{ image: "0425", probability: 0.01500},
{ image: "0015", probability: 0.01700},
{ image: "0052", probability: 0.01700},
{ image: "0231", probability: 0.01700},
{ image: "0069", probability: 0.01700},
{ image: "0216", probability: 0.01700},
{ image: "0809", probability: 0.01700},
{ image: "0387", probability: 0.01700},
{ image: "0055", probability: 0.01700},
{ image: "0071", probability: 0.01700},
{ image: "0061", probability: 0.01700},
{ image: "0064", probability: 0.01700},
{ image: "0067", probability: 0.01700},
{ image: "0319", probability: 0.01700},
{ image: "0062", probability: 0.01700},
{ image: "0262", probability: 0.01700},
  
 //Legend
{ image: "0260", probability: 0.01000},
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
  document.write('<img src="https://onepiece-treasurecruise.com/wp-content/uploads/f' + getImage() + '.png" border=0>');
}
