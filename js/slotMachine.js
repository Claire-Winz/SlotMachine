var seedmoney = 10000;

function showPrice() {
  const price = document.querySelector("#price");
  price.innerHTML = seedmoney;
};

function getRandom() {
  return Math.floor(Math.random() * 10);
};

const button = document.querySelector("#btn");

button.onclick = function() {
  var num1 = getRandom();
  var num2 = getRandom();
  var num3 = getRandom();

  const input1 = document.querySelector("#first_num");
  const input2 = document.querySelector("#second_num");
  const input3 = document.querySelector("#third_num");

  input1.innerHTML = num1;
  input2.innerHTML = num2;
  input3.innerHTML = num3;

  if (seedmoney <= 0) {
    alert("시드머니가 없어 게임을 플레이 할 수 없습니다.");
  }
  else {
    seedmoney -= 1000;

    if (num1 == num2 && num1 == num3) {
      seedmoney = seedmoney + (num1 * 5000);
    }
  
    if (num1 == 7) {
      seedmoney += 2500;
    }
    if (num2 == 7) {
      seedmoney += 2500;
    }
    if (num3 == 7) {
      seedmoney += 2500;
    }

    console.log("현재 슬롯 머신 숫자 : " + num1 + " " + num2 + " " + num3);
    console.log("현재 시드머니 : " + seedmoney);

    showPrice();
  };
};
