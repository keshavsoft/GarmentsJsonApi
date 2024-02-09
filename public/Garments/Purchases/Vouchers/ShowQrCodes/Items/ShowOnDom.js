import { StartFunc as FetchFunc } from "./FetchFunc.js";

let StartFunc = async ({ inProjectName }) => {
    let jVarLocalFromFetch = await FetchFunc({ inProjectName });

    if (jVarLocalFromFetch.KTF) {
        let jVarLocalItemsDataListId = document.getElementById("ItemsDataListId");
        if (jVarLocalItemsDataListId !== null) {
            var options = '';

            for (var i = 0; i < jVarLocalFromFetch.JsonData.length; i++) {
                options += `<option value="${jVarLocalFromFetch.JsonData[i].ItemName}">${jVarLocalFromFetch.JsonData[i].ItemName}</option>`;
            }

            jVarLocalItemsDataListId.innerHTML = options;
        };
    };
};

let StartFunc1 = async ({ inProjectName }) => {
    let jVarLocalFromFetch = await FetchFunc({ inProjectName });

    if (jVarLocalFromFetch.KTF) {
        let jVarLocalItemsDataListId = document.getElementById("MastersDataListId");
        jVarLocalFromFetch.JsonData.forEach((element) => {
            const node = document.createElement("option");
            node.value = element.ItemName
            jVarLocalItemsDataListId.appendChild(node);

        })
    };
};

export { StartFunc };