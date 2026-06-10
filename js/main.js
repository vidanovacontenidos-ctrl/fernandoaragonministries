// ══════════════════════════════════════════
//   Fernando Aragón Ministries — Main JS
// ══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ─ Nav burger
  const burger = document.getElementById('navBurger');
  const mobNav = document.getElementById('mobNav');
  const mobClose = document.getElementById('mobClose');
  if (burger) burger.addEventListener('click', () => mobNav.classList.add('open'));
  if (mobClose) mobClose.addEventListener('click', () => mobNav.classList.remove('open'));
  document.querySelectorAll('#mobNav a').forEach(a =>
    a.addEventListener('click', () => mobNav.classList.remove('open')));

  // ─ Scroll reveal
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  // ─ Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href').endsWith('#' + current) || a.getAttribute('href') === '#' + current);
    });
  });

  // ─ Notify button (cápsulas)
  const notifyBtn = document.querySelector('.cap-notify button');
  if (notifyBtn) {
    notifyBtn.addEventListener('click', function() {
      const inp = this.previousElementSibling;
      if (inp && inp.value) {
        this.textContent = '¡Anotado!';
        this.style.background = '#2d7a4f';
        inp.value = '';
        setTimeout(() => { this.textContent = 'Notificarme'; this.style.background = ''; }, 3000);
      }
    });
  }

  // ─ Contact form
  const formSubmit = document.querySelector('.form-submit');
  if (formSubmit) {
    formSubmit.addEventListener('click', function() {
      this.textContent = '✓  Mensaje enviado';
      this.style.background = '#2d7a4f';
      setTimeout(() => { this.textContent = 'Enviar mensaje'; this.style.background = ''; }, 3000);
    });
  }

  // ─ Lang toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

});
