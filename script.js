const pathname = window.location.pathname;

if (pathname.indexOf('/wiki/') == 0 || pathname.indexOf('/zh-hans/') == 0 || pathname.indexOf('/zh-cn/') == 0 || pathname.indexOf('/zh-sg/') == 0 || pathname.indexOf('/zh-my/') == 0) {
  let segments = pathname.split('/');
  segments[1] = 'zh-hk';
  window.location.pathname = segments.join('/');
}

function makeNoConvertInTc() {
  const link = document.querySelector('li[id^="ca-varlang-"] a[hreflang="zh"]');
  link.textContent = '不轉換';
}

function cleanVariantsMenu() {
  const links = document.querySelectorAll('li[id^="ca-varlang-"] a[hreflang^="zh-Hans"]');
  if (links == null) {
    return;
  }
  links.forEach(function (link) {
    const item = link.parentNode;
    const list = item.parentNode;
    list.removeChild(item);
  });
}

window.setTimeout(function() {
  makeNoConvertInTc();
  cleanVariantsMenu();
}, 1000);
