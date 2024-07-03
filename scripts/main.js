let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/iron-nuts.jpg") {
    myImage.setAttribute("src", "images/AI-nuts.jpg");
  } else {
    myImage.setAttribute("src", "images/iron-nuts.jpg");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent =myName + "的头像" ;
    }
  };


if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName + "的头像" ;
  };


myButton.onclick = function () {
    setUserName();
  };
  




  
  