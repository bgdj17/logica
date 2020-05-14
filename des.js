var rs = require("readline-sync")
var num = rs.questionInt("Digite o número")
var arr1 = [0,1,2,3,4,5,6,7,8,9]
var arr2 = [10,11,12,13,14,15,16,17,18,19,]
var arr3 = []
var arr4 =[]


for(var i=100; i<1000; i++){
    arr4.push(i)
}

for(var i=20; i<100;i++){
    arr3.push(i)
}


function verArr1(n){

  switch(n){
      case 0: return"zero" ; break;
      case 1: return"um"; break;
      case 2: return"dois"; break;
      case 3: return"três"; break;
      case 4: return"quatro"; break;
      case 5: return"cinco"; break;
      case 6: return"seis"; break;
      case 7: return"sete"; break;
      case 8: return"oito"; break;
      case 9: return"nove"
  }
}
  function verArr2(n){
    switch(n){
        case 10: return"dez" ; break;
        case 11: return"onze"; break;
        case 12: return"doze"; break;
        case 13: return"treze"; break;
        case 14: return"quatorze"; break;
        case 15: return"quinze"; break;
        case 16: return"dezesseis"; break;
        case 17: return"dezessete"; break;
        case 18: return"dezoito"; break;
        case 19: return"dezenove";
    }
} 

function verArr3(num){
    var n = num.toString()
    
    if(n[0]==2){
        for(var i= 1; i<10;i++){
            if(n[1]==i){
              return "vinte "+ verArr1(i)
          }
        }
    }
    if(n[0]==3){
      for(var i= 1; i<10;i++){
        if(n[1]==i){
          return "trinta "+ verArr1(i)
        }
      }
    }
    if(n[0]==4){
      for(var i= 1; i<10;i++){
      if(n[1]==i){
        return "quarenta "+ verArr1(i)
      }
    }
  }
    if(n[0]==5){
      for(var i= 1; i<10;i++){
      if(n[1]==i){
        return "cinquenta "+ verArr1(i)
      }
    }
  } 
    if(n[0]==6){
      for(var i= 1; i<10;i++){
        if(n[1]==i){
          return "sessenta "+ verArr1(i)
        }
      }
    } 
    if(n[0]==7){
      for(var i= 1; i<10;i++){
      if(n[1]==i){
        return "setenta "+ verArr1(i)
      }
    }
  }
    if(n[0]==8){
      for(var i= 1; i<10;i++){
        if(n[1]==i){
          return "oitenta "+ verArr1(i)
        }
      }
    } 
    if(n[0]==9){
      for(var i= 1; i<10;i++){
        if(n[1]==i){
          return "noventa "+ verArr1(i)
        }
      }
    } 
    
    }

    function verArr4(num){
      var n = num.toString()
      // 100 até 109
      if(n[0]==1){
        if(n[1]==0 && n[2]==0){
             return "cem"
        }
        else if(n[1]== 0){ 
          for(var i= 1; i< 10; i++){
              if(n[2]== i){
              return "cento e "+ verArr1(i)
             }
          }}
                  else if(n[1]!== 0){ 
              var juntar= n[1] + n[2]
              if(juntar <= 19)
              for(var i=10; i<20; i++){
                  if(juntar == i){
                    return "cento e " + verArr2(i)
                  }
                
                
              }
            }
 
          }}     
          
      
      
// 0 a 9
if(arr1.includes(num)){
  console.log(verArr1(num))  }
// 10 a 19
else if(arr2.includes(num)){
    console.log(verArr2(num))}
// 20 a 99    
 if(arr3.includes(num)){
   console.log(verArr3(num))
 }
//  100 a 999
if(arr4.includes(num)){
  console.log(verArr4(num))
}