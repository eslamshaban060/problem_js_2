// !!!!!!!!!!!!!!!!!!!!!!!!!!!! PROBLEM NUM 2 !!!!!!!!!!!!!!!!!!!!!!!!

// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript

// ==================== METHODE 1 =======================

// function flickSwitch(arr){
//     let result = []
//     let defult = true

//     // ======================== condition =======================
    
//     for(let j = 0 ; j < arr.length ; j++){
//         if(arr[j]==='flick'){
//             result.push(!defult)
//             defult = !defult
//         }else{
//             result.push(defult)
//         }
//     }

//     // ======================== condition =======================


//     return result;
// }

// ======================== METHODE 2 ======================

// function flickSwitch(arr){

//     let result = []
//     let defult = true

//     // ======================== condition ======================

//     arr.map((iteam) =>{
//         if(iteam === 'flick'){
//             result.push(!defult)
//             defult =!defult
//         }else{
//             result.push(defult)
//         }


//     })


//     // ======================== condition ======================


//     return (result) ;

// }

//  ========================== METHODE 3 =========================


// function flickSwitch(arr){
//     let result = [];
//     let doge = true;

//     // ===================== conditon ====================

//     arr.forEach(eslam => {
//         if(eslam  ===  'flick'){
//             result.push(!doge)
//             doge = (!doge)
//         }
//         else{
//             result.push(doge)
//         }

//     });


//     // ===================== conditon ====================

//     return (result) ;
// }

// console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']))




// ======================= MORE METHODE =====================

// 1- find

//  2- filter