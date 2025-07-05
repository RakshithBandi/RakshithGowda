
document.getElementById('searchIcon').addEventListener('click', () => {
  document.getElementById('searchBox').classList.toggle('active');
});

const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        let count = +counter.innerText.replace('%', '');
        const speed = 2;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + 1)}%`;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = `${target}%`;
        }
      };
      updateCount();
      observer.unobserve(counter);
    }
  });
});
counters.forEach(counter => observer.observe(counter));

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('open');
  });
});

const cartLink = document.getElementById("addToCart");

function updateCartLink() {
  const fragrance = document.querySelector('input[name="fragrance"]:checked').value;
  const purchase = document.querySelector('input[name="purchase"]:checked').value;
  cartLink.href = `https://dummyshop.com/cart?fragrance=${fragrance}&type=${purchase}`;
}

document.querySelectorAll('input[name="fragrance"]').forEach(el => el.addEventListener('change', updateCartLink));
document.querySelectorAll('input[name="purchase"]').forEach(el => el.addEventListener('change', updateCartLink));

updateCartLink(); // Initialize

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle('open');
  });
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});


