const StartFunc = () => {
    let jVarLocalInventoryData = localStorage.getItem("InventoryData");
    let jVarLocalInventoryDataAsJson = JSON.parse(jVarLocalInventoryData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForGridHeader");

    k1.innerHTML += k2.innerHTML;

    jVarLocalInventoryDataAsJson.forEach(element => {
        let jVarLoopInsideItem = `M-${element.pk}/${element.ProductName}`;
        let jVarLoopInsideRate = `${element.UnitRate}`;
        let jVarLoopInsideGST = `${element.GST}`;
        let jVarLoopInsideDisPercentage = `${element.DisPercentage}%-${element.DisRate}`;
        let jVarLoopInsideGrossAmout = `${element.GrossAmout}`;

        k1.innerHTML += `${element.sno.toString().padStart(2, " ")}`;
        k1.innerHTML += `${" ".repeat(4)}${jVarLoopInsideItem.padEnd(24)}`;
        k1.innerHTML += `${jVarLoopInsideRate.padStart(15)}\n`;
        k1.innerHTML += `${jVarLoopInsideGST.padStart(10)}`;
        k1.innerHTML += `${jVarLoopInsideDisPercentage.padStart(17)}`;
        k1.innerHTML += `${jVarLoopInsideGrossAmout.padStart(18)}\n`;
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

    k1.innerHTML += `                     Gross Amount    :   ${jvarLocaltoatalUnitRate}\n`;
    k1.innerHTML += `                   Total Discount    :    ${jvarLocaltoatalDisRate}\n`;
    k1.innerHTML += `                          Net Amt    :   ${localNetAmount}\n`;

};

export { StartFunc };