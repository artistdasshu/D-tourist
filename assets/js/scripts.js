document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

if (window.location.href.includes("book.html")) {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your tour has been successfully booked!');
    });
}

document.querySelectorAll('.destination').forEach((destination) => {
  destination.addEventListener('click', () => {
    window.location.href = 'book.html'; // Redirect to book.html
  });
});

alert('Hello, and welcome to my website. If you want to create one or learn how to code one like this, feel free to get in touch with me.');
