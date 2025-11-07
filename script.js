// Print your name, age, and skills in console
console.log("Hashim Naeem");
console.log("Age: 22");
console.log("Skills: HTML, CSS, JavaScript");

// Function to add 2 numbers
function addNumbers(a, b) {
  return a + b;
}

// Example usage
let sum = addNumbers(5, 10);
console.log("Sum of 5 and 10 is:", sum);

// Function to calculate average marks
function calculateAverage(marks) {
  if (marks.length === 0) return 0;

  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  let average = total / marks.length;
  return average;
}

// Example usage
let studentMarks = [85, 90, 78, 92, 88];
console.log("Average Marks:", calculateAverage(studentMarks));

// -----------------------
// New interactive features
// -----------------------

document.addEventListener("DOMContentLoaded", function () {
  // 1) Theme toggle (Dark / Light) - using class on body and localStorage
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // 2) Hide/Show About section
  const toggleAboutBtn = document.getElementById("toggleAboutBtn");
  const aboutSection = document.getElementById("about");

  toggleAboutBtn.addEventListener("click", function () {
    if (aboutSection.classList.contains("hidden")) {
      aboutSection.classList.remove("hidden");
      toggleAboutBtn.textContent = "Hide About";
    } else {
      aboutSection.classList.add("hidden");
      toggleAboutBtn.textContent = "Show About";
    }
  });

  // 3) Navbar link event handling: set active state and console log
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      // Set active state on clicked link
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      // Allow normal anchor scrolling; also log or show simple feedback
      console.log("Nav clicked:", this.getAttribute("href"));

      // Optional: show a non-blocking feedback (console). Avoid alert() to not annoy users.
    });
  });

  // 4) Small enhancement: set active nav based on scroll position
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", function () {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });

  // 5) Footer year auto update
  const yEl = document.getElementById("copyrightYear");
  if (yEl) yEl.textContent = new Date().getFullYear();
});
