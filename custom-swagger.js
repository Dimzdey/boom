/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
window.addEventListener('load', function () {
  const interval = setInterval(() => {
    const schemesWrapper = document.querySelector(
      '.swagger-ui .schemes.wrapper.block.col-12',
    );

    const authWrapper = document.querySelector('.swagger-ui .auth-wrapper');

    if (schemesWrapper && authWrapper) {
      clearInterval(interval);

      const oldBtn = schemesWrapper.querySelector('.download-json');

      if (oldBtn) {
        oldBtn.remove();
      }

      const oldGif = schemesWrapper.querySelector('.download-gif');

      if (oldGif) {
        oldGif.remove();
      }

      const button = document.createElement('a');

      button.href = 'swagger/json';
      button.target = '_blank';
      button.innerText = 'Download OpenAPI JSON';
      button.className = 'btn download-json';

      const gif = document.createElement('img');

      gif.src = '/public/moscow.gif';
      gif.style.display = 'none';
      gif.style.marginTop = '8px';
      gif.className = 'download-gif';

      button.addEventListener('click', function (e) {
        e.preventDefault();

        if (gif.style.display === 'block') {
          return;
        }

        gif.style.display = 'block';

        setTimeout(() => {
          gif.style.display = 'none';
          window.open('swagger/json', '_blank');
        }, 3000);
      });

      schemesWrapper.insertBefore(button, schemesWrapper.firstChild);
      schemesWrapper.insertBefore(gif, button.nextSibling);

      schemesWrapper.style.display = 'flex';
      schemesWrapper.style.justifyContent = 'space-between';
      schemesWrapper.style.alignItems = 'center';
    }
  }, 200);
});
