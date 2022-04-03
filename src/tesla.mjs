import fetch from 'node-fetch';

class Tesla {
  constructor(email, password) {
    this.email = email
    this.password = password

    this.token = null
  }

  async #request(endpoint, method, body = {}, headers= {}) {
    let payload = {
      method: method,
      headers: Object.assign({
        'Content-Type': 'application/json'
      }, headers)
    }

    // The GET and HEAD methods cannot contain a body with their requests
    if(!['GET', 'HEAD'].includes(method)) {
      payload['body'] = JSON.stringify(body)
    }

    try {
      const response = await fetch(`https://${process.env.TESLA_ADDR}/api/${endpoint}`, payload)
      const data = await response.json()

      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  async login() {
      try {
        const response = await this.#request('login/Basic','POST', {
          clientInfo: {
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
          email: this.email,
          password: this.password,
          username: 'customer',
        })

        this.token = response.token
      } catch (error) {
        throw new Error(error)
      }
  }

  async aggregates() {
    try {
      const response = await this.#request('meters/aggregates', 'GET', {}, {'Authorization': `Bearer ${this.token}`})
      return response
    } catch (error) {
      throw new Error(error)
    }
  }

  async powerwalls() {
    try {
      const response = await this.#request('powerwalls', 'GET', {}, {'Authorization': `Bearer ${this.token}`})
      return response
    } catch (error) {
      throw new Error(error)
    }
  }

  async gridStatus() {
    try {
      const response = await this.#request('system_status/grid_status', 'GET', {}, {'Authorization': `Bearer ${this.token}`})
      return response
    } catch (error) {
      throw new Error(error)
    }
  }

  async soe() {
    try {
      const response = await this.#request('system_status/soe', 'GET', {}, {'Authorization': `Bearer ${this.token}`})
      return response
    } catch (error) {
      throw new Error(error)
    }
  }

  async sitemaster() {
    try {
      const response = await this.#request('sitemaster', 'GET', {}, {'Authorization': `Bearer ${this.token}`})
      return response
    } catch (error) {
      throw new Error(error)
    }
  }

}

export default Tesla
