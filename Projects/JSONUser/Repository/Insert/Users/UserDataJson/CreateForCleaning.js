let Dal = require("../../../../Dal/Insert/Users/UserDataJson/CreateForCleaning")

exports.GetFunc = ({ inUserName, inPassword }) => {
   return Dal.GetFunc({ inUserName, inPassword });
};