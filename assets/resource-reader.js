document.querySelectorAll('.resource-reader').forEach(function (reader) {
  reader.addEventListener('toggle', function () {
    var frame = reader.querySelector('iframe[data-pdf]');
    if (reader.open && frame && !frame.hasAttribute('src')) {
      frame.src = frame.dataset.pdf;
    }
  });
});
