const dataTempArray = new Array();
const dataTempMap = new Object();

for (let i = 1; i<=150; i++){
  let dataTempMap = {};
  dataTempMap.image = require('../img/item/150_Woman_NFTs/' + i + '.png');
  dataTempMap.avatar = require('../img/avatars/avatar_3.jpg');
  dataTempMap.title = 'KaKuMa #' + ('0000' + i).slice(-4);
  dataTempMap.name = 'Sulla'
  dataTempMap.price = "0.2"
  dataTempArray.push(dataTempMap);
}


const DemoStateWoman3 = {
  nftRepresentatives: JSON.stringify(dataTempArray)
}

export default DemoStateWoman3;
