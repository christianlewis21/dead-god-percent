document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById('myFile');

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.name.endsWith('.dat')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const arrayBuffer = e.target.result;
                const dataView = new DataView(arrayBuffer);
                const processedData = processBinaryData(dataView);
                console.log("Processed Data:", processedData);
                localStorage.setItem("processedData", processedData);
                console.log("Data stored in localStorage");
                window.location.href = 'analyzer.html';
            };
            reader.readAsArrayBuffer(file);
        } else {
            alert('File is not a valid save file. A valid save file can be found at C:\\Program Files(x86)\\Steam\\userdata\\[SteamID]\\250900\\remote\\rep+persistentgamedata[1,2,3].dat');
        }
    });

    function processBinaryData(dataView) {
        let output = '';
        for (let i = 0; i < dataView.byteLength; i += 4) {
            if (i + 4 <= dataView.byteLength) {
                const value = dataView.getInt32(i, true);
                output += `Byte ${i}: ${value}\n`;
            } else {
                const remainingBytes = dataView.byteLength - i;
                let value = 0;
                for (let j = 0; j < remainingBytes; j++) {
                    value |= dataView.getUint8(i + j) << (j * 8);
                }
                output += `Byte ${i} (remaining ${remainingBytes} bytes): ${value}\n`;
            }
        }
        return output;
    }
});