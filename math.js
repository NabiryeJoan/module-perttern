// const add=(a,b)=>{
//     return a+b;

// };
// //module.exports=add;
// //here was a single patern where the module.exports=add..but when we brought in the 3rd patern the module.export had to have all the 
// const sub=(a,b)=>{
//    return a-b;
// };
// const mul=(a,b)=>{
//     return a*b;
//  };
// module.exports={
//     add,
//     sub,
//     mul,
// };
//this is the 4th perttern we actach modules to the function 
// module.exports.add=(a,b)=>{
//     return a+b;

// };

// module.exports.sub=(a,b)=>{
//    return a-b;
// };
// module.exports.mul=(a,b)=>{
//     return a*b;
//  };
//  module.exports.div=(a,b)=>{
//     return a/b;
//  };


//this is the 5th where we replace module.export with export and we use iife
exports.add=(a,b)=>{
    return a+b;

};

exports.sub=(a,b)=>{
   return a-b;
};
exports.mul=(a,b)=>{
    return a*b;
 };
exports.div=(a,b)=>{
    return a/b;
 };
// module.exports={
//     add,
//     sub,
//     mul,
//};