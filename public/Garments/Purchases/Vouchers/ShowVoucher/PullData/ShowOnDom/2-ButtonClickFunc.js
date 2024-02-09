import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";

let StartFunc = async () => {

    let jVarLocalPreparePostData = StartFuncPreparePostData();
    let response = await StartFuncFetchFunc({ inBodyData: jVarLocalPreparePostData });
    console.log("response:",response);
    return await response;
};


export { StartFunc };