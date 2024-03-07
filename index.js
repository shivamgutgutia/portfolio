// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
	".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
	if (smallMenu.classList.contains("header__sm-menu--active")) {
		smallMenu.classList.remove("header__sm-menu--active");
	} else {
		smallMenu.classList.add("header__sm-menu--active");
	}
	if (headerHamMenuBtn.classList.contains("d-none")) {
		headerHamMenuBtn.classList.remove("d-none");
		headerHamMenuCloseBtn.classList.add("d-none");
	} else {
		headerHamMenuBtn.classList.add("d-none");
		headerHamMenuCloseBtn.classList.remove("d-none");
	}
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
	headerSmallMenuLinks[i].addEventListener("click", () => {
		smallMenu.classList.remove("header__sm-menu--active");
		headerHamMenuBtn.classList.remove("d-none");
		headerHamMenuCloseBtn.classList.add("d-none");
	});
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
	location.href = "index.html";
});



function submitForm() {
	// Gather form data here
  const form = document.getElementById("form");
	const formData = new FormData(form);

	// Use fetch or a library to send POST request with formData
	fetch("https://formspree.io/f/mayrbybg", {
		method: "POST",
		body: JSON.stringify(formData),
		headers: {
			"Content-Type": "application/json", // Set appropriate content type
		},
	})
		.then((response) => {
			// Handle response
			console.log("Form data sent successfully!");
		})
		.catch((error) => {
			console.error("Error sending form data:", error);
		});
}
