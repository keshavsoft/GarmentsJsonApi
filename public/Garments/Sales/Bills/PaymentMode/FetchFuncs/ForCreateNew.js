let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
    let jVarLocalRowPK = getUrlQueryParams({ inGetKey: "RowPK" });


    try {
        let inFetchPostData = {
            FolderName: inFolderName,
            FileNameOnly: inFileName,
            ItemName: inItemName,
            ScreenName: "Create",
            JsonPk:jVarLocalRowPK
        };

        let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/RowData`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        const data = await response.json();

        if (data.KTF) {
            LocalReturnObject.JsonData = data.JsonData;
        };

        LocalReturnObject.KTF = true;
    } catch (error) {
        console.log("error:", error);
    };

    return await LocalReturnObject;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };