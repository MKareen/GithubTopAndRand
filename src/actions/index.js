import axios from 'axios';
import _ from 'lodash';

export const FETCH_TOP = 'fetch-top';
export const FETCH_RAND = 'fetch-rand';


export function fetchTopRepo() {
  const request = axios.get('https://api.github.com/search/repositories?q=react+language:javascript&sort=stars&order=desc')
  return {
    type: FETCH_TOP,
    payload: request
  };
}

export function fetchRandRepo() {
  const request = axios.get(`https://api.github.com/repositories?since=${_.random(0, 1000)}`);
  return {
    type: FETCH_RAND,
    payload: request
  };
}