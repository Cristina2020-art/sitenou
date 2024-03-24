document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const resultDiv = document.getElementById("rezultat");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne comportamentul implicit de trimitere a formularului

        // Simulează trimiterea formularului (aici poți adăuga cod pentru a trimite datele către un server)
        // În acest exemplu, vom afișa doar un mesaj de confirmare că formularul a fost trimis cu succes
        resultDiv.innerHTML = "<p>Mesajul a fost trimis cu succes!</p>";
        resultDiv.style.display = "block";

        // Resetăm formularul după trimitere
        contactForm.reset();
    });
});
