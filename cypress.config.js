const mysql = require('mysql2');

const queryDatabase = ({ query }) => {
  const connection = mysql.createConnection({
    host: 'mysql-13db5188-andrewamin878-7bf6.h.aivencloud.com',
    port: 26841,
    user: 'avnadmin',
    password: 'AVNS_f2LW-Eh_51S9AQ4cd1K',
    database: 'defaultdb',
    ssl: {
      rejectUnauthorized: false,
    },
  });

  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) {
        return reject(err);
      }

      connection.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }

        resolve(results);
        connection.end();
      });
    });
  });
};

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        queryDatabase,
      });
      return config;
    },specPattern: ["cypress/e2e/mysqltest/*"],
    baseUrl: "https://subscribe.stctv.com/sa-ar",
    chromeWebSecurity: false,
    defaultcommandtimeout: 4500000,
    viewportWidth: 1600,
    viewportHeight: 908,
    pageLoadTimeout:45000000,
    requestTimeout:2500000,
    responseTimeout:2500000,
    retries: {
      runMode: 5,
      openMode: 5,
    },
  },
  
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "configFile": "reporter-config.json"
    }
  
  }
