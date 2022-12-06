import { proxy } from "valtio";

import DemoState1 from "../stores/DemoStateChicken1";
import DemoState2 from "../stores/DemoStateMan2";
import DemoState3 from "../stores/DemoStateWoman3";
import DemoState4 from "../stores/DemoStateMaster4";
import DemoState5 from "../stores/DemoStatePartner5";
import DemoStateKey from "../stores/DemoDataKey";
import arrayShuffle from 'array-shuffle';


const state1 = proxy(DemoState1);
const state2 = proxy(DemoState2);
const state3 = proxy(DemoState3);
const state4 = proxy(DemoState4);
const state5 = proxy(DemoState5);
const stateKey = proxy(DemoStateKey);
const stateData1 = JSON.parse(state1.nftRepresentatives);
const stateData2 = JSON.parse(state2.nftRepresentatives);
const stateData3 = JSON.parse(state3.nftRepresentatives);
const stateData4 = JSON.parse(state4.nftRepresentatives);
const stateData5 = JSON.parse(state5.nftRepresentatives);
const stateDataKey = JSON.parse(stateKey.nftRepresentatives);

const createData = function(){
  const dataTempArray = [];
  const dataTempReturnArray = [];
  for (let i = 0; i < stateData1.length; i++) {
    dataTempArray.push(stateData1[i]);
  }

  for (let i = 0; i < stateData2.length; i++) {
    dataTempArray.push(stateData2[i]);
  }

  for (let i = 0; i < stateData3.length; i++) {
    dataTempArray.push(stateData3[i]);
  }

  for (let i = 0; i < stateData4.length; i++) {
    dataTempArray.push(stateData4[i]);
  }

  for (let i = 0; i < stateData5.length; i++) {
    dataTempArray.push(stateData5[i]);
  }

  for (let i = 0; i < stateDataKey.length; i++) {
    let dataTempMap = {};
    dataTempMap = dataTempArray[stateDataKey[i]];
    dataTempMap.idx = stateDataKey[i];
    dataTempReturnArray.push(dataTempMap);  
  }

  return dataTempReturnArray;
}


//----------------------------------------------------------
const getNftData = function(merge, arr, pg){
  for (let i = 0; i < stateDataKey.length; i++) {
    if(i < pg){
      //console.log(i);
      arr.push(merge[stateDataKey[i]]);  
    }else{
      break;
    }
  }

  return arr;
}

const getNftRanData = function(merge, arr, viewCnt){
  for (let i = 0; i < viewCnt; i++) {
    //console.log("random : " + Math.floor(Math.random() * merge.length));
    arr.push(merge[i]);
  }

  return arr;
}

const getNftItem = function(merge, arr, idx){
  //for (let i = 0; i < viewCnt; i++) {
    //console.log("random : " + Math.floor(Math.random() * merge.length));
    arr.push(merge[idx]);
  //}

  return arr;
}


const DemoStateMerge = {
  //nftRepresentatives: JSON.stringify(dataTempReturnArray),
  nftRecordPageCount : 12,
  nftPage(pg){
    let dataTempPage = [];
    let mergeData = createData();
    this.nftRecordPageCount = this.nftRecordPageCount * pg
    return JSON.stringify(getNftData(mergeData, dataTempPage, this.nftRecordPageCount)); 
  },
  nftRandom(viewCnt){
    let dataTempPage = [];
    let mergeData = arrayShuffle(createData());
    return JSON.stringify(getNftRanData(mergeData, dataTempPage, viewCnt)); 
  },
  nftItem(idx){
    let dataTempPage = [];
    let mergeData = createData();
    return JSON.stringify(getNftItem(mergeData, dataTempPage, idx)); 
  }
}

export default DemoStateMerge;
