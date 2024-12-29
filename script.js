function readData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const fileContent = e.target.result;
            console.log("Binary content:", fileContent);

            const textContent = new TextDecoder().decode(fileContent);

            localStorage.setItem("processedData", textContent);

            window.location.href = "analyzer.html";
        };

        reader.onerror = function () {
            alert("An error occurred while reading the file.");
            console.error("FileReader error:", reader.error);
        };

        reader.readAsArrayBuffer(file);
    } else {
        alert("No file selected or file unavailable.");
    }
}
