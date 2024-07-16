function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    let idPart = parts[0];
   
   // Vérifier les crochets < et >
   if (!rawData.startsWith('<')) {
    throw new Error("rawData must start with '<'");
}
if (!rawData.endsWith('>')) {
    throw new Error("rawData must end with '>'");
}
    
if (!rawData.startsWith('<') || !rawData.endsWith('>')) {
    throw new Error("rawData must start with '<' and end with '>'");
}

if (isNaN(idPart)) {
    throw new Error("id must be a number");
}

if (!/^\d+$/.test(rawData)) {
    throw new Error("rawData must contain only numbers between '<' and '>'");
}
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;