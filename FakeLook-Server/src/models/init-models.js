var DataTypes = require("sequelize").DataTypes;
var _Group = require("./Group");
var _Post = require("./Post");
var _Posts_Tags = require("./Posts_Tags");
var _Tag = require("./Tag");
var _User = require("./User");
var _User_Authentication = require("./User_Authentication");
var _Users_Blocked = require("./Users_Blocked");
var _Users_Friends = require("./Users_Friends");
var _Users_Group_Friends = require("./Users_Group_Friends");
var _Users_Likes = require("./Users_Likes");

function initModels(sequelize) {
  var Group = _Group(sequelize, DataTypes);
  var Post = _Post(sequelize, DataTypes);
  var Posts_Tags = _Posts_Tags(sequelize, DataTypes);
  var Tag = _Tag(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var User_Authentication = _User_Authentication(sequelize, DataTypes);
  var Users_Blocked = _Users_Blocked(sequelize, DataTypes);
  var Users_Friends = _Users_Friends(sequelize, DataTypes);
  var Users_Group_Friends = _Users_Group_Friends(sequelize, DataTypes);
  var Users_Likes = _Users_Likes(sequelize, DataTypes);

  Users_Group_Friends.belongsTo(Group, { as: "Group", foreignKey: "GroupId"});
  Group.hasMany(Users_Group_Friends, { as: "Users_Group_Friends", foreignKey: "GroupId"});
  Users_Likes.belongsTo(Post, { as: "Post", foreignKey: "PostId"});
  Post.hasMany(Users_Likes, { as: "Users_Likes", foreignKey: "PostId"});
  Post.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Post, { as: "Posts", foreignKey: "UserId"});
  Tag.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Tag, { as: "Tags", foreignKey: "UserId"});
  Users_Blocked.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Users_Blocked, { as: "Users_Blockeds", foreignKey: "UserId"});
  Users_Blocked.belongsTo(User, { as: "UserBlocked", foreignKey: "UserBlockedId"});
  User.hasMany(Users_Blocked, { as: "UserBlocked_Users_Blockeds", foreignKey: "UserBlockedId"});
  Users_Friends.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Users_Friends, { as: "Users_Friends", foreignKey: "UserId"});
  Users_Friends.belongsTo(User, { as: "UserFriend", foreignKey: "UserFriendId"});
  User.hasMany(Users_Friends, { as: "UserFriend_Users_Friends", foreignKey: "UserFriendId"});
  Users_Group_Friends.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Users_Group_Friends, { as: "Users_Group_Friends", foreignKey: "UserId"});
  Users_Likes.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Users_Likes, { as: "Users_Likes", foreignKey: "UserId"});

  return {
    Group,
    Post,
    Posts_Tags,
    Tag,
    User,
    User_Authentication,
    Users_Blocked,
    Users_Friends,
    Users_Group_Friends,
    Users_Likes,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
