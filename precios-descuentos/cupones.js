function calcularPrecioConDescuento(precio, descuento) {
  const input__couponSelect = document.getElementById("couponSelect");
  const couponSelectValue = input__couponSelect;

  return (precio * (100 - (descuento + couponSelectValue))) / 100;
}

function onClickButtonPriceCouponDiscount() {
  const inputPrice = document.getElementById("inputPrice-coupon");
  const priceValue = Number(inputPrice.value);

  const inputDiscount = document.getElementById("inputDiscount-coupon");
  const discountValue = Number(inputDiscount.value);

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultPrice = document.getElementById("resultPrice-coupon");
  resultPrice.innerText =
    "El precio con descuento son: " + precioConDescuento + " $us";
}
