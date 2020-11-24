// Class to send HTTP Requests (get, post, put, delete)

class HTTPClient {
  constructor(URLBase) {
    this.url = URLBase;
    this.fetchController = null;
  }

  static sendRequest(request) {
    return fetch(request.url, {
      method: request.method,
      headers: request.headers,
      body: JSON.stringify(request.data),
      signal: request.signal,
    }).then(response => {
      if (!response.ok)
        throw new Error('Request response with status ' + response.status);

      // console.log(response);
      return response.json();
    });
  }

  abort() {
    if (this.fetchController !== null) this.fetchController.abort();
  }

  hasAborted() {
    return this.fetchController.signal.aborted;
  }

  get(endpoint) {
    this.fetchController = new AbortController();
    return HTTPClient.sendRequest({
      url: `${this.url}${endpoint}`,
      method: 'GET',
      signal: this.fetchController.signal,
    });
  }

  post(endpoint, data) {
    return HTTPClient.sendRequest({
      url: `${this.url}${endpoint}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data,
    });
  }

  put(endpoint, data) {
    return HTTPClient.sendRequest({
      url: `${this.url}${endpoint}`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data,
    });
  }

  del(endpoint) {
    return HTTPClient.sendRequest({
      url: `${this.url}${endpoint}`,
      method: 'DELETE',
    });
  }
}

export default HTTPClient;
