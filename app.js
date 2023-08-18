document.addEventListener("DOMContentLoaded", function () {
  updateTime();
  setInterval(updateTime, 1000);

  function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const hour1 = Math.floor(hours / 10);
    const hour2 = hours % 10;
    const min1 = Math.floor(minutes / 10);
    const min2 = minutes % 10;

    //tsag
    switch (hour1) {
      case 1:
        document.getElementById("9").classList.remove("now");
        document.getElementById("20").classList.remove("now");
        document.getElementById("10").classList.add("now");
        break;
      case 2:
        document.getElementById("9").classList.remove("now");
        document.getElementById("10").classList.remove("now");
        document.getElementById("20").classList.add("now");
        break;
    }
    switch (hour2) {
      case 1:
        document.getElementById("9").classList.remove("now");
        if (hour1 === 0) {
          document.getElementById("1").classList.add("now");
        } else {
          document.getElementById("negen").classList.add("now");
        }
        break;
      case 2:
        document.getElementById("1").classList.remove("now");
        document.getElementById("negen").classList.remove("now");
        document.getElementById("2").classList.add("now");
        break;
      case 3:
        document.getElementById("2").classList.remove("now");
        document.getElementById("3").classList.add("now");
        break;
      case 4:
        document.getElementById("3").classList.remove("now");
        document.getElementById("4").classList.add("now");
        break;
      case 5:
        document.getElementById("4").classList.remove("now");
        document.getElementById("5").classList.add("now");
        break;
      case 6:
        document.getElementById("5").classList.remove("now");
        document.getElementById("6").classList.add("now");
        break;
      case 7:
        document.getElementById("6").classList.remove("now");
        document.getElementById("7").classList.add("now");
        break;
      case 8:
        document.getElementById("7").classList.remove("now");
        document.getElementById("8").classList.add("now");
        break;
      case 9:
        document.getElementById("8").classList.remove("now");
        document.getElementById("9").classList.add("now");
        break;
    }
    if (hour1 === 0 && hour2 === 0) {
      document.getElementById("horin").classList.remove("now");
      document.getElementById("gurvan").classList.remove("now");
      document.getElementById("9").classList.remove("now");
      document.getElementById("0").classList.add("now");
    } else {
      document.getElementById("0").classList.remove("now");
    }

    //minut
    switch (min1) {
      case 1:
        document.getElementById("tavin").classList.remove("now");
        document.getElementById("yusun").classList.remove("now");
        document.getElementById("arvan").classList.add("now");
        break;
      case 2:
        document.getElementById("arvan").classList.remove("now");
        document.getElementById("yusun").classList.remove("now");
        document.getElementById("horin").classList.add("now");
        break;
      case 3:
        document.getElementById("horin").classList.remove("now");
        document.getElementById("yusun").classList.remove("now");
        document.getElementById("guchin").classList.add("now");
        break;
      case 4:
        document.getElementById("guchin").classList.remove("now");
        document.getElementById("yusun").classList.remove("now");
        document.getElementById("duchin").classList.add("now");
        break;
      case 5:
        document.getElementById("duchin").classList.remove("now");
        document.getElementById("yusun").classList.remove("now");
        document.getElementById("tavin").classList.add("now");
        break;
    }
    switch (min2) {
      case 1:
        document.getElementById("yusun").classList.remove("now");
        if (min1 === 0) {
          document.getElementById("neg").classList.add("now");
        } else {
          document.getElementById("negenn").classList.add("now");
        }
        break;
      case 2:
        document.getElementById("negenn").classList.remove("now");
        document.getElementById("neg").classList.remove("now");
        document.getElementById("hoyor").classList.add("now");
        break;
      case 3:
        document.getElementById("hoyor").classList.remove("now");
        document.getElementById("gurvan").classList.add("now");
        break;
      case 4:
        document.getElementById("gurvan").classList.remove("now");
        document.getElementById("durvun").classList.add("now");
        break;
      case 5:
        document.getElementById("durvun").classList.remove("now");
        document.getElementById("tavan").classList.add("now");
        break;
      case 6:
        document.getElementById("tavan").classList.remove("now");
        document.getElementById("zurgaan").classList.add("now");
        break;
      case 7:
        document.getElementById("zurgaan").classList.remove("now");
        document.getElementById("doloon").classList.add("now");
        break;
      case 8:
        document.getElementById("doloon").classList.remove("now");
        document.getElementById("naiman").classList.add("now");
        break;
      case 9:
        document.getElementById("naiman").classList.remove("now");
        document.getElementById("yusun").classList.add("now");
        break;
    }
    if (min1 === 0 && min2 === 0) {
      document.getElementById("tavin").classList.remove("now");
      document.getElementById("yusun").classList.remove("now");
      document.getElementById("teg").classList.add("now");
    } else {
      document.getElementById("teg").classList.remove("now");
    }
  }
});
