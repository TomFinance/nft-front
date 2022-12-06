import DemoTokenId from './DemoTokenId';

const dataTempArray = new Array();
const dataTempMap = new Object();

for (let i = 1; i<=9; i++){
  let dataTempMap = {};
  dataTempMap.image = require('../img/item/9_partner_2d_NFTs/' + ('00' + i).slice(-2) + '.jpg');
  dataTempMap.avatar = require('../img/avatars/avatar_5.jpg');
  dataTempMap.title = 'Gray Wolf #' + ('0000' + i).slice(-4);
  dataTempMap.name = 'WolFree'
  dataTempMap.price = "0.55"
  dataTempMap.key = i
  dataTempMap.group = 5
  dataTempMap.tokenid = DemoTokenId.nfttoken5[i]
  dataTempMap.cryptoaddress = "0xc75b7422102FC2884855a8d4F41563EbD7E33139"
  dataTempArray.push(dataTempMap);
}


const DemoStatePartner5 = {
  nftRepresentatives: JSON.stringify(dataTempArray)
}

export default DemoStatePartner5;
