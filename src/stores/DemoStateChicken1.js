import DemoTokenId from './DemoTokenId';

const dataTempArray = new Array();
const dataTempMap = new Object();

for (let i = 1; i<=400; i++){
  let dataTempMap = {};
  dataTempMap.image = require('../img/item/400_Chicking_NFTs/' + i + '.png');
  dataTempMap.avatar = require('../img/avatars/avatar_1.jpg');
  dataTempMap.title = 'Happy Chicken #' + ('0000' + i).slice(-4);
  dataTempMap.name = 'KUMA'
  dataTempMap.price = "0.25"
  dataTempMap.key = i
  dataTempMap.group = 1
  dataTempMap.tokenid = DemoTokenId.nfttoken1[i]
  dataTempMap.cryptoaddress = "0x4Ca94789CaBC9e5a59fD5fAA5F415637C21E3F4F"
  dataTempArray.push(dataTempMap);
}

const DemoStateChicken1 = {
  nftRepresentatives: JSON.stringify(dataTempArray)
}

export default DemoStateChicken1;
