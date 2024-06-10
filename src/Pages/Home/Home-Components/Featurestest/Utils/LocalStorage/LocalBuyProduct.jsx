// import toast from "react-hot-toast";

import toast from "react-hot-toast";

export const getBuyInfo =()=>{
  const BuyData = JSON.parse(localStorage.getItem('Buydata')) || [];
  return BuyData;
}

export const saveBuyInfo =(info)=>{
  const BuyDatas = getBuyInfo();
    BuyDatas.push(info)
    localStorage.setItem('Buydata',JSON.stringify(BuyDatas))
   toast.success('Congratulation, Buy Done')
}
