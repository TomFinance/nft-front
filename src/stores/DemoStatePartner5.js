const dataTempArray = new Array();
const dataTempMap = new Object();

for (let i = 1; i<=9; i++){
  let dataTempMap = {};
  dataTempMap.image = require('../img/item/9_partner_2d_NFTs/' + ('00' + i).slice(-2) + '.jpg');
  dataTempMap.avatar = require('../img/avatars/avatar_5.jpg');
  dataTempMap.title = 'Gray Wolf #' + ('0000' + i).slice(-4);
  dataTempMap.name = 'WolFree'
  dataTempMap.price = "0.55"
  dataTempArray.push(dataTempMap);
}


const DemoStatePartner5 = {
  nftRepresentatives: JSON.stringify(dataTempArray)
}

export default DemoStatePartner5;
