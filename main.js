// ============
// 1-masala:
//  Berilgan ikkita sonning har biri musbat ekanligini aniqlang.
let firstNumber1 = +prompt("son kriting");
let secondNumber1 = +prompt("son kriting");
if (firstNumber1 > 0 && secondNumber1 > 0) {
  console.log(true);
}
// ============
// 2-masala:
//  Uchta son berilgan. Ulardan hech bo'lmaganda bittasi manfiy bo'lishi mumkinmi?
let firstNumber2 = +prompt("son kriting");
let secondNumber2 = +prompt("son kriting");
let thirdNumber2 = +prompt("son kriting");
if (firstNumber2 < 0 || secondNumber2 < 0 || thirdNumber2 < 0) {
  console.log(true);
}

// ============
// 3-masala:
//  Berilgan son juft va musbatmi?
let firstNumber3 = +prompt("son kriting");
if (firstNumber3 > 0 && firstNumber3 % 2 == 0) {
  console.log(true);
}

// ============
// 4-masala:
//  Ikki sonning yig'indisi ularning ko'paytmasidan katta ekanligini tekshiring.
let firstNumber4 = +prompt("son kriting");
let secondNumber4 = +prompt("son kriting");
let sum4 = firstNumber4 + secondNumber4;
let multi4 = firstNumber4 * secondNumber4;
if (sum4 > multi4) {
  console.log(true);
}
// ============
// 5-masala:
//  Berilgan son 100 dan katta va 999 dan kichik ekanligini aniqlang.
let firstNumber5 = +prompt("son kriting");
if (firstNumber5 > 100 && firstNumber5 < 999) {
  console.log(true);
}
// ============
// 6-masala:
//  Uchta sonning yig'indisi musbat ekanligini tekshiring.
let firstNumber6 = +prompt("son kriting");
let secondNumber6 = +prompt("son kriting");
let thirdNumber6 = +prompt("son kriting");
let sum6 = firstNumber6 + secondNumber6 + thirdNumber6;
if (sum6 > 0) {
  console.log(6);
}

// ============
// 7-masala:
// Berilgan ikkita sonning biri 0 bo'lmasligini tekshiring.
let firstNumber7 = +prompt("son kriting");
let secondNumber7 = +prompt("son kriting");
if (firstNumber7 != 0 && secondNumber7 != 0) {
  console.log(true);
}
// ============
// 8-masala:
//  Ikki sonning ko'paytmasi musbat va ularning ayirmasi manfiy ekanligini aniqlang.
let firstNumber8 = +prompt("son kriting");
let secondNumber8 = +prompt("son kriting");
let multi8 = firstNumber8 * secondNumber8;
let minus8 = firstNumber8 - secondNumber8;
if (multi8 < 0 && minus8 < 0) {
  console.log(true);
}

// ============
// 9-masala:
//  Berilgan son ikki xonali musbat sonmi?
let firstNumber9 = +prompt("son kriting");
if (firstNumber9 > 9 && firstNumber9 < 100) {
  console.log(true);
}

// ============
// 10-masala:
//  Berilgan son juft va 5 ga karrali ekanligini tekshiring.
let firstNumber10 = +prompt("son kriting");
if (firstNumber10 % 2 == 0 && firstNumber10 % 5 == 0) {
  console.log(true);
}
// ============
// 11-masala:
//  Uchta sonning hech bo'lmaganda ikkitasi teng ekanligini aniqlang.
let firstNumber11 = +prompt("son kriting");
let secondNumber11 = +prompt("son kriting");
let thirdNumber11 = +prompt("son kriting");
if (
  firstNumber11 == secondNumber11 ||
  firstNumber11 == thirdNumber11 ||
  secondNumber11 == thirdNumber11
) {
  console.log(true);
}

// ============
// 12-masala:
//  Berilgan son 7 ga bo'linadi va 3 ga bo'linmaydimi?
let firstNumber12 = +prompt("son kriting");
if (firstNumber12 % 7 == 0 && firstNumber12 % 3 == 0) {
  console.log(true);
}

// ============
// 13-masala:
//  Ikkita sonning biri 0 yoki ikkalasi ham manfiy ekanligini tekshiring.
let firstNumber13 = +prompt("son kriting");
let secondNumber13 = +prompt("son kriting");
if (
  firstNumber13 == 0 ||
  secondNumber13 == 0 ||
  (firstNumber13 > 0 && secondNumber13 > 0)
) {
  console.log(true);
}

