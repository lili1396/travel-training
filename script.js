let display = 0;

function displayBlock() {
  if (display == 1) {
    document.querySelector(".block-contacts").style.display = "none";
    display = 0;
  } else {
    document.querySelector(".block-contacts").style.display = "block";
    display = 1;
  }
}

//
//document.querySelector(".left-p").style.color = "red"

function setRed() {
  $(".left-p").css("color", "red");
}

//$(".input-sername").val("55555")

//alert(name)

function checkLog() {
  var login = $(".input-sername").val();
  var parol = $(".input-password").val();

  if (login == "admin" && parol == "1234") {
    alert("Вы вошли в систему");
  } else {
    alert("логин и пароль не верный");
  }
}

// Умножает значение инпута на 2, даже если это ВАСЯ
function fillLog() {
  var text = $(".input-sername").val();
  var textToNumber = Number(text);
  console.log(
    "переменная = " + textToNumber + " тип переменной =  " + typeof textToNumber
  );

  if (isNaN(textToNumber) == true) {
    textToNumber = 2;
  }

  console.log(
    "переменная = " + textToNumber + " тип переменной =  " + typeof textToNumber
  );

  if (textToNumber <= 0) $(".input-sername").val(2);
  else {
    var num = Number(textToNumber);
    $(".input-sername").val(textToNumber * 2);
    $(".input-password").val(num + "2");
  }
}

//Домашка :
//переключать текст на странице при кликах на ссылки/кнопки
//сделать стрелочки для слайдера
//добавить что то в выпадающую менюшку на верху страницы

// меняет текст в блоке
// $(".center-p1:nth-child(2)").text("Привет")

// //запрашивает текст в блоке
// $(".center-p1:nth-child(2)").text()

// Домашка:

// let dom = $(".center-a").text();
// console.log(dom);

let abb = 0;
let oldText = "";

function changeText() {
  if (abb == 0) {
    oldText = $(".text-block-p1").html();
    $(".text-block-p1").html("Здарова");
    abb = 1;
  } else if (abb == 1) {
    $(".text-block-p1").html(oldText);
    abb = 0;
  }
}

let imageState = 0;
let oldImg = "";

function changeImg() {
  if (imageState == 0) {
    oldImg = $(".center-img-1").attr("src");
    $(".center-img-1").attr("src", "images/eiffel-tower.jpg");
    imageState = 1;
  } else {
    $(".center-img-1").attr("src", oldImg);
    imageState = 0;
  }
}
let sliderPosX = 0;
let a = 0;

let imagePath = [
  "images/eiffel-tower.jpg",
  "images/paris.jpg",
  "images/fagag.jpg",
  "images/Carcassonne.jpg",
];

let activeSlide = 1;

function slideRight()
{
  if (activeSlide < 4) 
  {
    activeSlide += 1;
    setActiveSlide(activeSlide)
  }
  else
  {
    setActiveSlide(1) 
  }
 
}

function setActiveSlide(number) 
{
  activeSlide = number;
  $(".dot").removeClass("active");
  $(`.dot:nth-child(${activeSlide})`).addClass("active");
  $(".black-block img").attr("src", imagePath[activeSlide-1]);
}

function slideLeft() 
{
  if (activeSlide > 1) 
  {
    activeSlide -= 1;
    setActiveSlide(activeSlide)
  }
  else
  {
    setActiveSlide(4) 
  }
}

let big = 0
function bigImage () {

  if(big === 0) 
  { 
    $(".red-block").css("transform", "scale(1.5)")
    big = 1
  }
  else
  {
    $(".red-block").css("transform", "scale(1)")
    big = 0
  }

}
/*
function rightSlider () {

    if (sliderPosX >= -1599) {
      sliderPosX = sliderPosX - 400; 
      $(".black-block").css("transform", "translateX(" + sliderPosX + "px)");
    }
    else {

    }

}

function leftSlider () {

  if (sliderPosX < 0) {
    sliderPosX = sliderPosX + 400; 
    $(".black-block").css("transform", "translateX(" + sliderPosX + "px)");
  }
  else {

  }

}

*/
