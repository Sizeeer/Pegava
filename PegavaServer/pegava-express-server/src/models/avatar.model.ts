import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { Models } from ".";

export interface AvatarAttributes {
  id: number;
  url: string;
  userId: number;
  updatedAt: string;
  createdAt: string;
}

export interface AvatarCreateAttributes
  extends Optional<AvatarAttributes, "id" | "createdAt" | "updatedAt"> {}

export class Avatar
  extends Model<AvatarAttributes, AvatarCreateAttributes>
  implements AvatarAttributes
{
  // https://sequelize.org/master/manual/typescript.html
  public static associations: {};

  id: number;
  url: string;
  userId: number;
  readonly updatedAt: string;
  readonly createdAt: string;

  static associate(models: Models) {
    Avatar.belongsTo(models.User, { as: "user", foreignKey: "userId" });
  }
}

export default (sequelize: Sequelize) => {
  Avatar.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      url: { type: DataTypes.STRING, allowNull: false },
      userId: {
        type: DataTypes.INTEGER,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "Avatars",
      modelName: "Avatar",
    }
  );
  return Avatar;
};
