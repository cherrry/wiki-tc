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

window.setInterval(function() {
  makeNoConvertInTc();
  cleanVariantsMenu();
}, 1000 / 17);
