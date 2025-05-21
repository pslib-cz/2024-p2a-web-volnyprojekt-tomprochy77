document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contakt-form');
  const btn = document.getElementById('odeslat-btn');

  if (btn && form) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();

      if (form.checkValidity()) {
        form.submit();
      } else {
        form.reportValidity();
      }
    });
  }
});
