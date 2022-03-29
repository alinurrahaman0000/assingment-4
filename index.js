// ........................................................Start Problem-1...................................................

function anaToVori (ana) {
    if (typeof ana != 'number') {
        return 'please give a number'
      }
      if (ana < 0) {
        return 'please give a positive number'
      }

    const vori = ana/16;
   return vori; 
}
const myAna = 64;
const vori= anaToVori(myAna);
console.log(vori);

// ........................................................Solve Problem-1 ........................................................


// ........................................................Start Problem-2..........................................................

function pandaCost(singgaraQuantity , samushaQuantity, jilapiQuantity) {
   if(typeof singgaraQuantity != 'number'|| typeof samushaQuantity != 'number' || typeof  jilapiQuantity  != 'number'){
       return 'please give a number'
   }
   if(singgaraQuantity < 0 || samushaQuantity < 0 || jilapiQuantity < 0){
       return 'please give a positive number'
   }

    const singgaratPrice= 7; 
    const samushaPrice= 10; 
    const jilapiPrice= 15; 

    const singgaratSalesQuantity = singgaraQuantity * singgaratPrice;
    const samushaSalesQuantity = samushaQuantity * samushaPrice;
    const jilapiSalesQuantity = jilapiQuantity * jilapiPrice;

    const subTotalOrder =singgaratSalesQuantity + samushaSalesQuantity + jilapiSalesQuantity;
    return subTotalOrder;
       } 
     const totalQuantity = pandaCost( 21 , 13 , 10);
     console.log(totalQuantity);

// ...........................................................Solve Problem-2.......................................................


//........................................................... Start Problem-3........................................................

function picnicBudget (men){
  const first100Men = 5000;
  const second10Mens = 4000;
  const third10Mens = 3000;
  if (men <= 100){
    const count = men * first100Men;
    return count;
  }
 else if (men <= 200){
   const first100 = 100* first100Men;
   const restMens = men - 100;
   const second100Mens = restMens *  second10Mens;
   const totlaTaka = first100 +second100Mens;
   return totlaTaka;
 }
else{
  const first100 = 100 * first100Men;
  const second100Mens = 100 *  second10Mens;
  const restMens = men - 200;
  const restMensTotal = restMens * third10Mens;
  const totalMens = first100 + second100Mens + restMensTotal;
  return totalMens;
}

}
 const  mans =picnicBudget (101)
 console.log(mans);


// ..............................Solve Problem-3...............................


// ...............................Start Problem-4...............................

 const friends =['abdullah', 'laboni' , 'ayshakhan', 'alinur rahaman','rabbi', 'alif', 'habibur', 'alaya', 'korim','monir'];
 function oddFriend(friends) {
     let myFriend ='';
     if(typeof (friends) != 'object'){
         return 'please give an object'
     }
     else{
         for (const friend of friends){
             if(friend.length == 5){
                 myFriend = friend;
                 break;
             }
         }
         return myFriend;
     }
 }
 const myPerfactFriend = oddFriend(friends);
 console.log(myPerfactFriend);

//  .................................Solve Problem-4..........................