
function calculateDiscountPrice(price, discount){
    const percentajeWithDiscount = 100 - discount;
    const discountPrice = (price * percentajeWithDiscount) / 100;

    return discountPrice
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const finalPrice = calculateDiscountPrice(priceValue, discountValue);

    const resultP = document.getElementById("finalPriceParagraph");
    resultP.innerText = `Your price after discount is $${finalPrice}`
}