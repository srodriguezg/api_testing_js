/** environment.js */
require("dotenv").config();

module.exports = {
  API_KEY: process.env.API_KEY || "4p1k3y",
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  USER_TMDB: process.env.USER_TMDB || "defaultUser",
  PASSWORD_TMBD: process.env.PASSWORD_TMBD || "defaultPassword",
};