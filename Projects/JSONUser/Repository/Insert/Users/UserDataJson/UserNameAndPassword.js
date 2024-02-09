let Dal = require("../../../../Dal/Insert/Users/UserDataJson/UserNameAndPassword")

exports.StarFunc = ({inUserName,inPassword}) => {
   return Dal.StarFunc({inUserName,inPassword});
};

