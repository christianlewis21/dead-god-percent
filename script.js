function readData(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const fileContent = e.target.result;
        console.log("Binary content:", fileContent);

        const textContent = new TextDecoder().decode(fileContent);

        localStorage.setItem("processedData", textContent);

        window.location.href = "analyzer.html";
    };

    reader.readAsArrayBuffer(file);
}
