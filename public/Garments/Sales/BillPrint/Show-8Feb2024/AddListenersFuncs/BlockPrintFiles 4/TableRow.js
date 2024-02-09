const StartFunc = () => {
    let jVarLocalInventoryData = localStorage.getItem("InventoryData");
    let jVarLocalInventoryDataAsJson = JSON.parse(jVarLocalInventoryData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForGridHeader");

    // k1.innerHTML += k2.innerHTML;
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += ` <span style="font-size: 13px;">#   Code/ItemName                       Rate</span>\n`
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `         <span style="font-size: 13px;">GST%       Discount           G-Rate</span>\n`
    k1.innerHTML += `---------------------------------------------\n`
    jVarLocalInventoryDataAsJson.forEach(element => {
        let jVarLoopInsideItem = `M-${element.pk}/${element.ProductName}`;
        let jVarLoopInsideRate = `${element.UnitRate}`;
        let jVarLoopInsideGST = `${element.GST}`;
        let jVarLoopInsideDisPercentage = `${element.DisPercentage}%-${element.DisRate}`;
        let jVarLoopInsideGrossAmout = `${element.GrossAmout}`;

        k1.innerHTML += `<span style="font-size: 13px;">${element.sno.toString().padStart(2, " ")}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${" ".repeat(4)}${jVarLoopInsideItem.padEnd(24)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideRate.padStart(15)}</span>\n`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGST.padStart(10)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideDisPercentage.padStart(17)}</span>`;
        k1.innerHTML += `<span style="font-size: 13px;">${jVarLoopInsideGrossAmout.padStart(18)}</span>\n`;
        k1.innerHTML += `---------------------------------------------\n`

    });

    let jVarLoopInsideUnitRate = jVarLocalInventoryDataAsJson.map(element => {
        return element.UnitRate;
    });
    let jVarLoopInsideDisCount = jVarLocalInventoryDataAsJson.map(element => {
        return element.DisRate;
    });
    let jvarLocaltoatalUnitRate = jVarLoopInsideUnitRate.reduce((a, b) => a + b, 0)
    let jvarLocaltoatalDisRate = jVarLoopInsideDisCount.reduce((a, b) => a + b, 0)
    let localNetAmount = jvarLocaltoatalUnitRate - jvarLocaltoatalDisRate;

    k1.innerHTML += `${" ".repeat(21)}<span style="font-size: 13px;">Gross Amount    :${jvarLocaltoatalUnitRate.toString().padStart(7, " ")}</span>\n`;
    k1.innerHTML += `${" ".repeat(21)}<span style="font-size: 13px;">Total Discount  :${jvarLocaltoatalDisRate.toString().padStart(7, " ")}</span>\n`;
    // k1.innerHTML += `${" ".repeat(21)}<span style="font-size: 13px;">Total Discount    :   ${jvarLocaltoatalDisRate}</span>\n`;
    k1.innerHTML += `                       <span style="font-size: 16px; font-weight: bold;">Net Amt    :  ${localNetAmount}</span>\n`;

};

export { StartFunc };