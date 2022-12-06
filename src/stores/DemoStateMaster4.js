import DemoTokenId from './DemoTokenId';

const dataTempArray = new Array();
const dataTempMap = new Object();

for (let i = 1; i<=11; i++){
  let dataTempMap = {};
  dataTempMap.image = require('../img/item/11_master_NFTs/' + ('00' + i).slice(-2) + '.png');
  dataTempMap.avatar = require('../img/avatars/avatar_4.jpg');
  dataTempMap.title = 'Weird Girl #' + ('0000' + i).slice(-4);
  dataTempMap.name = 'Bon_T'
  dataTempMap.price = "0.15"
  dataTempMap.key = i
  dataTempMap.group = 4
  dataTempMap.tokenid = DemoTokenId.nfttoken4[i]
  dataTempMap.cryptoaddress = "0xE732795F4D850f7dF084010076e101b2dEcc4Ee5"
  dataTempArray.push(dataTempMap);
}


const DemoStateMaster4 = {
  nftRepresentatives: JSON.stringify(dataTempArray)
  
}

export default DemoStateMaster4;
