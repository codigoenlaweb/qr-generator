const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
const divQrcode = document.querySelector("#qrcode")

let qrcode = new QRCode(divQrcode, {
  width: 250,
  height: 250,
  colorDark : "red",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});

btn.addEventListener("click", () => {
  const inputValue = text.value
  console.log(inputValue);
  qrcode.clear(); // clear the code.
  qrcode.makeCode(inputValue); // make another code.
}) 