const dataTempArray = new Array();
const dataTempMap = new Object();

for (let i = 1; i<=11; i++){
  let dataTempMap = {};
  dataTempMap.image = require('../img/item/11_master_NFTs/' + ('00' + i).slice(-2) + '.png');
  dataTempMap.avatar = require('../img/avatars/avatar_4.jpg');
  dataTempMap.title = 'Weird Girl #' + ('0000' + i).slice(-4);
  dataTempMap.name = 'Bon_T'
  dataTempMap.price = "0.15"
  dataTempArray.push(dataTempMap);
}


const DemoStateMaster4 = {
  nftRepresentatives: JSON.stringify(dataTempArray)
}

export default DemoStateMaster4;
