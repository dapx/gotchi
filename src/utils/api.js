// Define the api url
const API_BASE_URL = 'https://www.mocky.io/v2/5b3c14ea330000fd26599e55';

const Api = {
  header: {
    secure(jwt) {
      return {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
        'Content-type': 'application/json',
      };
    },
  
    insecure() {
      return {
        Accept: 'application/json',
        'Content-type': 'application/json',
      };
    },
  },

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    // eslint-disable-next-line no-underscore-dangle
    const message = JSON.parse(response._bodyText).error;
    throw new Error(message);
  },

  getJsonContent(response) {
    if (response.status >= 204 && response.status <= 205) return null;
    return response.json();
  },

  insecure_request(endpoint, body, method = 'GET') {
    return fetch(`${API_BASE_URL}/${endpoint}`, {
      method,
      headers: this.header.insecure(),
      body: JSON.stringify(body)
    })
    .then(this.checkStatus)
    .then(this.getJsonContent);
  },

  request(endpoint, jwt) {
    return fetch(`${API_BASE_URL}/secured/${endpoint}`, {
      method: 'GET',
      headers: this.header.secureheader(jwt),
    })
    .then(this.checkStatus)
    .then(this.getJsonContent);
  },

  create(endpoint, jwt, data, method = 'POST') {
    return fetch(`${API_BASE_URL}/secured/${endpoint}`, {
      headers: this.header.secureheader(jwt),
      method,
      body: JSON.stringify(data),
    })
    .then(this.checkStatus)
    .then(this.getJsonContent);
  },

  delete(endpoint, jwt, id, method = 'DELETE') {
    return fetch(`${API_BASE_URL}/secured/${endpoint}/${id}`, {
      headers: this.header.secureheader(jwt),
      method,
    })
    .then(this.checkStatus)
    .then(this.getJsonContent);
  },

  upload(url, file, mimetype, method = 'PUT') {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', mimetype);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.send({ uri: file });
    });
  },
};

export default Api;
