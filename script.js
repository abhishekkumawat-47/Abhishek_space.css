
function createStars() {
    const container = document.querySelector("section");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 300 + "%";
      star.style.left = Math.random() * 300 + "%";
      container.appendChild(star);
      setTimeout(() => {
        container.removeChild(star)
      }, 300);
    }
  }

setInterval(() => {
  createStars();

}, 300);




document.addEventListener("mousemove", parallax);
        function parallax(event) {
            this.querySelectorAll(".mouse").forEach((shift) => {
                const position = shift.getAttribute("value");
                const x = (window.innerWidth - event.pageX * position) / 180;
                const y = (window.innerHeight - event.pageY * position) / 280;
                shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }


