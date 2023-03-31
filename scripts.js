document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
  
    internalLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      });
    });
  });
  