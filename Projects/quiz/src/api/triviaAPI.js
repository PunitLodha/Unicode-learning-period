import axios from 'axios';

const getRandomQuestions = () => {
  const results = axios
    .get('https://opentdb.com/api.php?amount=10&encode=url3986&type=multiple')
    .then(data => data);
  return results;
};

export default getRandomQuestions;
