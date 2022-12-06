const dataTempArray = new Array();
const dataTempMap = new Object();

for (let i = 1; i<=400; i++){
  let dataTempMap = {};
  dataTempMap.image = require('../img/item/400_Chicking_NFTs/' + i + '.png');
  dataTempMap.avatar = require('../img/avatars/avatar_1.jpg');
  dataTempMap.title = 'Happy Chicken #' + ('0000' + i).slice(-4);
  dataTempMap.name = 'KUMA'
  dataTempMap.price = "0.25"
  dataTempArray.push(dataTempMap);
}


const DemoStateChicken1 = {
  nftRepresentatives: JSON.stringify(dataTempArray)
}

export default DemoStateChicken1;
