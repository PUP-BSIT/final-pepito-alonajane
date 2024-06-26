document.addEventListener("DOMContentLoaded", function() {
  console.log("Document is ready!");

  document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const target = document.querySelector(this.getAttribute('href'));
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  });
});

