var rs = require("readline-sync")
var num = rs.questionInt("Digite o número")
var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19,]
var arr3 = []
var arr4 = []
var arr5 = []

for (var i = 1000; i < 10000; i++) {
  arr5.push(i)
}
for (var i = 100; i < 1000; i++) {
  arr4.push(i)
}

for (var i = 20; i < 100; i++) {
  arr3.push(i)
}


function verArr1(num) {
  var n = num.toString()
  switch (n) {
    case '0': return "zero"; break;
    case '1': return "um"; break;
    case '2': return "dois"; break;
    case '3': return "três"; break;
    case '4': return "quatro"; break;
    case '5': return "cinco"; break;
    case '6': return "seis"; break;
    case '7': return "sete"; break;
    case '8': return "oito"; break;
    case '9': return "nove"
  }
}
function verArr2(num) {
  var n = num.toString()
  switch (n) {
    case '10': return "dez"; break;
    case '11': return "onze"; break;
    case '12': return "doze"; break;
    case '13': return "treze"; break;
    case '14': return "quatorze"; break;
    case '15': return "quinze"; break;
    case '16': return "dezesseis"; break;
    case '17': return "dezessete"; break;
    case '18': return "dezoito"; break;
    case '19': return "dezenove";
  }
}

function verArr3(num) {
  var n = num.toString()

  if (n[0] == 2) {
    if (n[1] == 0) {
      return "Vinte"
    }
    if (n[1] !== 0) {
      return "vinte e " + verArr1(n[1])
    }
  }
  if (n[0] == 3) {
    if (n[1] == 0) {
      return "trinta"
    }
    if (n[1] !== 0) {
      return "trinta e " + verArr1(n[1])
    }
  }
  if (n[0] == 4) {
    if (n[1] == 0) {
      return "quarenta"
    }
    if (n[1] !== 0) {
      return "quarenta e " + verArr1(n[1])
    }
  }

  if (n[0] == 5) {
    if (n[1] == 0) {
      return "cinquenta"
    }
    if (n[1] !== 0) {
      return "cinquenta e " + verArr1(n[1])
    }
  }
  if (n[0] == 6) {
    if (n[1] == 0) {
      return "sessenta"
    }
    if (n[1] !== 0) {
      return "sessenta e " + verArr1(n[1])
    }
  }
  if (n[0] == 7) {
    if (n[1] == 0) {
      return "setenta"
    }
    if (n[1] !== 0) {

      return "setenta e " + verArr1(n[1])
    }
  }

  if (n[0] == 8) {
    if (n[1] == 0) {
      return "oitenta"
    }
    if (n[1] !== 0) {
      return "oitenta e " + verArr1(n[1])
    }
  }
  if (n[0] == 9) {
    if (n[1] == 0) {
      return "noventa"
    }
    if (n[1] !== 0) {
      return "noventa e " + verArr1(n[1])
    }
  }

}

