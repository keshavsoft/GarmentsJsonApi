const StartFunc = () => {
    let jVarLocalBillData = localStorage.getItem("BillData");
    let jVarLocalBillDataAsJson = JSON.parse(jVarLocalBillData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForFirmHeading");
    let k3 = document.getElementById("TemplateForFirmHeadId");

     // k1.innerHTML += k3.innerHTML;
     k1.innerHTML += `               <span class="inner-pre" style="font-size: 33px; font-weight: bold;">MAGUVA</span>\n`;
     k1.innerHTML += `        50-50-30/12/2, vandana plaza,\n`
     k1.innerHTML += `            GURUDWARA,VISHAKAPATNAM,\n`
     k1.innerHTML += `    GSTIN:37ACJPL9300K2ZB,Ph:08912796666,\n`
     k1.innerHTML += `                State Code:37\n`
     // k1.innerHTML += k2.innerHTML;
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `               <span class="inner-pre" style="font-size: 16px; font-weight: bold;">TAX INVOICE</span> \n`
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `  <span class="inner-pre" style="font-size: 16px; font-weight: bold;">Customer :   ${jVarLocalBillDataAsJson.CustomerName}</span>\n`;
    k1.innerHTML += `  <span class="inner-pre" style="font-size: 16px; font-weight: bold;">Phone    :   ${jVarLocalBillDataAsJson.CustomerNumber}</span>\n`;
    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `  Bill : ${jVarLocalBillDataAsJson.BillNumber}   Date : ${jVarLocalBillDataAsJson.Date}\n`;
    k1.innerHTML += `  TimeStamp : ${jVarLocalBillDataAsJson.DateTime}\n`;

};

export { StartFunc };