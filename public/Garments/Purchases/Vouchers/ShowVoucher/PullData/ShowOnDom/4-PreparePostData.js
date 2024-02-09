import PrepareKeysJson from "./PrepareKeys.json" assert {type: 'json'};
import {ReturnRowPK } from "../../urlSearchParams.js";


const StartFunc = () => {
    let jVarLocalRowPk = ReturnRowPK();


    let inFetchPostData = {
        FileNameOnly: PrepareKeysJson.inFileName,
        FolderName: PrepareKeysJson.inFolderName,
        ItemName: PrepareKeysJson.inItemName,
        JsonPk: jVarLocalRowPk.RowPK,
        Screenname: "Create"
    };

    return inFetchPostData;
};


export { StartFunc };