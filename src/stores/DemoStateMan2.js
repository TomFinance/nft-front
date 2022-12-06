const dataTempArray = new Array();
const dataTempMap = new Object();

for (let i = 1; i<=150; i++){
  let dataTempMap = {};
  dataTempMap.image = require('../img/item/150_Man_NFTs/' + i + '.png');
  dataTempMap.avatar = require('../img/avatars/avatar_2.jpg');
  dataTempMap.title = 'KaKuMa #' + ('0000' + i).slice(-4);
  dataTempMap.name = 'Sulla'
  dataTempMap.price = "0.2"
  dataTempArray.push(dataTempMap);
}


const DemoStateMan2 = {
  nftRepresentatives: JSON.stringify(dataTempArray)
}

export default DemoStateMan2;
