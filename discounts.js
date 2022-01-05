
function calculateDiscountPrice(price, discount){
    const percentajeWithDiscount = 100 - discount;
    const discountPrice = (price * percentajeWithDiscount) / 100;

    return discountPrice
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountCupon = inputDiscount.value;
    
  if(discountCupon === "15percent"){
      var discountValue = 15;
  } else if (discountCupon === "20percent"){
      var discountValue = 20;
  } else if (discountCupon === "30percent"){
      var discountValue = 30;
  } else if (discountCupon === "45percent"){
      var discountValue = 45;
  }

    const finalPrice = calculateDiscountPrice(priceValue, discountValue);

    const resultP = document.getElementById("finalPriceParagraph");
    resultP.innerText = `Your discount is a ${discountValue}%, and yout total is $${finalPrice}`
}