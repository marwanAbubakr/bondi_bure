console.log(Math.round(10.8))
// to make run of code writh .. node diraction files of index.tsc
// tsc -w => to compiler automatic
// tsc --init => to show config.hson file
// tsc to make compiler
// ? option oprator
//  "rootDir": "./src", => مكان ملفات"jsال"
// "outDir": "./dist" => هيكمبيل الملفات دي فين
// noImplicitAny => لما يكون المتغير any متظهرليش مشكله
// noImplicitReturns => لو الفنكشن مش هترجع حاجه هيظهر مشكله لانه لازم يكون فيهreturn لل function
// noUnusedLocals => لو في متغير انتا عامله ومش مستخدمه ف هيقولك فيه مشكله
// noUnusedParameters => لو فيه فانكشن بس مش مررلها براميتر
// "allowUnreachableCode" => لو في سطر كود بعد ال ريتيرن مثلا ف ده مش هيشتغل ف هيقولك ان هنا فيه مشكله
function test(pram1?: any, pram2?: any, pram3?: any) {
  return `${pram1}${pram2}${pram3}`
}
test()
// لو فيه براميتر وانا مش هحط فاليو لما اشغلها ف عشان ميظهرليش ايررو حط علامه استفهام ؟
let arr: (number | boolean[] | (string | (string | number)[])[])[]
// {1} let arr: (number | boolean[] )[] => ارراي جواها نمبر وحواها بوليين ارراي
// {2}let arr: (number | boolean[] | (string )[])[] => ارراي جواها نمبر وجواها بوليين ارراي وجواهاسترنج ارراي
// let arr: (number | boolean[] | (string | (string | number)[])[])[] => ارراي جواها نمبر وجواها بوليين ارراي وجواها ارراي سترنج وجوه الاسترنج ارراي تانيه سترنج او نمبر
