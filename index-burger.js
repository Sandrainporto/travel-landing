//бургер
const burgerIcon = document.querySelector(".burger__icon");
const burgerMenu = document.querySelector(".menu__body");
const span = document.querySelector(".span");
const opacity = document.querySelector(".opacity");

burgerIcon.addEventListener("click", () => {
	burgerIcon.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	span.classList.toggle('active');
	opacity.classList.toggle('active');
})

document.addEventListener('click', event => {
if(event.target.className !== 'burger__icon active' && 
event.target.className !== 'span active' && 
event.target.className !== 'menu__body active') {
	burgerIcon.classList.remove('active');
	burgerMenu.classList.remove('active');
	span.classList.remove('active');
	opacity.classList.remove('active');
}
})

//поп-ап
const popUp = document.getElementById('pop_up');
const openPopUp = document.getElementById('open__pop_up');
const closePopUp = document.querySelector('.main');
const signIn = document.getElementById('btn_sighIn');
const mobilePopUp = document.getElementById('account');


openPopUp.onclick = function firstPopUp () {
	popUp.style.display = "block";
	const registerBtn = document.getElementById('LogIn2');
	registerBtn.style.display = "none";
	const animationPopUp = document.getElementById('pop_up').animate([
		{transform: "translate(0, -25%)"},
		{transform: "translate(0px)"}
	], 500);

}

closePopUp.onclick = function firstPopUp () {
	popUp.style.display = "none";
}

window.onclick = function (e) {
	if (e.target == popUp) {
		popUp.style.display = "none";
	}
}





mobilePopUp.onclick = function firstPopUp () {
	popUp.style.display = "block";
	const registerBtn = document.getElementById('LogIn2');
	registerBtn.style.display = "none";
	const animationPopUp = document.getElementById('pop_up').animate([
		{transform: "translate(0, -25%)"},
		{transform: "translate(0px)"}
	], 500);
}
closePopUp.onclick = function firstPopUp () {
	popUp.style.display = "none";
}

window.onclick = function (e) {
	if (e.target == popUp) {
		popUp.style.display = "none";
	}
}



//alerts

function openAlert() {
	const input = document.getElementById("input_email").value;
	document.getElementById('input_email').value = '';
	const input2 = document.getElementById("input_password").value;
	document.getElementById('input_password').value = '';

	alert(`E-mail: ${input} \nPassword: ${input2}`);
}
signIn.addEventListener('click', openAlert);



//поп-ап 2
const changePopUp = document.getElementById('LogIn');

changePopUp.onclick = function () {
	const text = document.querySelector('.pop_up_title').textContent;
	document.querySelector('.pop_up_title').textContent = "Create account";
	const facebook = document.querySelector('._block');
	facebook.style.display = "none";
	const google = document.getElementById("google");
	google.style.display = "none";
	const slasher = document.querySelector('.slasher');
	slasher.style.display = "none";
	const text2 = document.querySelector('.account').textContent;
	document.querySelector('.account').textContent = "Already have an account?";
	const login = document.getElementById('LogIn');
	login.style.display = "none";

	const registerBtn = document.getElementById('LogIn2');
	registerBtn.style.display = "inline-block";


	const text1 = document.querySelector('.Password_recover').textContent;
	document.querySelector('.Password_recover').textContent = "";
	document.querySelector('.Password_recover').style.margin = "-5px 0px 0px 0px";
}
const changePopUp2 = document.getElementById('LogIn2');

changePopUp2.onclick = function () {
	const text = document.querySelector('.pop_up_title').textContent;
	document.querySelector('.pop_up_title').textContent = "Log in to your account";
	const facebook = document.querySelector('._block');
	facebook.style.display = "block";
	const google = document.getElementById("google");
	google.style.display = "block";
	const slasher = document.querySelector('.slasher');
	slasher.style.display = "flex";
	const text2 = document.querySelector('.account').textContent;
	document.querySelector('.account').textContent = "Don’t have an account?";
	const login = document.getElementById('LogIn');
	login.style.display = "inline-flex";

	const registerBtn = document.getElementById('LogIn2');
	registerBtn.style.display = "none";


	const text1 = document.querySelector('.Password_recover').textContent;
	document.querySelector('.Password_recover').textContent = "Forgot Your Password?";
	document.querySelector('.Password_recover').style.margin = "0px 0px 0px 0px";
}
//carousel
const carousel_input = document.querySelectorAll('.carousel-wrapper input');
const mobileVersion = 390;
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slideSwitcher = document.querySelectorAll('.slide-switcher');

if (document.documentElement.clientWidth <= mobileVersion) {
	carousel_input[0].checked = true; 
} 

arrowLeft.classList.remove('inactive');

function moveLeft() {
	carousel_input[0].checked == true ? 
	carousel_input[1].checked = true :
	carousel_input[1].checked == true ?
	carousel_input[2].checked = true :
	carousel_input[0].checked = true;
}

function moveRight() {
	carousel_input[2].checked == true ? 
	carousel_input[1].checked = true :
	carousel_input[1].checked == true ?
	carousel_input[0].checked = true :
	carousel_input[2].checked = true;
}

arrowRight.addEventListener('click', moveLeft);
arrowLeft.addEventListener('click', moveRight);