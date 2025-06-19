// Navbar toggle menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const modal = document.getElementById("messageModal");
const closeModalBtn = document.getElementById("closeModal");
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  navLinks.classList.toggle("show");
});

// Slider functionality
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);

// Contact form validation & modal
const form = document.getElementById("contactForm");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  let valid = true;

  // Name validation
  if (!name) {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Message validation
  if (!message) {
    document.getElementById("messageError").textContent = "Message is required.";
    valid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  // If all valid, show modal and reset
  if (valid) {
    modal.style.display = "flex";
    form.reset();
  }
});

// Close modal when clicking ×
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Optional: Close modal when clicking outside it
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

