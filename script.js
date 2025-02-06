document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById('myFile');

    function readHexPosition(dataView, position) {
        if (position < 0 || position >= dataView.byteLength) {
            throw new Error("Position out of bounds");
        }
        const value = dataView.getUint8(position);
        return value === 0x01 ? true : value === 0x00 ? false : null;
    }

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.name.endsWith('.dat')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const arrayBuffer = e.target.result;
                const dataView = new DataView(arrayBuffer);
                let output = '';
                for (let position = 0x21; position <= 0x2A0; position++) {
                    const booleanValue = readHexPosition(dataView, position);
                    if (!booleanValue) {
                        output += `${position - 32}\n`;
                    }
                }
                localStorage.setItem("processedData", output);
                console.log("Data stored in localStorage");
                window.location.href = 'analyzer.html';
            };
            reader.readAsArrayBuffer(file);
        } else {
            alert('File is not a valid save file. A valid save file can be found at C:\\Program Files(x86)\\Steam\\userdata\\[SteamID]\\250900\\remote\\rep+persistentgamedata[1,2,3].dat');
        }
    });
});