function verArr4(num) {
  var n = num.toString()

  var juntar = n[1] + n[2]
  // 100
  if (n[0] == 1) {
    if (n[1] == 0 && n[2] == 0) {
      return "duzentos"
    }
    else if (n[1] == 0) {
      if (n[2] > 0 && n[2] < 10) {
        return "cento e " + verArr1(n[2])
      }
    }
    else if (n[1] !== 0) {
      if (juntar >= 10 && juntar < 20) {
        return "cento e " + verArr2(juntar)
      }

      else if (juntar >= 20 && juntar < 100) {
        return "cento e " + verArr3(juntar)
      }
    }
  }
  // 200
  if (n[0] == 2) {
    if (n[1] == 0 && n[2] == 0) {
      return "duzentos"
    }
    else if (n[1] == 0) {
      if (n[2] > 0 && n[2] < 10) {
        return "duzentos e " + verArr1(n[2])
      }
    }
    else if (n[1] !== 0) {
      if (juntar >= 10 && juntar < 20) {
        return "duzentos e " + verArr2(juntar)
      }
      else if (juntar >= 20 && juntar < 100) {
        return "duzentos e " + verArr3(juntar)
      }
    }
  }
  // 300
  if (n[0] == 2) {
    if (n[1] == 0 && n[2] == 0) {
      return "trezentos"
    }
    else if (n[1] == 0) {
      if (n[2] > 0 && n[2] < 10) {
        return "trezentos e " + verArr1(n[2])
      }
    }
    else if (n[1] !== 0) {
      if (juntar >= 10 && juntar < 20) {
        return "trezentos e " + verArr2(juntar)
      }
      else if (juntar >= 20 && juntar < 100) {
        return "trezentos e " + verArr3(juntar)
      }
    }
  }
  // 400
  if (n[0] == 4) {
    if (n[1] == 0 && n[2] == 0) {
      return "quatrocentos"
    }
    else if (n[1] == 0) {
      if (n[2] > 0 && n[2] < 10) {
        return "quatrocentos e " + verArr1(n[2])
      }
    }
    else if (n[1] !== 0) {
      if (juntar >= 10 && juntar < 20) {
        return "quatrocentos e " + verArr2(juntar)
      }
      else if (juntar >= 20 && juntar < 100) {
        return "quatrocentos e " + verArr3(juntar)
      }
    }
  }
  // 500
  if (n[0] == 5) {
    if (n[1] == 0 && n[2] == 0) {
      return "quinhentos"
    }
    else if (n[1] == 0) {
      if (n[2] > 0 && n[2] < 10) {
        return "quinhentos e " + verArr1(n[2])
      }
    }
    else if (n[1] !== 0) {
      if (juntar >= 10 && juntar < 20) {
        return "quinhentos e " + verArr2(juntar)
      }
      else if (juntar >= 20 && juntar < 100) {
        return "quinhentos e " + verArr3(juntar)
      }
    }
  }
  // 600
  if (n[0] == 6) {
    if (n[1] == 0 && n[2] == 0) {
      return "seiscentos"
    }
    else if (n[1] == 0) {
      if (n[2] > 0 && n[2] < 10) {
        return "seiscentos e " + verArr1(n[2])
      }
    }
    else if (n[1] !== 0) {
      if (juntar >= 10 && juntar < 20) {
        return "seiscentos e " + verArr2(juntar)
      }
      else if (juntar >= 20 && juntar < 100) {
        return "seiscentos e " + verArr3(juntar)
      }
    }
  }
  // 700
  if (n[0] == 7) {
    if (n[1] == 0 && n[2] == 0) {
      return "setessentos"
    }
    else if (n[1] == 0) {
      if (n[2] > 0 && n[2] < 10) {
        return "setessentos e " + verArr1(n[2])
      }
    }
    else if (n[1] !== 0) {
      if (juntar >= 10 && juntar < 20) {
        return "setessentos e " + verArr2(juntar)
      }
      else if (juntar >= 20 && juntar < 100) {
        return "setessentos e " + verArr3(juntar)
      }
    }
  }
  // 800
  if (n[0] == 8) {
    if (n[1] == 0 && n[2] == 0) {
      return "oitocentos"
    }
    else if (n[1] == 0) {
      if (n[2] > 0 && n[2] < 10) {
        return "oitocentos e " + verArr1(n[2])
      }
    }
    else if (n[1] !== 0) {
      if (juntar >= 10 && juntar < 20) {
        return "oitocentos e " + verArr2(juntar)
      }
      else if (juntar >= 20 && juntar < 100) {
        return "oitocentos e " + verArr3(juntar)
      }
    }
  }
  // 900
  if (n[0] == 9) {
    if (n[1] == 0 && n[2] == 0) {
      return "novecentos"
    }
    else if (n[1] == 0) {
      if (n[2] > 0 && n[2] < 10) {
        return "novecentos e " + verArr1(n[2])
      }
    }
    else if (n[1] !== 0) {
      if (juntar >= 10 && juntar < 20) {
        return "novecentos e " + verArr2(juntar)
      }
      else if (juntar >= 20 && juntar < 100) {
        return "novecentos e " + verArr3(juntar)
      }
    }
  }
}
function verArr5() {
  var n = num.toString()
  var juntar2 = n[2] + n[3]
  var juntar3 =n[1]+n[2]+n[3]
  
  
  // 1000
  if (n[0] == 1) {
    if (n[1] == 0 && n[2] == 0){
      if(n[3] == 0) {
      return "mil"
      }        
      if (n[3] < 10) {
          return "mil e " + verArr1(n[3])
        }
      }
    }
      if (n[1] == 0 && n[2] !== 0){
       if (juntar2 >= 10 && juntar2 < 20) {
        return "mil e " + verArr2(juntar2)
      } //112
        else if (juntar2 >= 20 && juntar2 < 100) {
        return "mil e " + verArr3(juntar2)
        }
      }
      if (n[1] !== 0 && n[2] !== 0){
       if (juntar3>= 100 && juntar3< 2000) {
        return "mil e " + verArr4(juntar3)
    
        }
}

  // 2000
  if (n[0] == 2) {
    if (n[1] == 0 && n[2] == 0){
      if(n[3] == 0) {
      return "dois mil"
      }        
      if (n[3] < 10) {
          return "dois mil e " + verArr1(n[3])
        }
      }
    }
      if (n[1] == 0 && n[2] !== 0){
       if (juntar2 >= 10 && juntar2 < 20) {
        return "dois mil e " + verArr2(juntar2)
      } 
        else if (juntar2 >= 20 && juntar2 < 100) {
        return "dois mil e " + verArr3(juntar2)
        }
      }
      if (n[1] !== 0 && n[2] !== 0){
       if (juntar3>= 100 && juntar3< 2000) {
        return "dois mil e " + verArr4(juntar3)
    
        }
}

  // 3000
  if (n[0] == 3) {
    if (n[1] == 0 && n[2] == 0){
      if(n[3] == 3) {
      return "três mil"
      }        
      if (n[3] < 10) {
          return "três mil e " + verArr1(n[3])
        }
      }
    }
      if (n[1] == 0 && n[2] !== 0){
       if (juntar2 >= 10 && juntar2 < 20) {
        return "três mil e " + verArr2(juntar2)
      } //112
        else if (juntar2 >= 20 && juntar2 < 100) {
        return "três mil e " + verArr3(juntar2)
        }
      }
      if (n[1] !== 0 && n[2] !== 0){
       if (juntar3>= 100 && juntar3< 2000) {
        return "três mil e " + verArr4(juntar3)
    
        }
}

  // 4000
  if (n[0] == 4) {
    if (n[1] == 0 && n[2] == 0){
      if(n[3] == 0) {
      return "quatro mil"
      }        
      if (n[3] < 10) {
          return "quatro mil e " + verArr1(n[3])
        }
      }
    }
      if (n[1] == 0 && n[2] !== 0){
       if (juntar2 >= 10 && juntar2 < 20) {
        return "quatro mil e " + verArr2(juntar2)
      } //112
        else if (juntar2 >= 20 && juntar2 < 100) {
        return "quatro mil e " + verArr3(juntar2)
        }
      }
      if (n[1] !== 0 && n[2] !== 0){
       if (juntar3>= 100 && juntar3< 2000) {
        return "quatro mil e " + verArr4(juntar3)
    
        }
}

  // 5000
  if (n[0] == 5) {
    if (n[1] == 0 && n[2] == 0){
      if(n[3] == 0) {
      return "cinco mil"
      }        
      if (n[3] < 10) {
          return "cinco mil e " + verArr1(n[3])
        }
      }
    }
      if (n[1] == 0 && n[2] !== 0){
       if (juntar2 >= 10 && juntar2 < 20) {
        return "cinco mil e " + verArr2(juntar2)
      } 
        else if (juntar2 >= 20 && juntar2 < 100) {
        return "cinco mil e " + verArr3(juntar2)
        }
      }
      if (n[1] !== 0 && n[2] !== 0){
       if (juntar3>= 100 && juntar3< 2000) {
        return "cinco mil e " + verArr4(juntar3)
    
        }
}

  // 6000
  if (n[0] == 6) {
    if (n[1] == 0 && n[2] == 0){
      if(n[3] == 0) {
      return "seis mil"
      }        
      if (n[3] < 10) {
          return "seis mil e " + verArr1(n[3])
        }
      }
    }
      if (n[1] == 0 && n[2] !== 0){
       if (juntar2 >= 10 && juntar2 < 20) {
        return "seis mil e " + verArr2(juntar2)
      } 
        else if (juntar2 >= 20 && juntar2 < 100) {
        return "seis mil e " + verArr3(juntar2)
        }
      }
      if (n[1] !== 0 && n[2] !== 0){
       if (juntar3>= 100 && juntar3< 2000) {
        return "seis mil e " + verArr4(juntar3)
    
        }
}

  // 7000
  if (n[0] == 7) {
    if (n[1] == 0 && n[2] == 0){
      if(n[3] == 0) {
      return "sete mil"
      }        
      if (n[3] < 10) {
          return "sete mil e " + verArr1(n[3])
        }
      }
    }
      if (n[1] == 0 && n[2] !== 0){
       if (juntar2 >= 10 && juntar2 < 20) {
        return "sete mil e " + verArr2(juntar2)
      } //112
        else if (juntar2 >= 20 && juntar2 < 100) {
        return "sete mil e " + verArr3(juntar2)
        }
      }
      if (n[1] !== 0 && n[2] !== 0){
       if (juntar3>= 100 && juntar3< 2000) {
        return "sete mil e " + verArr4(juntar3)
    
        }
}

  // 8000
  if (n[0] == 8) {
    if (n[1] == 0 && n[2] == 0){
      if(n[3] == 0) {
      return "oito mil"
      }        
      if (n[3] < 10) {
          return "oito mil e " + verArr1(n[3])
        }
      }
    }
      if (n[1] == 0 && n[2] !== 0){
       if (juntar2 >= 10 && juntar2 < 20) {
        return "oito mil e " + verArr2(juntar2)
      } //112
        else if (juntar2 >= 20 && juntar2 < 100) {
        return "oito mil e " + verArr3(juntar2)
        }
      }
      if (n[1] !== 0 && n[2] !== 0){
       if (juntar3>= 100 && juntar3< 2000) {
        return "oito mil e " + verArr4(juntar3)
    
        }
}

  // 9000
  if (n[0] == 9) {
    if (n[1] == 0 && n[2] == 0){
      if(n[3] == 0) {
      return "nove mil"
      }        
      if (n[3] < 10) {
          return "nove mil e " + verArr1(n[3])
        }
      }
    }
      if (n[1] == 0 && n[2] !== 0){
       if (juntar2 >= 10 && juntar2 < 20) {
        return "nove mil e " + verArr2(juntar2)
      } //112
        else if (juntar2 >= 20 && juntar2 < 100) {
        return "nove mil e " + verArr3(juntar2)
        }
      }
      if (n[1] !== 0 && n[2] !== 0){
       if (juntar3>= 100 && juntar3< 2000) {
        return "nove mil e " + verArr4(juntar3)
    
        }
}
}
// 0 a 9
if (arr1.includes(num)) {
  console.log(verArr1(num))
}
// 10 a 19
else if (arr2.includes(num)) {
  console.log(verArr2(num))
}
// 20 a 99    
if (arr3.includes(num)) {
  console.log(verArr3(num))
}
//  100 a 999
if (arr4.includes(num)) {
  console.log(verArr4(num))
}
//  1000 a 9999
if (arr5.includes(num)) {
  console.log(verArr5(num))
}