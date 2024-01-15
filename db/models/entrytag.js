const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EntryTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Entry, Tag }) {
      this.belongsTo(Entry, { foreignKey: 'id' });
      this.belongsTo(Tag, { foreignKey: 'id' });
    }
  }
  EntryTag.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      entryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Entries',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Tags',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'EntryTag',
    }
  );
  return EntryTag;
};
