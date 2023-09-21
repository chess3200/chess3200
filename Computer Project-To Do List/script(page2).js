
        function displayName() {
            var name = document.getElementById("nameInput").value;
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "<p>Enter Name: " + name + "</p>";

            // Redirect to another page with the name as a parameter
            window.location.href = "Page3.html?name=" + encodeURIComponent(name);
        }
