var swiper = new Swiper(".mySwiper", 
{
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: 
  {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: 
  {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const signinForm = document.getElementById("signin");

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isvalid = true;

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email == "") {
    isvalid = false;
    document.getElementById("emailError").innerHTML = "Please enter your Email";
    document.getElementById("email").style.border = "1px solid red"

  } else {
    isvalid = true
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("email").style.border = "1px solid black"
  }
  if (password === "") {
    isvalid = false;
    document.getElementById("PasswordError").innerHTML = "Please enter your Password";
    document.getElementById("password").style.border = "1px solid red"
  } else {
    isvalid = true
    document.getElementById("PasswordError").innerHTML = "";
    document.getElementById("password").style.border = "1px solid black"
  }

  if (!isvalid) {
    alert("All fields are required")
  }

  const userData=JSON.parse(localStorage.getItem("userInfo")) || [];

  const user = userData.find(user => user.email === email);
 
    if (!user) {
      alert("User not found! Please Signup");
      return;
    }

    if(user.password === password)
    {
      alert(`Login Successfully! Welcome ${user.name}`);
      localStorage.setItem("currenUser",JSON.stringify(user));
      window.location.href = "index.html";
    } else {
      alert("Enter Correct Password || Email"
      );
    }

});