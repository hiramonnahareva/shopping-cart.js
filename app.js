
function updateInput (product , isIncreasing , price) {
   const productInput = document.getElementById (product + '-number') ;
   let productNumber = productInput.value ;
   if (isIncreasing) {
    productInput.value = parseInt(productNumber) + 1  ;
   }
   else if (productNumber > 0) {
    productInput.value = parseInt(productNumber) - 1 ;
   }
   const productTotal = document.getElementById (product + '-total') ;
   productNumber = productInput.value
   productTotal.innerText = productNumber * price ;
   calcTotal () ;
//    console.log (input.value) ;
}
function getInputValue (product){
    const puoductValue = document.getElementById (product + '-number').value ;
    const productTotal = parseInt( puoductValue ) ;
    // console.log (productTotal) ;
    return productTotal ;

}
function calcTotal () {
  const phoneTotal = getInputValue('phone') * 1219 ;
  const caseTotal = getInputValue('case') * 59 ;
  const subTotal = phoneTotal + caseTotal ;
  document.getElementById ("sub-total").innerText = subTotal ;
  const tax = subTotal / 10 ;
  document.getElementById ("tax-amount").innerText = tax ;
  const total = subTotal + tax ;
  document.getElementById ('total-price').innerText = total ;
//   console.log (tax) ; 
//   console .log (subTotal) 

}
function onclick(product , cheak , price){
    if (cheak) {
    document.getElementById (product + '-plus').addEventListener('click' , function (){
        updateInput (product , true , price) ;
     }) ;
    }
     else {
        document.getElementById (product + '-minus').addEventListener('click' , function (){
            updateInput (product , false , price) ;
         }) ;
 }
}
onclick ('phone' , true , 1219) ;
onclick ('phone' , false , 1219) ;
onclick ('case' , true , 59) ;
onclick ('case' , false , 59) ;
/* document.getElementById ('phone-plus').addEventListener('click' , function (){
    updateInput ('phone' , true , 1219) ;
 }) ;
document.getElementById ('phone-minus').addEventListener('click' , function (){
    updateInput ('phone' , false , 1219) ;
 }) ;
document.getElementById ('case-plus').addEventListener('click' , function (){
    updateInput ('case' , true , 59 ) ;
 }) ;
document.getElementById ('case-minus').addEventListener('click' , function (){
    updateInput ('case' , false , 59) ;
 }) ;
 */
