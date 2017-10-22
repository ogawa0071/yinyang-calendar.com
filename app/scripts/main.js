/* eslint-env browser */
(() => {
  const fixHeight = () => {
    const html = document.documentElement;
    const documentHight = document.body.offsetHeight;
    const windowHight = window.innerHeight;
    if (documentHight < windowHight) {
      html.style.height = `${window.innerHeight}px`;
    } else {
      html.style.height = '';
    }
  };

  window.onload = fixHeight;
  window.addEventListener('resize', fixHeight);
})();
