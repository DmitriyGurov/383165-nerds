var link = document.querySelector(".form-modal-open");

var popup = document.querySelector(".footer-form");	

var close = popup.querySelector(".form-modal-close");

var name = popup.querySelector("[name=name]");

var email = popup.querySelector("[name=email]");

var form = popup.querySelector("form");

var storage = localStorage.getItem("name");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("footer-form-show");
	if (storage) {
		name.value = storage;
		email.focus();
		} else {
		name.focus();
		}
	});	

close.addEventListener("click", function(event) {
event.preventDefault();
	popup.classList.remove("footer-form-show");
	popup.classList.remove("footer-form-error");
	});

form.addEventListener("submit", function(event) {
	if (!name.value || !email.value) {
		event.preventDefault();
		popup.classList.remove("footer-form-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("footer-form-error");
		} else {
			localStorage.setItem("name", name.value);
		}
	});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("footer-form-show")) {
			popup.classList.remove("footer-form-show");
			popup.classList.remove("footer-form-error");
			}
		}
	});