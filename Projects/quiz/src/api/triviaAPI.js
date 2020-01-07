import axios from 'axios';

const mapCatergoryToIDs = {
  general_knowledge: '9',
  history: '23',
  video_games: '15',
  sports: '21',
  mythology: '20',
  computer: '18',
  maths: '19',
  geography: '22',
};

let id;
const getQuestions = category => {
  if (category !== 'random') {
    id = `&category=${mapCatergoryToIDs[category]}`;
  } else {
    id = '';
  }
  const results = axios
    .get(`https://opentdb.com/api.php?amount=10&encode=url3986&type=multiple${id}`)
    .then(data => data);
  return results;
};

export default getQuestions;