// ============
// 14-masala:
//  Uchta sonning eng kattasi musbat ekanligini aniqlang.
let firstNumber14 = +prompt("son kriting");
let secondNumber14 = +prompt("son kriting");
let thirdNumber14 = +prompt("son kriting");
let bigNumber14;
if (firstNumber14 > secondNumber14) {
  bigNumber14 == firstNumber14;
} else {
  bigNumber14 == secondNumber14;
}
if (bigNumber14 > thirdNumber14) {
} else {
  bigNumber14 == thirdNumber14;
}
// ============
// 15-masala:
//  Berilgan son 10 va 20 orasida emasligini aniqlang.
let firstNumber15 = +prompt("son kriting");
if (firstNumber15 > 10 && firstNumber15 < 25) {
  console.log(false);
}

// ============
// 16-masala:
//  Ikkita sonning yig'indisi manfiy yoki ularning ko'paytmasi musbat ekanligini tekshiring.
let firstNumber16 = +prompt("son kriting");
let secondNumber16 = +prompt("son kriting");
let sum16 = firstNumber16 + secondNumber16;
let multi16 = firstNumber16 + secondNumber16;
if (sum16 < 0 || multi16 > 0) {
  console.log(true);
}
// ============
// 17-masala:
//  Uchta sonning eng kichigi juft ekanligini aniqlang.
let firstNumber17 = +prompt("son kriting");
let secondNumber17 = +prompt("son kriting");
let thirdNumber17 = +prompt("son kriting");
let minNumber17;
if (firstNumber17 > secondNumber17) {
  minNumber17 == firstNumber17;
} else {
  minNumber17 == secondNumber17;
}
if (minNumber17 > thirdNumber17) {
} else {
  minNumber17 == thirdNumber17;
}
if (minNumber17 % 2 == 0) {
  console.log(true);
}
// ============
// 18-masala:
//  Berilgan sonning oxirgi raqami 5 yoki 0 ekanligini tekshiring.
let firstNumber18 = +prompt("son kriting");
if (firstNumber18 % 10 == 5 || firstNumber18 % 10 == 0) {
  console.log(true);
}

// ============
// 19-masala:
//  Ikki sonning biri musbat va ikkinchisi manfiy ekanligini aniqlang.
let firstNumber19 = +prompt("son kriting");
let secondNumber19 = +prompt("son kriting");
if (
  (firstNumber19 < 0 && secondNumber19 > 0) ||
  (firstNumber19 > 0 && secondNumber19 < 0)
) {
  console.log(true);
}
// ============
// 20-masala:
//  Uchta sonning hech bo'lmaganda bittasi juft ekanligini tekshiring.
let firstNumber20 = +prompt("son kriting");
let secondNumber20 = +prompt("son kriting");
let thirdNumber20 = +prompt("son kriting");
if (
  firstNumber20 % 2 == 0 ||
  secondNumber20 % 2 == 0 ||
  thirdNumber20 % 2 == 0
) {
  console.log(true);
}
// ============
// 21-masala:
//  Berilgan sonning raqamlari yig'indisi 10 dan katta ekanligini aniqlang. (ixtiyoriy)
let firstNumber21 = +prompt("son kriting");
let firstNum21 = 0;
let secondNum21 = 0;
let thirdNum21 = 0;
if (firstNumber21 > 9 && firstNumber21 < 100) {
  firstNum21 = firstNumber21 % 10;
  secondNum21 = firstNumber21 / 10 - firstNum21 * 0.1;
} else if (firstNumber21 > 99 && firstNumber21 < 1000) {
  firstNum21 = firstNumber21 % 10;
  secondNum21 = ((firstNumber21 % 100) - firstNum21) / 10;
  thirdNum21 = firstNumber21 / 100 - firstNum21 * 0.01 - secondNum21 * 0.1;
}
console.log(firstNum21 + secondNum21 + thirdNum21);

// ============
// 22-masala:
//  Berilgan ikki sonning biri ikkinchisiga karrali ekanligini tekshiring.
let firstNumber22 = +prompt("son kriting");
let secondNumber22 = +prompt("son kriting");
if (firstNumber22 % secondNumber22 == 0) {
  console.log(true);
}

// ============
// 23-masala:
//  Uchta sonning yig'indisi 0 yoki ko'paytmasi manfiy ekanligini aniqlang.
let firstNumber23 = +prompt("son kriting");
let secondNumber23 = +prompt("son kriting");
let thirdNumber23 = +prompt("son kriting");
let sum23 = firstNumber23 + secondNumber23 + thirdNumber23;
let multi23 = firstNumber23 * secondNumber23 * thirdNumber23;
if (sum23 == 0 || multi23 < 0) {
  console.log(true);
}
// ============
// 24-masala:
//  /Berilgan son 3 ga va 4 ga bo'linadi, lekin 12 ga bo'linmaydimi? (Misol mantiqan xato)
console.log(true);

