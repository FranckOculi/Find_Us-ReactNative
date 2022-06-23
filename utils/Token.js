import * as SecureStore from 'expo-secure-store';

class Token {
  async setToken(value) {
    const newValue = 'jwt=' + value;
    return await SecureStore.setItemAsync('jwt', newValue);
  }

  async getToken() {
    return await SecureStore.getItemAsync('jwt');
  }

  async removeToken() {
    return SecureStore.deleteItemAsync('jwt');
  }
}

export default new Token();
