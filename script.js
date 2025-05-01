document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    images.forEach(image => {
        const container = image.parentElement;
        container.classList.add("image-container");

        container.addEventListener("mousemove", (event) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;
            const xRotation = ((y / height) - 0.5) * -20;
            const yRotation = ((x / width) - 0.5) * 20;
            
            image.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });

        container.addEventListener("mouseleave", () => {
            image.style.transform = "none";
        });
    });
});

// Adding CSS styles to the document head
const style = document.createElement("style");
style.innerHTML = `
.image-container {
    perspective: 400px;
    display: inline-block;
    transform-style: preserve-3d;
}`;
document.head.appendChild(style);

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

