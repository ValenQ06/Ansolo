//etiquetas
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
//botones
let a1 = document.getElementById("a1");
let b2 = document.getElementById("b2");
let c3 = document.getElementById("c3");
let d4 = document.getElementById("d4");
let e5 = document.getElementById("e5");
let f6 = document.getElementById("f6");
let g7 = document.getElementById("g7");
let h8 = document.getElementById("h8");
let i9 = document.getElementById("i9");
let j0 = document.getElementById("j0");

//funciones
const fna1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else {
    if (numeros.innerHTML == "" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML = "1";
    } else {
      alert("Paso incorrecto");
    }
  }
};
const fnb2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else {
    if (numeros.innerHTML == "1" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "2";
    } else {
      alert("Paso incorrecto");
    }
  }
};
const fnc3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else {
    if (numeros.innerHTML == "12" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "3";
    } else {
      alert("Paso incorrecto");
    }
  }
};
const fnd4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else {
    if (numeros.innerHTML == "123" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "4";
    } else {
      alert("Paso incorrecto");
    }
  }
};
const fne5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else {
    if (numeros.innerHTML == "1234" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "5";
    } else {
      alert("Paso incorrecto");
    }
  }
};
const fnf6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else {
    if (numeros.innerHTML == "12345" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "6";
    } else {
      alert("Paso incorrecto");
    }
  }
};
const fng7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else {
    if (numeros.innerHTML == "123456" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "7";
    } else {
      alert("Paso incorrecto");
    }
  }
};
const fnh8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else {
    if (numeros.innerHTML == "1234567" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "8";
    } else {
      alert("Paso incorrecto");
    }
  }
};
const fni9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else {
    if (numeros.innerHTML == "12345678" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "9";
    } else {
      alert("Paso incorrecto");
    }
  }
};
const fnj0 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else {
    if (numeros.innerHTML == "123456789" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "0";
    } else {
      alert("Paso incorrecto");
    }
  }
};

a1.onclick = () => {
  fna1();
};
b2.onclick = () => {
  fnb2();
};
c3.onclick = () => {
  fnc3();
};
d4.onclick = () => {
  fnd4();
};
e5.onclick = () => {
  fne5();
};
f6.onclick = () => {
  fnf6();
};
g7.onclick = () => {
  fng7();
};
h8.onclick = () => {
  fnh8();
};
i9.onclick = () => {
  fni9();
};
j0.onclick = () => {
  fnj0();
};
