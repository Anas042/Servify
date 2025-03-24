
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your service booking has been received! We will contact you shortly.");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent! We'll get back to you soon.");
});
