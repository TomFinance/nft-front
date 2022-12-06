import { proxy } from "valtio";

import DemoState1 from "../stores/DemoStateChicken1";
import DemoState2 from "../stores/DemoStateMan2";
import DemoState3 from "../stores/DemoStateWoman3";
import DemoState4 from "../stores/DemoStateMaster4";
import DemoState5 from "../stores/DemoStatePartner5";
import DemoStateKey from "../stores/DemoDataKey";
import arrayShuffle from 'array-shuffle';

const stateLikeKey = JSON.parse(DemoStateKey.nftLikes);
const stateData1 = JSON.parse(DemoState1.nftRepresentatives);
const stateData2 = JSON.parse(DemoState2.nftRepresentatives);
const stateData3 = JSON.parse(DemoState3.nftRepresentatives);
const stateData4 = JSON.parse(DemoState4.nftRepresentatives);
const stateData5 = JSON.parse(DemoState5.nftRepresentatives);
const stateDataKey = JSON.parse(DemoStateKey.nftRepresentatives);


//const
const createData = () => {
  const dataTempArray = [];
  const dataTempReturnArray = [];
  dataTempArray.push(...stateData1, ...stateData2, ...stateData3, ...stateData4, ...stateData5)

  for (let i = 0; i < stateDataKey.length; i++) {
    let dataTempMap = {};
    dataTempMap = dataTempArray[stateDataKey[i]];
    dataTempMap.idx = stateDataKey[i];
    dataTempMap.likes = stateLikeKey[i];
    dataTempReturnArray.push(dataTempMap);  
  }

  return dataTempReturnArray;
}


//----------------------------------------------------------
const getNftPageData = (merge, arr, st, ed) => {
  //console.log(st + "#" + ed)
  for (let i = st; i < stateDataKey.length; i++) {
    if(i < ed){
      arr.push(merge[stateDataKey[i]]);  
    }else{
      break;
    }
  }
  return arr;
}

const getNftRanData = (merge, arr, viewCnt) => {
  for (let i = 0; i < viewCnt; i++) {
    arr.push(merge[i]);
  }

  return arr;
}

const getNftItem = (merge, arr, idx) => {
  arr = merge.filter(x => x.idx === parseInt(idx))[0];
  return arr;
}

const getNftGroupItem = (merge, arr, gruop) => {
  return merge.filter(x => x.group === gruop);
}


const DemoStateMerge = {
  nftRecordPageCount : 12,
  nftPageStart : 0,
  nftPageEnd : 12,
  nftPage(pg){
    //random
    let dataTempPage = [];
    let mergeData = createData();
    //console.log(pg);
    
    if(pg > 1){
      this.nftPageStart = this.nftPageEnd;
      this.nftPageEnd = this.nftRecordPageCount * pg
    }else{
      this.nftPageStart = 0
      this.nftPageEnd = 12
    }
    return JSON.stringify(getNftPageData(mergeData, dataTempPage, this.nftPageStart, this.nftPageEnd)); 
  },
  nftRandom(viewCnt){
    let dataTempPage = [];
    let mergeData = arrayShuffle(createData());
    return JSON.stringify(getNftRanData(mergeData, dataTempPage, viewCnt)); 
  },
  nftGroupItem(group){
    let dataTempPage = [];
    let mergeData = createData();
    return JSON.stringify(getNftGroupItem(mergeData, dataTempPage, group)); 
  },
  nftItem(idx){
    let dataTempPage = [];
    let mergeData = createData();
    return JSON.stringify(getNftItem(mergeData, dataTempPage, idx)); 
  }
}

export default DemoStateMerge;
