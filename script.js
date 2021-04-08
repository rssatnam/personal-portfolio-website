let birthDate = new Date("10 December 1815");

const calcSeconds = function () {
  let now = new Date();
  let secondsWorking = Math.floor((now.getTime() - birthDate.getTime()) / 1000);
  let formatter = new Intl.NumberFormat("en-US");

  document.getElementById("coding-since").innerText = formatter.format(
    secondsWorking
  );
};

calcSeconds();
setInterval(calcSeconds, 1000);
