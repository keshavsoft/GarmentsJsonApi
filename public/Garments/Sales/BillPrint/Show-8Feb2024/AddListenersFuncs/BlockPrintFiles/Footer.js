const StartFunc = () => {
    let jVarLocalInventoryData = localStorage.getItem("GstData");
    let jVarLocalInventoryDataAsJson = JSON.parse(jVarLocalInventoryData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForGridFooter");
    let k3 = document.getElementById("TemplateForTerms");

    k1.innerHTML += k2.innerHTML;
    jVarLocalInventoryDataAsJson.forEach(element => {
        let jVarLoopInsideGST = `${element.GST}%`;
        let jVarLoopInsideGstAmount = `${element.GstAmount}`;
        let jVarLoopInsideCGSTKey = `${element.CGSTKey}%`;
        let jVarLoopInsideCGSTValue = `${element.CGSTValue}`;
        let jVarLoopInsideSGSTKey = `${element.SGSTKey}%`;
        let jVarLoopInsideSGSTValue = `${element.SGSTValue}`;

        // k1.innerHTML +=` ${jVarLoopInsideGST}    ${jVarLoopInsideGstAmount}      ${jVarLoopInsideCGSTKey}   ${jVarLoopInsideCGSTValue}   ${jVarLoopInsideSGSTKey}    ${jVarLoopInsideSGSTValue}\n`;

        k1.innerHTML += `${jVarLoopInsideGST.toString().padStart(2, " ")}`;
        k1.innerHTML += `${" ".repeat(6)}${jVarLoopInsideGstAmount.padEnd(4, " ")}`;
        k1.innerHTML += `${jVarLoopInsideCGSTKey.padStart(9)}`;
        k1.innerHTML += `${jVarLoopInsideCGSTValue.padStart(7)}`;
        k1.innerHTML += `${jVarLoopInsideSGSTKey.padStart(9)}`;
        k1.innerHTML += `${jVarLoopInsideSGSTValue.padStart(9)}\n`;
    });

    let jVarLocalGST = jVarLocalInventoryDataAsJson.map((element) => {
        return element.GstAmount;
    });
    let jVarLocalCGSTValue = jVarLocalInventoryDataAsJson.map((element) => {
        return parseFloat(element.CGSTValue);
    });
    let jVarLocalSGSTValue = jVarLocalInventoryDataAsJson.map((element) => {
        return parseFloat(element.SGSTValue);
    });
    let jvarLocalGstTaxaBleAmount = jVarLocalGST.reduce((a, b) => a + b, 0).toFixed(2);
    let jvarLocalTotalCGSTValue = jVarLocalCGSTValue.reduce((a, b) => a + b, 0).toFixed(2);
    let jvarLocalTotalSGSTValue = jVarLocalSGSTValue.reduce((a, b) => a + b, 0).toFixed(2);

    // k1.innerHTML += `----------------------------------------------\n`
    // k1.innerHTML += `Total: ${jvarLocalGstTaxaBleAmount.padStart(2, " ")}`;
    // k1.innerHTML += ` ${" ".repeat(9)}${jvarLocalTotalCGSTValue.padEnd(15)}`;
    // k1.innerHTML += ` ${jvarLocalTotalSGSTValue}\n`;
    // k1.innerHTML += `----------------------------------------------\n`

    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `Total:  ${jvarLocalGstTaxaBleAmount.padStart(5)}`;
    k1.innerHTML += `${jvarLocalTotalCGSTValue.padStart(13)}`;
    k1.innerHTML += `${jvarLocalTotalSGSTValue.padStart(18)}\n`;
    k1.innerHTML += `----------------------------------------------\n`


    k1.innerHTML += k3.innerHTML;



};


export { StartFunc };