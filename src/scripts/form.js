document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('send-btn');

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
