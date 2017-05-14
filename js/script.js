
var link = document.querySelector(".form-modal-open");

var popup = document.querySelector(".footer-form");	

var close = popup.querySelector(".form-modal-close");

var login = popup.querySelector("[name=name]");

var form = popup.querySelector("form");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("footer-form-show");
	login.focus();
    });	

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("footer-form-show");
    });