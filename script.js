const randomclr = function () {
  const hex = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalid;

const startchangingclr = function () {
  if (!intervalid) {
    intervalid = setInterval(changebgclr, 1000);
  }

  function changebgclr() {
    document.body.style.backgroundColor = randomclr();
  }
};

const stopchangingclr = function () {
  clearInterval(intervalid);
  intervalid = null;
};

document.querySelector("#start").addEventListener("click", startchangingclr);

document.querySelector("#stop").addEventListener("click", stopchangingclr);
