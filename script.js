// Selectează butonul și corpul paginii
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Adaugă un eveniment de click pe buton
themeToggle.addEventListener('click', () => {
    // Comută între tema întunecată și luminoasă
    body.classList.toggle('dark-mode');
    
    // Actualizează textul butonului
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Comută Tema Luminoasă';
    } else {
        themeToggle.textContent = 'Comută Tema Întunecată';
    }
});
