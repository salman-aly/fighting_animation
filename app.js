var forward = 0;

var backward = 0;

function abc(event) {
  var character = document.getElementById("animate");
  console.log(event.keyCode);
  console.log(forward);

  if (event.keyCode === 68 && forward < 1200) {
    forward = forward + 20;
    character.style.left = forward + "px";
    character.src = "images/zan-runn.gif";
    setTimeout(function () {
      character.src = "images/zankuro-red.gif";
      character.style.width = "300px";
      character.style.height = "300px";
    }, 5000);
  }
  if (event.keyCode === 65 && forward > 30) {
    forward = forward - 20;
    character.style.left = forward + "px";
    character.style.width = "400px";
    character.style.height = "400px";
    character.src = "images/zankuro-badassstrike.gif";
    setTimeout(function () {
      character.src = "images/zankuro-red.gif";
      character.style.width = "350px";
      character.style.height = "350px";
    }, 2000);
  }
  if (event.keyCode === 87) {
    character.src = "images/zan-die.gif";
    character.style.width = "400px";
    character.style.height = "400px";
    setTimeout(function () {
      character.src = "images/zankuro-red.gif";
      character.style.width = "300px";
      character.style.height = "300px";
    }, 1000);
  }
  if (event.keyCode === 90) {
    character.src = "images/zankuro-red.gif";
    character.style.width = "300px";
    character.style.height = "300px";
  }
}
window.addEventListener("keydown", abc);

// for second character

function ab(event) {
  var chara = document.getElementById("ani");
  console.log(event.keyCode);
  console.log(backward);
  if (event.keyCode === 74 && backward < 1200) {
    backward = backward + 20;
    chara.style.right = backward + "px";
    chara.src = "images/fight.gif";
    setTimeout(function () {
      chara.src = "images/chengstance.gif";
      chara.style.width = "260px";
      chara.style.height = "260px";
    }, 10000);
  }

  if (event.keyCode === 76 && backward > 30) {
    backward = backward - 20;
    chara.style.right = backward + "px";
    chara.style.width = "260px";
    chara.style.height = "260px";
    chara.src = "images/chengstance.gif";
    setTimeout(function () {
      chara.src = "images/chengstance.gif";
      chara.style.width = "260px";
      chara.style.height = "260px";
    }, 5000);
  }
}

window.addEventListener("keydown", ab);
