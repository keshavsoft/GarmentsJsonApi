let CommonFromUserFolder = require("../../UserFolder/getDirectories");
let CommonFromgetDirectories = require("../../getDirectories");
let _ = require("lodash");


let AsObject = async ({ inDataPK }) => {
    console.log("inDataPK--",inDataPK);
    let LocalDataPK = inDataPK;
    let LocalReturnObject = {};
    LocalReturnObject.Folders = {};

    let LocalArray = CommonFromgetDirectories.StartFunc({ inDataPK: LocalDataPK });

    const result = await Promise.all(LocalArray.map(async (file) => {
        let LoopInsideFile = await CommonFromUserFolder.AsObjects({
            inFolderName: file,
            inDataPK: LocalDataPK
        });

        return await {
            FolderName: file,
            Files: LoopInsideFile
        };
    }));

    let LocalAltered = result.map(element => {
        let LoopInsideFile = JSON.parse(JSON.stringify(element));
        LoopInsideFile.Files = {};

        Object.entries(element.Files).forEach(
            ([FileKey, FileValue]) => {
                LoopInsideFile.Files[FileKey] = JSON.parse(JSON.stringify(FileValue));

                Object.entries(FileValue.Items).forEach(
                    ([ItemKey, ItemValue]) => {
                        LoopInsideFile.Files[FileKey].Items[ItemKey] = JSON.parse(JSON.stringify(ItemValue));

                        Object.entries(ItemValue.Screens).forEach(
                            ([ScreenKey, ScreenValue]) => {
                                LoopInsideFile.Files[FileKey].Items[ItemKey].Screens[ScreenKey] = JSON.parse(JSON.stringify(ScreenValue));

                                Object.entries(ScreenValue.TableColumnsObject).forEach(
                                    ([ColumnKey, ColumnValue]) => {
                                        LoopInsideFile.Files[FileKey].Items[ItemKey].Screens[ScreenKey].TableColumnsObject[ColumnKey] = {
                                            DataAttribute: ColumnValue.DataAttribute,
                                            DisplayName: ColumnValue.DisplayName,
                                            DefaultValue:ColumnValue.DefaultValue,
                                            TextAlign:ColumnValue.TextAlign
                                        };
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );

        return LoopInsideFile;
    });

    //  console.log("result---------- : ", LocalAltered[0].Files.Accounts.Items.Accounts.Screens.Create.TableColumnsObject.pk);

    LocalAltered.forEach(element => {
        LocalReturnObject.Folders[element.FolderName] = element;
    });

    return await LocalReturnObject;
};
module.exports = { AsObject };
