// No Prumo · landing page
// 1) QR Code do próprio endereço do site (funciona em qualquer domínio da Vercel)
// 2) Botão para baixar o QR Code em PNG (para usar nos slides e no stand)
// 3) Entrada suave das seções ao rolar

(function () {
  'use strict';

  var PAGE_URL = window.location.origin + window.location.pathname;

  // ---------- QR Code ----------
  function buildQr() {
    var box = document.getElementById('qr');
    if (!box || typeof qrcode !== 'function') return null;

    var qr = qrcode(0, 'M');
    qr.addData(PAGE_URL);
    qr.make();

    var count = qr.getModuleCount();
    var rects = '';
    for (var row = 0; row < count; row++) {
      for (var col = 0; col < count; col++) {
        if (qr.isDark(row, col)) {
          rects += '<rect x="' + col + '" y="' + row + '" width="1.02" height="1.02"/>';
        }
      }
    }
    box.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + count + ' ' + count +
      '" shape-rendering="crispEdges" aria-hidden="true"><g fill="#10161c">' + rects + '</g></svg>';
    return qr;
  }

  function downloadQr(qr) {
    var status = document.getElementById('qr-status');
    var count = qr.getModuleCount();
    var margin = 4;
    var scale = 24;
    var size = (count + margin * 2) * scale;

    var canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#10161c';
    for (var row = 0; row < count; row++) {
      for (var col = 0; col < count; col++) {
        if (qr.isDark(row, col)) {
          ctx.fillRect((col + margin) * scale, (row + margin) * scale, scale, scale);
        }
      }
    }

    var link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'no-prumo-qrcode.png';
    document.body.appendChild(link);
    link.click();
    link.remove();
    if (status) status.textContent = 'QR Code baixado.';
  }

  var qr = buildQr();
  var btn = document.getElementById('qr-download');
  if (btn) {
    if (qr) {
      btn.addEventListener('click', function () { downloadQr(qr); });
    } else {
      btn.hidden = true;
    }
  }

  // ---------- ano no rodapé ----------
  var year = document.getElementById('ano');
  if (year) year.textContent = String(new Date().getFullYear());

  // ---------- entrada suave ----------
  var items = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
