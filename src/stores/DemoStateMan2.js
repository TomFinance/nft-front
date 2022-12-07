import DemoTokenId from './DemoTokenId';

const dataTempArray = new Array();
const dataTempMap = new Object();

for (let i = 1; i<=150; i++){
  let dataTempMap = {};
  dataTempMap.image = require('../img/item/150_Man_NFTs/' + i + '.jpg');
  dataTempMap.avatar = require('../img/avatars/avatar_2.jpg');
  dataTempMap.title = 'KaKuMa #' + ('0000' + i).slice(-4);
  dataTempMap.name = 'Sulla'
  dataTempMap.price = "0.2"
  dataTempMap.key = i
  dataTempMap.group = 2
  dataTempMap.tokenid = DemoTokenId.nfttoken2[i]
  dataTempMap.cryptoaddress = "0x8653d734aEb2511029c542f6312176cC9261b8f1"
  dataTempArray.push(dataTempMap);
}


const DemoStateMan2 = {
  nftRepresentatives: JSON.stringify(dataTempArray)
}

export default DemoStateMan2;
