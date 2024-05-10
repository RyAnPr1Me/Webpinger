<!DOCTYPE html>
<html>
<head>
  <style>
    /* Your CSS styles here */
  </style>
</head>
<body>
  <div class="container">
    <h1 class="website-pinger">WEBSITE PINGER</h1>
    <div class="search-box">
      <input id="urlInput" type="text" placeholder="Enter URL">
      <button onclick="pingWebsite()">Ping</button>
    </div>
    <div id="result"></div>

    <script>
      function pingWebsite() {
        var urlInput = document.getElementById("urlInput");
        var url = urlInput.value;

        fetch(url)
          .then(function (response) {
            if (response.ok) {
              displayResult("The website is online.");
            } else {
              displayResult("The website is offline.");
            }
          })
          .catch(function (error) {
            displayResult("An error occurred while pinging the website.");
          });
      }

      function displayResult(message) {
        var resultElement = document.getElementById("result");
        resultElement.textContent = message;
      }
    </script>
  </div>
</body>
</html>