// Sample service to make network call

import { API, NetworkManager, ServerConfig} from "./core";

export class AuthService {
  static async loginByEmail(payload) {
    const instance = new NetworkManager(API.AUTH.LOGIN, payload);
    return await instance.httpRequest(false);
  }

  static async loginByFirebase(payload) {
    const instance = new NetworkManager(API.AUTH.FIREBASELOGIN, payload, {key: ServerConfig.FIREBASE_API_KEY});
    return await instance.httpRequest(false);
  }

  static async SignUpByFirebase(payload) {
    const instance = new NetworkManager(API.AUTH.FIREBASESIGNUP, payload, {key: ServerConfig.FIREBASE_API_KEY});
    return await instance.httpRequest(false);
  }
}
