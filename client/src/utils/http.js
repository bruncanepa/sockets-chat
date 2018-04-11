import {API_SERVER_URL} from '../config';

const getHeaders = () => ({'Accept': 'application/json', 'Content-Type': 'application/json'});

export const getHttp = (url) => {
  return fetch(new Request(`${API_SERVER_URL}${url}`, {
      method: 'GET',
      headers: new Headers(getHeaders())
    }))
    .then(response => response.json())
    .catch(error => error);
};

export const postHttp = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: getHeaders(),
      body: data && JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => error);
};

export const putHttp = (url, data) => {
  return fetch(url, {
    method: 'PUT',
    headers: getHeaders(),
      body: data && JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => error);
};

export const deleteHttp = (url) => {
  return fetch(url, {
      method: 'DELETE',
      headers: getHeaders()
    })
    .then(response => response.json())
    .catch(error => error);
};