const precioOriginal = 120;
const descuento = 18;


// console.log("El precio del articulo es: Q."+precioOriginal+" El descuento aplicado es del "+descuento+"% El precio final del producto es de: Q."+PrecioConDescuento);

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return PrecioConDescuento
}
function calcularDescuento(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const discount = inputDiscount.value;
    const price = inputPrice.value;

    const precioConDescuento = calcularPrecioConDescuento(price, discount);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "Q." + precioConDescuento;
}
function calcularDescuento2(){
    const inputPrice = document.getElementById("inputPrice");

    const price = inputPrice.value;
    

    const inputCodDesc = document.getElementById("codDesc");
    const codDesc = inputCodDesc.value;
    

    const coupons = [
        {name: "EMA10", discount:10,},
        {name: "EMA15", discount:15,},
        {name: "EMA25", discount:25,},
    ];
    const validCoupon = function (coupon){
        return coupon.name === codDesc;
    };
    const userCoupon = coupons.find(validCoupon);
    if (!userCoupon) {
        alert("El cupón "+ codDesc+" no es válido.");
    }else{
        const newDesc = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(price, newDesc);
        const resultP = document.getElementById("resultP");
        resultP.innerText = "Q." + precioConDescuento;
    }
    
    
}