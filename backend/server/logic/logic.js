const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// placeholder token
const dummyToken = {
	"contractAddress": '0x00000000000000000000000000000000',
	"id": 1,
	"supply": 20, // total supply
	"cost": 0.5, // in eth
	"nextCost": 0.6, // next cost
	"sellValue": 0.4 // value to sell
}

/** Get an artist **/
function getArtistData(artistId) {
	return {
		artistId: artistId,

	}
};

function createArtist(name, contractAddress, offers) {
	// todo feewet
};

function getTokenDataForArtist(artistId) {
	return {
		tokenId: dummyToken.id,
		supply: dummyToken.supply,
		cost: dummyToken.cost,
		nextCost: dummyToken.nextCost,
		sellValue: dummyToken.sellValue
	}
};