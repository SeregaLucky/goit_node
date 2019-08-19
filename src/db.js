const MongoClient = require("mongodb").MongoClient;

const haveWayDb = {
  db: null
};

// Database Name
const dbName = "costs";

exports.connect = (url, options, done) => {
  if (haveWayDb.db) return done();

  MongoClient.connect(url, options, (err, database) => {
    if (err) return done(err);

    haveWayDb.db = database.db(dbName);
    done();
  });
};

exports.get = () => haveWayDb.db;