// ============
// 25-masala:
//  Ikki sonning biri toq va ikkinchisi juft ekanligini aniqlang.
let firstNumber25 = +prompt("son kriting");
let secondNumber25 = +prompt("son kriting");
if (
  (firstNumber25 % 2 == 0 && secondNumber25 == 0) ||
  (firstNumber25 % 2 != 0 && secondNumber25 % 2 != 0)
) {
  console.log(false);
} else {
  if (firstNumber25 % 2 == 0) {
    console.log("birinchi son juft");
  } else {
    console.log("birinchi son toq");
  }

  if (secondNumber25 % 2 == 0) {
    console.log("ikkinchi son juft");
  } else {
    console.log("ikkinchi son toq");
  }
}
// ============
// 26-masala:
//  Berilgan son musbat va uch xonali emasligini aniqlang.
let firstNumber26 = +prompt("son kriting");
if (firstNumber26 > 0 && firstNumber26 < 100) {
  console.log(true);
}

// ============
// 27-masala:
//  Uchta sonning yig'indisi 100 dan katta yoki ko'paytmasi manfiy ekanligini tekshiring.
let firstNumber27 = +prompt("son kriting");
let secondNumber27 = +prompt("son kriting");
let thirdNumber27 = +prompt("son kriting");
let sum27 = firstNumber27 + secondNumber27 + thirdNumber27;
let multi27 = firstNumber27 * secondNumber27 * thirdNumber27;
if (sum27 > 100 || multi27 > 0) {
  console.log(true);
}
// ============
// 28-masala:
//  Ikki sonning biri 10 dan katta va ikkinchisi 0 dan kichik ekanligini aniqlang.
let firstNumber28 = +prompt("son kriting");
let secondNumber28 = +prompt("son kriting");
if (firstNumber28 > 10 && secondNumber28 < 0) {
  console.log(true);
} else if (firstNumber28 < 10 && secondNumber28 > 0) {
  console.log(true);
} else {
  console.log(false);
}
// ============
// 29-masala:
//  Berilgan son toq va musbatmi?
let firstNumber29 = +prompt("son kriting");

if (firstNumber29 % 2 == 1 && firstNumber29 > 0) {
  console.log(true);
}

// ============
// 30-masala:
// Ikki sonning hech bo'lmaganda bittasi musbat ekanligini tekshiring.
let firstNumber30 = +prompt("son kriting");
let secondNumber30 = +prompt("son kriting");
if (firstNumber30 > 0 || secondNumber30 > 0){}
  // ============
  // 31-masala:
  // Berilgan son juft va 4 ga karrali, lekin 8 ga karrali emasligini aniqlang.
  let firstNumber31 = +prompt("son kriting");
if (
  firstNumber31 % 2 == 0 &&
  firstNumber31 % 4 == 0 &&
  firstNumber31 % 8 != 0
) {
  console.log(true);
}

// ============
// 32-masala:
//  Uchta sonning faqat bittasi manfiy ekanligini tekshiring.
let firstNumber32 = +prompt("son kriting");
let secondNumber32 = +prompt("son kriting");
let thirdNumber32 = +prompt("son kriting");
if(firstNumber32 > 0 && secondNumber32 > 0 && thirdNumber32 < 0){
}else if(firstNumber32 > 0 && secondNumber32 < 0 && thirdNumber32 > 0){ 
}else if((firstNumber32 < 0 && secondNumber32 > 0 && thirdNumber32 > 0)){}
// ============
// 33-masala:
//  Berilgan son 2 ga va 5 ga bo'linadi, lekin 10 ga bo'linmaydimi? (masala mantiqan xato)

