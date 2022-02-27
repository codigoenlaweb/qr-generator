const inputs = document.querySelectorAll("#input");
const btn = document.querySelector("#btn");
const divQrcode = document.querySelector("#qrcode");
const links = document.querySelectorAll("#link");
const removeAndAgredInput = document.querySelector("#remove-and-agred-input");
const pError = document.querySelector("#error");
const color = document.querySelector("#color");

let qrcode = new QRCode(divQrcode, {
  width: 240,
  height: 240,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

btn.addEventListener("click", () => {
  inputs.forEach((input) => {
    if (!input.classList.contains("hidden")) {
      const inputValue = input.value;
      if (inputValue === "") {
        pError.classList.remove("hidden");
      } else {
        qrcode._htOption.colorDark = color.value
        qrcode.clear(); // clear the code.
        qrcode.makeCode(inputValue); // make another code.
        if (!pError.classList.contains("hidden")) {
          pError.classList.add("hidden");
        }
      }
    }
  });
});

function insertInput(nmr) {
  inputs.forEach((input) => {
    if (input === inputs[nmr]) {
      input.classList.remove("hidden");
    } else {
      input.classList.add("hidden");
      input.value = "";
    }
  });
}

// link
links.forEach((link) => {
  link.addEventListener("click", () => {
    const linkCurrent = link;

    links.forEach((e) => {
      if (e == linkCurrent) {
        linkCurrent.classList.remove("link-desactivate");
        linkCurrent.classList.add("link-activate");
      } else {
        e.classList.remove("link-activate");
        e.classList.add("link-desactivate");
      }
    });

    // inputs
    if (link.textContent === "URL") {
      insertInput(0);
    }

    if (link.textContent === "EMAIL") {
      insertInput(1);
    }

    if (link.textContent === "TEXT") {
      insertInput(2);
    }
  });
});
