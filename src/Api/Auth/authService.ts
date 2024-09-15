import {useRTL} from 'Hooks/useRTL';
import apiHelper from 'Utilts/ApiHelper';
import {config} from 'Constants/config';
import axios from 'axios';
const {isRTL} = useRTL();

class AuthService {
  private baseURL = config.production.AUTH_URL;

  public async Login(payload: Record<string, any>) {
    return apiHelper.POST(this.baseURL + '/login', payload, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Language': isRTL ? 'ar' : 'en',
      },
    });
  }

}

export default new AuthService();
