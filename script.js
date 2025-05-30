// Optional: Add click functionality
document.querySelectorAll('.grid-container button').forEach(button => {
  button.addEventListener('click', () => {
    alert(`Button ${button.textContent} clicked`);
  });
});
