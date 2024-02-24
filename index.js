var fnam = document.getElementById("fname");
var snam = document.getElementById("sname");
var ptnF = 0;
var ptnS = 0;
// var count = 1;
var flag = true;
var state = [1, 0, 1, 1, 0, 0, 0, 1, 1];

function checkRequirement() {
  if ((fnam.value && snam.value) == "") {
    alert("please enter both player name");
  } else {
    goDirect();
    display();
  }
}

function display() {
  var firstN = fnam.value;
  var secondN = snam.value;

  if (firstN == "" && secondN == "") {
    document.getElementsByClassName(
      "player1"
    )[0].innerHTML = `<h3>Player1:-${ptnF}</h3>`;
    document.getElementsByClassName(
      "player2"
    )[0].innerHTML = `<span><h3>Player2:-${ptnS}</h3></span>`;
  } else {
    document.getElementsByClassName(
      "player1"
    )[0].innerHTML = `<label><h3>${firstN}:-${ptnF}</h3></label>`;
    document.getElementsByClassName(
      "player2"
    )[0].innerHTML = `<label><h3>${secondN}:-${ptnS}</h3></label>`;
  }
}

function goDirect() {
  document.getElementsByClassName("main1")[0].style.display = "none";
  document.getElementsByClassName("main2")[0].style.display = "block";
  display();
}

// if (count % 2 == 1) e.target.innerHTML = "<h1>X</h1>";
// else e.target.innerHTML = "<h1>O</h1>";
// ++count;

document.getElementById("tic").addEventListener("click", (e) => {
  var id = e.target.id;

  if (state[id] === 1 || state[id] === 0) {
    if (flag) {
      state[id] = "x";
      e.target.innerHTML = "<h1>X</h1>";
      flag = !flag;
    } else {
      state[id] = "o";
      e.target.innerHTML = "<h1>O</h1>";
      flag = !flag;
    }
    winner(!flag);
  } else {
    alert("NOt a valid move");
  }
  console.log(state);
});

function winner(data) {
  if (state[0] == state[1] && state[0] == state[2]) {
    var arr = [0, 1, 2];
    if (data) {
      var value = "X";
      ptnF++;
    } else {
      var value = "O";
      ptnS++;
    }

    document.getElementsByClassName(
      "win"
    )[0].innerHTML = `<p>Congratulation! ${value} you are winner</p>`;
    document.getElementsByClassName("win")[0].style.visibility = "visible";
    colorchanger(arr);
    display();
    disable();
  } else if (state[3] == state[4] && state[3] == state[5]) {
    arr = [3, 4, 5];
    if (data) {
      var value = "X";
      ptnF++;
    } else {
      var value = "O";
      ptnS++;
    }
    document.getElementsByClassName(
      "win"
    )[0].innerHTML = `<p>Congratulation! ${value} you are winner</p>`;
    document.getElementsByClassName("win")[0].style.visibility = "visible";
    colorchanger(arr);
    display();
    disable();
  } else if (state[6] == state[7] && state[6] == state[8]) {
    arr = [6, 7, 8];
    if (data) {
      var value = "X";
      ptnF++;
    } else {
      var value = "O";
      ptnS++;
    }
    document.getElementsByClassName(
      "win"
    )[0].innerHTML = `<p>Congratulation! ${value} you are winner</p>`;
    document.getElementsByClassName("win")[0].style.visibility = "visible";
    colorchanger(arr);
    display();
    disable();
  } else if (state[0] == state[3] && state[0] == state[6]) {
    arr = [0, 3, 6];
    if (data) {
      var value = "X";
      ptnF++;
    } else {
      var value = "O";
      ptnS++;
    }
    document.getElementsByClassName(
      "win"
    )[0].innerHTML = `<p>Congratulation! ${value} you are winner</p>`;
    document.getElementsByClassName("win")[0].style.visibility = "visible";
    colorchanger(arr);
    display();
    disable();
  } else if (state[1] == state[4] && state[1] == state[7]) {
    arr = [1, 4, 7];
    if (data) {
      var value = "X";
      ptnF++;
    } else {
      var value = "O";
      ptnS++;
    }
    document.getElementsByClassName(
      "win"
    )[0].innerHTML = `<p>Congratulation! ${value} you are winner</p>`;
    document.getElementsByClassName("win")[0].style.visibility = "visible";
    colorchanger(arr);
    display();
    disable();
  } else if (state[2] == state[5] && state[2] == state[8]) {
    arr = [2, 5, 8];
    if (data) {
      var value = "X";
      ptnF++;
    } else {
      var value = "O";
      ptnS++;
    }
    document.getElementsByClassName(
      "win"
    )[0].innerHTML = `<p>Congratulation! ${value} you are winner</p>`;
    document.getElementsByClassName("win")[0].style.visibility = "visible";
    colorchanger(arr);
    display();
    disable();
  } else if (state[0] == state[4] && state[0] == state[8]) {
    arr = [0, 4, 8];
    if (data) {
      var value = "X";
      ptnF++;
    } else {
      var value = "O";
      ptnS++;
    }
    document.getElementsByClassName(
      "win"
    )[0].innerHTML = `<p>Congratulation! ${value} you are winner</p>`;
    document.getElementsByClassName("win")[0].style.visibility = "visible";
    colorchanger(arr);
    display();
    disable();
  } else if (state[2] == state[4] && state[2] == state[6]) {
    arr = [2, 4, 6];
    if (data) {
      var value = "X";
      ptnF++;
    } else {
      var value = "O";
      ptnS++;
    }
    document.getElementsByClassName(
      "win"
    )[0].innerHTML = `<p>Congratulation! ${value} you are winner</p>`;
    document.getElementsByClassName("win")[0].style.visibility = "visible";
    colorchanger(arr);
    display();
    disable();
  } else {
    var count = 0;
    for (let j = 0; j < state.length; j++) {
      if (state[j] == 1 || state[j] == 0) {
        count++;
      }
    }
    if (count == 0) {
      arr = false;
      document.getElementsByClassName(
        "win"
      )[0].innerHTML = `<p>Match Draw!</p>`;
      document.getElementsByClassName("win")[0].style.visibility = "visible";
      colorchanger(arr);
      disable();
    }
  }
}
function colorchanger(arr) {
  // for (state[0]) {
  //   // if (state[k] === "x") {/
  //     document.getElementById(k).style.backgroundColor = "red";
  //   // }
  // }
  if (arr != false) {
    for (let k = 0; k < arr.length; arr++) {
      let a = arr[0],
        b = arr[1],
        c = arr[2];
      document.getElementById(a).style.backgroundColor = "lightgreen";
      document.getElementById(b).style.backgroundColor = "lightgreen";
      document.getElementById(c).style.backgroundColor = "lightgreen";
    }
  } else {
    for (let y = 0; y < 9; y++) {
      document.getElementById(y).style.backgroundColor = "lightcoral";
    }
  }
}

