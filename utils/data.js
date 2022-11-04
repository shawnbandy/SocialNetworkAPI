const connection = require('../config/connection');
//*redo this
const { User, Video } = require('../models');
//*redothis
const { getRandomName, getRandomVideos } = require('./data');

const users = [];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random videos that we can add to the database. Includes video responses.

// const getRandomVideos = (int) => {
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       published: Math.random() < 0.5,
//       description: getRandomArrItem(descriptionsBodies),
//       advertiserFriendly: Math.random() < 0.5,
//       responses: [...getVideoResponses(3)],
//     });
//   }
//   return results;
// };

// Create the responses that will be added to each video
// const getVideoResponses = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(possibleResponses);
//   }
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       responseBody: getRandomArrItem(possibleResponses),
//       username: getRandomName(),
//     });
//   }
//   return results;
// };

//*change these exports to what you want to make them
module.exports = { getRandomName, getRandomVideos, getRandomVideos };
