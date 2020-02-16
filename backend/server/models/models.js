const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class ArtistModel extends Model {}
ArtistModel.init({
	
}, { sequelize, modelName: 'artist' });


module.exports = (sequelize, DataTypes) => {
    let Artist = sequelize.define('User',{
        email : DataTypes.STRING,
        name: DataTypes.STRING,
				artistName: DataTypes.STRING,
				artistAddress: DataTypes.STRING,
				tokenAddress: DataTypes.STRING
    });

    User.associate = function(models) {
        User.hasMany(models.Post,{
            foreignKey : 'userId',
            as : 'posts'
        });
    };
    return User;
}


Artist.sync().then(() => {
	console.log('created Artist table')
}).finally(() => {
    sequelize.close();
})
