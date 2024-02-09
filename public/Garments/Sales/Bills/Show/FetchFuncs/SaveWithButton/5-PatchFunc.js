// import ApiConfigJson from '../../../../../Admin/ApiConfig.json' assert {type: 'json'};
import { ConfigObject } from '../../../../../ApiConfig.js';
import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";


const StartFunc = async ({ inFetchBody }) => {
    let jFetchUrl = `/${ConfigObject.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking/InsertWithPk`;

    let jLocalFetchConfig = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    };

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    let jVarLocalResponseData = await response.json();

    StartFuncAfterFetchFunc({ inResponse: jVarLocalResponseData });

    // return await response.status;

}

export { StartFunc };