function disable() {
  setTimeout(reset, 1000);
  for (a in state) {
    console.log(a);
    if (state[a] === 1 || state[a] === 0) {
      state[a] = null;
    }
  }
}

function restart() {
  location.reload();
}

function reset() {
  state = [1, 0, 1, 1, 0, 0, 0, 1, 1];
  console.log(state);
  for (let i = 0; i < state.length; i++) {
    document.getElementById(i).innerHTML = "";
    document.getElementById(i).style.backgroundColor = "";
  }
  flag = true;
}

// function checkWinner(signState) {
//   if (state[0] == state[1] && state[0] == state[2]) {
//     if (signState) {
//       alert("winner X");
//     } else {
//       alert("winner O");
//     }

//     setDisabled();
//   } else if (state[3] == state[4] && state[3] == state[5]) {
//     if (signState) {
//       alert("winner X");
//     } else {
//       alert("winner O");
//     }

//     setDisabled();
//   } else if (state[6] == state[7] && state[6] == state[8]) {
//     if (signState) {
//       alert("winner X");
//     } else {
//       alert("winner O");
//     }

//     setDisabled();
//   } else if (state[0] == state[3] && state[0] == state[6]) {
//     if (signState) {
//       alert("winner X");
//     } else {
//       alert("winner O");
//     }

//     setDisabled();
//   } else if (state[1] == state[4] && state[1] == state[7]) {
//     if (signState) {
//       alert("winner X");
//     } else {
//       alert("winner O");
//     }

//     setDisabled();
//   } else if (state[2] == state[5] && state[2] == state[8]) {
//     if (signState) {
//       alert("winner X");
//     } else {
//       alert("winner O");
//     }

//     setDisabled();
//   } else if (state[0] == state[4] && state[0] == state[8]) {
//     if (signState) {
//       alert("winner X");
//     } else {
//       alert("winner O");
//     }

//     setDisabled();
//   } else if (state[2] == state[4] && state[2] == state[6]) {
//     if (signState) {
//       alert("winner X");
//     } else {
//       alert("winner O");
//     }

//     setDisabled();
//   } else {
//     var count = 0;
//     for (x in state) {
//       //0
//       // console.log(x);
//       if (state[x] === 1 || state[x] === 0) {
//         count += 1;
//       }
//     }
//     if (count == 0) winnerMsgDiv.innerText = "Draw !!";
//   }
// }

// function setDisabled() {
//   for (x in state) {
//     //0
//     // console.log(x);
//     if (state[x] === 1 || state[x] === 0) {
//       state[x] = null;
//     }
//   }
//   // for (x of state)
//   // {
//   //     console.log(x);
//   // }
// }
