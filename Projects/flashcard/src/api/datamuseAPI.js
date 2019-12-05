import axios from 'axios';

export const baseUrl = 'http://api.datamuse.com/words?';

export const getSynonyms = async word => {
  const result = await axios.get(`${baseUrl}rel_syn=${word}`).then(data => data);
  return result;
};

export const getAntonyms = async word => {
  const result = await axios.get(`${baseUrl}rel_ant=${word}`).then(data => data);
  return result;
};

export const getRhyme = async word => {
  const result = await axios.get(`${baseUrl}rel_rhy=${word}`).then(data => data);
  return result;
};

export const getDefandFreq = async word => {
  const result = await axios.get(`${baseUrl}sp=${word}&qe=sp&md=fd&max=1`).then(data => data);
  return result;
};
