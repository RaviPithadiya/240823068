const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mca", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const Song = sequelize.define("Song", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Song model created successfully");
  })
  .catch((err) => {
    console.error("Error creating Song model:", err);
  });

Song.create({
  title: "Vandematram",
  category: "Patrotic",
  url: "https://example.com/new-song.mp3",
});

Song.findAll()
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
  })
  .catch((err) => {
    console.error("Error retrieving songs:", err);
  });

Song.update({ title: "Ae mere vatan ke logo" },
    { where: { id: 3 } })
  .then(() => {
    console.log("Song updated successfully");
  })
  .catch((err) => {
    console.error("Error updating song:", err);
  });

Song.findByPk(3)
  .then((song) => {
    if (song) {
      console.log("Song retrieved successfully:", song);
    } else {
      console.log("Song not found");
    }
  })
  .catch((err) => {
    console.error("Error retrieving song:", err);
  });

Song.destroy({ where: { id: 3 } })
  .then(() => {
    console.log("Song deleted successfully");
  })
  .catch((err) => {
    console.error("Error deleting song:", err);
  });
