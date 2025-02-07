document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById('myFile');
    let positionTextMap = {};
    let positionBooleanMap = {};
    fetch('achievements.json')
        .then(response => response.json())
        .then(data => {
            positionTextMap = data;
        });
    
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
                    const achievementPosition = position - 32;
                    positionBooleanMap[achievementPosition] = booleanValue;
                    if (!booleanValue) {
                        const text = positionTextMap[achievementPosition.toString()];
                        if (typeof text === 'string') {
                            output += `${text}\n`;
                        } else if (typeof text === 'object') {
                            output += `${JSON.stringify(text)}\n`;
                        } else {
                            output += `No text for position ${achievementPosition}\n`;
                        }
                    }
                }
                localStorage.setItem("processedData", output);
                localStorage.setItem("positionBooleanMap", JSON.stringify(positionBooleanMap));
                window.location.href = 'analyzer.html';
            };
            reader.readAsArrayBuffer(file);
        } else {
            alert('File is not a valid save file.');
        }
    });

    function readHexPosition(dataView, position) {
        if (position < 0 || position >= dataView.byteLength) {
            throw new Error("Position out of bounds");
        }
        const value = dataView.getUint8(position);
        return value === 0x01 ? true : value === 0x00 ? false : null;
    }
});