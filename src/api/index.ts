export class ApiService {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getPersons(endpoint: string) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'GET',
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  }
}
