document.getElementById('year').textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
if (lightbox && lightbox.showModal) {
  const body = lightbox.querySelector('.lightbox-body');
  document.querySelectorAll('.card-media .zoom').forEach((btn) => {
    btn.addEventListener('click', () => {
      body.replaceChildren(btn.firstElementChild.cloneNode(true));
      const cap = btn.parentElement.querySelector('figcaption');
      if (cap) body.append(cap.cloneNode(true));
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.close(); });
}
