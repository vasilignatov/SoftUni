function attachEventsListeners() {
    
    document.getElementById('convert').addEventListener('click', convertData);
    
    const convertionTable = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001, 
        mi: 1609.34,
        yrd: 0.9144, 
        ft: 0.3048,
        in: 0.0254
    }

    function convertData() {
        const output = document.getElementById('outputDistance');
        const input = Number(document.getElementById('inputDistance').value);
        const inputUnits = document.getElementById('inputUnits').value;
        const outputUnits = document.getElementById('outputUnits').value;

        if(input != '') {
            output.value = convertionTable[inputUnits] * input / convertionTable[outputUnits];
        }
    }
}