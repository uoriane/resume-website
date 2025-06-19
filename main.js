// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });
}

// Optional: You can add modal or slider functionality here if needed later
