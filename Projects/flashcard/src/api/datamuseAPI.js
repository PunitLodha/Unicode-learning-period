import axios from 'axios';

export const baseUrl = 'http://api.datamuse.com/words?';

const getUrl = (word, type) => {
  if (type === 'syn') {
    return `${baseUrl}rel_syn=${word}`;
  }
  if (type === 'ant') {
    return `${baseUrl}rel_ant=${word}`;
  }
  if (type === 'rhy') {
    return `${baseUrl}rel_rhy=${word}`;
  }
  if (type === 'def') {
    return `${baseUrl}sp=${word}&qe=sp&md=fd&max=1`;
  }
};

export const getSynonyms = async word => {
  const Cachedata = await caches.open('DatamuseCache').then(async cache => {
    const match = await cache.match(getUrl(word, 'syn')).then(async response => {
      if (response) {
        return response.json().then(res => res);
      }
      const result = await axios.get(getUrl(word, 'syn')).then(data => data);
      cache.add(getUrl(word, 'syn'));
      return result;
    });
    return match;
  });
  return Cachedata;
};

export const getAntonyms = async word => {
  const Cachedata = await caches.open('DatamuseCache').then(async cache => {
    const match = await cache.match(getUrl(word, 'ant')).then(async response => {
      if (response) {
        return response.json().then(res => res);
      }
      const result = await axios.get(getUrl(word, 'ant')).then(data => data);
      cache.add(getUrl(word, 'ant'));
      return result;
    });
    return match;
  });
  return Cachedata;
};

export const getRhyme = async word => {
  const Cachedata = await caches.open('DatamuseCache').then(async cache => {
    const match = await cache.match(getUrl(word, 'rhy')).then(async response => {
      if (response) {
        return response.json().then(res => res);
      }
      const result = await axios.get(getUrl(word, 'rhy')).then(data => data);
      cache.add(getUrl(word, 'rhy'));
      return result;
    });
    return match;
  });
  return Cachedata;
};

export const getDefandFreq = async word => {
  const Cachedata = await caches.open('DatamuseCache').then(async cache => {
    const match = await cache.match(getUrl(word, 'def')).then(async response => {
      if (response) {
        return response.json().then(res => res);
      }
      const result = await axios.get(getUrl(word, 'def')).then(data => data);
      cache.add(getUrl(word, 'def'));
      return result;
    });
    return match;
  });
  return Cachedata;
};
