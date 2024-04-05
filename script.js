document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const containers = document.querySelectorAll('.container a');

    containers.forEach((container) => {
      const title = container.querySelector('h2').textContent.toLowerCase();
      const isVisible = title.includes(searchTerm);
      container.style.display = isVisible ? 'block' : 'none';
      if (isVisible) {
        container.style.marginTop = '400px';
      }
    });
  });
});
