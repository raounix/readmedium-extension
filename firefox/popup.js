document.getElementById('submitBtn').addEventListener('click', function() {
  let urlPart = document.getElementById('urlInput').value.trim();
  if (urlPart) {
    let fullUrl = "https://readmedium.com/" + urlPart;
    browser.tabs.create({ url: fullUrl });
  }
});
