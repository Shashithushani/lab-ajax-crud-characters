const axios = require("axios");

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    return await axios.get(`${this.BASE_URL}/characters`);
  }

  async getOneRegister(id) {
    return await axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  async createOneRegister(newCharacter) {
    return await axios.post(`${this.BASE_URL}/characters`, newCharacter);
  }

  async updateOneRegister(id, updateInfo) {
    return await axios.patch(`${this.BASE_URL}/characters ${id}`, updateInfo);
  }

  async deleteOneRegister(id) {
    return await axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
// function card(props) {
//   const { id, name, occupation, isCartoon, weapon } = props;
//   return (
//     <div>
//       <p> Id : {id}</p>
//       <p>Name : {name}</p>
//       <p>Occupation : {occupation}</p>
//       <p>Is a Cartoon? : {isCartoon}</p>
//       <p>Weapon : {weapon}</p>
//     </div>
//   );
// }
// module.exports = APIHandler;
