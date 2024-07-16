function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
   
   
    
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;