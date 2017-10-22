/* eslint-env browser */
(() => {
  window.addEventListener('resize', () => {
    const body = document.getElementById('body');
    body.style.height = `${window.innerHeight}px`;
  });
})();
