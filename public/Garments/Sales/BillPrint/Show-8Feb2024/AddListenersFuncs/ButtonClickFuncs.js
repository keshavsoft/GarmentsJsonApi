// import { StartFunc as StartFuncEntry } from "./BlockPrintFiles/Entry.js";
// import { StartFunc as StartFuncEntry2 } from "./BlockPrintFiles 2/Entry.js";
// import { StartFunc as StartFuncEntry3 } from "./BlockPrintFiles 3/Entry.js";
import { StartFunc as StartFuncEntry4 } from "./BlockPrintFiles 4/Entry.js";

let StartFunc = () => {
    // let LocalPrintId = document.getElementById("PrintId");
    // LocalPrintId.addEventListener("click", StartFuncEntry)

    // let LocalPrintId1 = document.getElementById("PrintId2");
    // LocalPrintId1.addEventListener("click", StartFuncEntry2)

    // let LocalPrintId2 = document.getElementById("PrintId3");
    // LocalPrintId2.addEventListener("click", StartFuncEntry3)

    let LocalPrintId3 = document.getElementById("PrintId4");
    LocalPrintId3.addEventListener("click", StartFuncEntry4)

   
};

export { StartFunc };