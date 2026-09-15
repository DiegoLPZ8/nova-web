// NOVA — configuración rápida
// Pon aquí tu número de WhatsApp con código de país, sin + ni espacios.
// Ejemplo México: 521XXXXXXXXXX
const NOVA_WHATSAPP = "524431453606";

function showOrder(){
  document.getElementById("orderModal").classList.add("open");
  document.getElementById("orderModal").setAttribute("aria-hidden","false");
}
function closeOrder(){
  document.getElementById("orderModal").classList.remove("open");
  document.getElementById("orderModal").setAttribute("aria-hidden","true");
}
function goWhatsApp(){
  if(!NOVA_WHATSAPP){
    alert("Primero agrega tu número de WhatsApp en script.js.");
    return;
  }
  const text = encodeURIComponent("Hola NOVA 👋, quiero pedir la playera Ninja 500 de $350 MXN. Mi talla es: ");
  window.open(`https://wa.me/${NOVA_WHATSAPP}?text=${text}`, "_blank");
}
document.getElementById("orderModal").addEventListener("click", (e)=>{
  if(e.target.id === "orderModal") closeOrder();
});
