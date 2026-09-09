(function () {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      const item = button.closest('.faq-item');
      const isOpen = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const message = document.querySelector('#form-message');
      const name = document.querySelector('#nome').value.trim();
      message.textContent = `Obrigado, ${name || 'cliente'}! Sua mensagem foi registrada nesta demonstração acadêmica. Nossa equipe retornaria pelo canal informado.`;
      message.className = 'form-message success';
      contactForm.reset();
      message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      productCards.forEach(function (card) {
        card.hidden = !(filter === 'todos' || card.dataset.category === filter);
      });
    });
  });

  let cart = 0;
  const cartSummary = document.querySelector('#cart-summary');
  const cartCount = document.querySelector('#cart-count');
  document.querySelectorAll('.add-cart').forEach(function (button) {
    button.addEventListener('click', function () {
      cart += 1;
      if (cartCount) cartCount.textContent = String(cart);
      if (cartSummary) cartSummary.classList.add('show');
      const oldText = button.textContent;
      button.textContent = 'Adicionado ✓';
      button.disabled = true;
      setTimeout(function () {
        button.textContent = oldText;
        button.disabled = false;
      }, 900);
    });
  });

  const clearCart = document.querySelector('#clear-cart');
  if (clearCart) {
    clearCart.addEventListener('click', function () {
      cart = 0;
      if (cartCount) cartCount.textContent = '0';
      if (cartSummary) cartSummary.classList.remove('show');
    });
  }
})();
