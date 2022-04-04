import axios from 'axios';

class Tesla {
  constructor(email, password) {
    this.email = email;
    this.password = password;

    this.token = null;
  }

  /*
   * Handle requests to Powerwall RESTFul endpoints
   */
  static async #request(endpoint, method, body = {}, headers = {}, retries = 3) {
    try {
      const response = await axios({
        url: `https://${process.env.TESLA_ADDR}/api/${endpoint}`,
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
        data: body,
        raxConfig: {
          retry: retries,
        },
      });
      const { data } = await response;
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  /*
   * Handle logging into the Powerwalls RESTFul endpoint
   */
  async login() {
    try {
      const response = await Tesla.#request('login/Basic', 'POST', {
        clientInfo: {
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        email: this.email,
        password: this.password,
        username: 'customer',
      });

      this.token = response.token;
    } catch (error) {
      throw new Error(error);
    }
  }

  /*
   * Query an aggregate of Battery, Load, Site and Solar metrics
   */
  async aggregates() {
    try {
      const response = await Tesla.#request('meters/aggregates', 'GET', {}, { Authorization: `Bearer ${this.token}` });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  /*
   * Query Powerwall metrics
   */
  async powerwalls() {
    try {
      const response = await Tesla.#request('powerwalls', 'GET', {}, { Authorization: `Bearer ${this.token}` });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  /*
   * Query Powerwall Grid Status
   */
  async gridStatus() {
    try {
      const response = await Tesla.#request('system_status/grid_status', 'GET', {}, { Authorization: `Bearer ${this.token}` });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  /*
   * Query Powerwall State of Energy
   */
  async soe() {
    try {
      const response = await Tesla.#request('system_status/soe', 'GET', {}, { Authorization: `Bearer ${this.token}` });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  /*
   * Query Powerwall Site metrics
   */
  async sitemaster() {
    try {
      const response = await Tesla.#request('sitemaster', 'GET', {}, { Authorization: `Bearer ${this.token}` });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Tesla;
