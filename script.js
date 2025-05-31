document.querySelectorAll('.grid-container button').forEach(button => {
    button.addEventListener('click', () => {
        const page = button.getAttribute('data-page');
        window.location.href = `pages/${page}.html`;
    });
});
