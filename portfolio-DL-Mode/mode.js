// var icon = document.getElementById("icon");

function myFunction() {
  var icon = document.getElementById('icon')
  var element = document.body;
  element.classList.toggle("dark-theme");
  if (element.classList.contains('dark-theme')){
    icon.src = "https://res.cloudinary.com/dmklduciw/image/upload/v1737468788/mine/sun_yhhhhw.png"
  }else
  icon.src = 'https://res.cloudinary.com/dmklduciw/image/upload/v1737468788/mine/moon_svcujr.png'
  
}

icon = function(){
  document.classlist.toggle("dark-theme");
  if (document.body.classList.contains('dark-theme')){
    icon.src = "https://res.cloudinary.com/dmklduciw/image/upload/v1737468788/mine/sun_yhhhhw.png"
  }
}