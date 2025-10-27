module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define('Komik', {
    id: {
        type: DataTypes.INTEGER,
        autiIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,

    },
    description: {
        type: DataTypes.TEXT,
    },
    author: {
        type: DataTypes.STRING,
    }
    });
    return Komik;
}