// ============
// 34-masala:
//  Ikkita sonning yig'indisi ularning farqidan katta ekanligini aniqlang.
let firstNumber34 = +prompt("son kriting");
let secondNumber34 = +prompt("son kriting");
const sum34 = firstNumber34 + secondNumber34
const diff = firstNumber34 - secondNumber34
if(sum34 > diff){}
// ============
// 35-masala:
// Berilgan son 0 dan katta va 1000 dan kichik ekanligini tekshiring.
let firstNumber35 = +prompt("son kriting");
if(firstNumber35 > 0 && firstNumber35 < 1000){}
// ============
// 36-masala:
//  Ikki sonning biri juft va ularning ko'paytmasi 20 dan katta ekanligini aniqlang.
let firstNumber36 = +prompt("son kriting");
let secondNumber36 = +prompt("son kriting");
const multi36 = firstNumber36 * secondNumber36
if(firstNumber36 % 2 == 0 && secondNumber36 % 2 != 0 && multi36 > 20){

}else if(firstNumber36 % 2 != 0 && secondNumber36 % 2 !=0 && multi36 > 20){}
// ============
// 37-masala:
// Uchta sonning hech bo'lmaganda bittasi 10 ga bo'linadi ekanligini tekshiring.
let firstNumber37 = +prompt("son kriting");
let secondNumber37 = +prompt("son kriting");
let thirdNumber37 = +prompt("son kriting");
if(firstNumber37 % 2 ==0 || secondNumber37 % 10 == 0 || thirdNumber37 % 10 == 0){
}
// ============
// 38-masala:
//  Berilgan son 4 ga karrali va toq emasligini aniqlang.
let firstNumber38 = +prompt("son kriting");
if(firstNumber38 % 4 == 0){}
// ============
// 39-masala:
//  Uchta sonning ikkitasining yig'indisi uchinchisidan katta ekanligini tekshiring.
let firstNumber39 = +prompt("son kriting");
let secondNumber39 = +prompt("son kriting");
let thirdNumber39 = +prompt("son kriting");
const firstSum = firstNumber39 + secondNumber39
const secondSum = firstNumber39 + thirdNumber39
const thirdSum = secondNumber39 + thirdNumber39
if(firstSum > thirdNumber39){}
if(secondSum > secondNumber39){}
if(thirdSum > firstNumber39){}

// ============
// 40-masala:
//  Ikki sonning biri musbat, biri manfiy va ularning ko'paytmasi musbat ekanligini tekshiring. (masala mantiqan xato)

let firstNumber40 = +prompt("son kriting");
let secondNumber40 = +prompt("son kriting");

// ============
// 41-masala:
// 
let a41
let b41
let c41
if(a41 <= b41 && b41 <= c41){
    console.log(true)
} else {
    console.log(false)
}

// ============
// 42-masala:
// 
let a42
let b42
let c42
if(a42 < b42 && b42 < c42){
    console.log(true)
} else {
    console.log(false)
}
// ============
// 43-masala:
// 
let a43
let b43
if(a43 % 2 ==0 && b43 % 2 ==0){
    console.log(true)
} else {
    console.log(false)
}
// ============
// 44-masala:
// 
let a44
let b44
if(a44 % 2 !=0 || b44 % 2 !=0){
    console.log(true)
} else {
    console.log(false)
}
// ============
// 45-masala:
// 
let a45
let b45
if(a45 % 2 !=0 && b45 % 2 ==0){
    console.log(true)
}else if(a45 % 2 ==0 && b45 % 2 !=0){
    console.log(true)
} else {
    console.log(false)
}
// ============
// 46-masala:
// 
let a46
let b46
if(a46 % 2 == 0 && b46 % 2 ==0){
    console.log(true)
}else if(a46 % 2 !=0 && b46 % 2 !=0){
    console.log(true)
} else {
    console.log(false)
}
// ============
// 47-masala:
// 
let a47
let b47
let c47
if(a47 > 0 && b47 > 0 && c47 > 0){
    console.log(true)
} else {
    console.log(false)
}
// ============
// 48-masala:
// 
let a48
let b48
let c48
if(a48 > 0 || b48 > 0 || c48 > 0){
    console.log(true)
} else {
    console.log(false)
}
// ============
// 49-masala:
// 
let a49
let b49
let c49
if(a49 > 0 && b49 < 0 && c49 < 0){
    console.log(true)
} else if(a49 < 0 && b49 < 0 && c49 > 0){
    console.log(true)
} else if(a49 < 0 && b49 > 0 && c49 < 0){
    console.log(true)
} else {
    console.log(false)
}
// ============
// 50-masala:
// 
let a50
let b50
let c50
if(a50> 0 && b50 < 0 && c50 > 0){
    console.log(true)
} else if(a50 < 0 && b50 > 0 && c50 > 0){
    console.log(true)
} else if(a50 > 0 && b50 > 0 && c50 < 0){
    console.log(true)
} else {
    console.log(false)
}

// ============
// 51-masala:
// 
let a51 
if(a51 >= 10 && a51 >= 99 && a51 % 2 == 0){
    console.log(true)
} else {
    console.log(false)
}