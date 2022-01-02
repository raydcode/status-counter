import counters from './utils/variables.js';

counters.forEach((counter) => {
  counter.innerText = 0;

  function updateCounters() {
    const target = +counter.dataset.target;
    const count = +counter.innerText;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + target / 200)}`;
      setTimeout(updateCounters, 10);
    } else {
      counter.innerText = target;
    }
  }
  updateCounters();
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const sectionTop = document.querySelector('.top');
    const sectionTopHeight = sectionTop.clientHeight;
    if (scrollHeight >= sectionTopHeight - 1) {
      updateCounters();
    }
  });
});
