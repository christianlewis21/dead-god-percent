const viewtoggle = document.getElementById("viewtoggle");
        const stylesheet = document.getElementById("stylesheet");
        const advancedgraphics = document.getElementById("advancedgraphics");
        viewtoggle.addEventListener("click", function() {
            if (stylesheet.getAttribute("href") === "analyzerstyles.css") {
                stylesheet.setAttribute("href", "simple.css");
                advancedgraphics.remove()
                const data = localStorage.getItem("processedData");
                document.getElementById("fileContent").textContent = data;

            } else {
                stylesheet.setAttribute("href", "analyzerstyles.css");
                fileContent.textContent = '';
                document.body.appendChild(advancedgraphics);
            }
        });