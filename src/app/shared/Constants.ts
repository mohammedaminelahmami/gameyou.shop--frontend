import { environment } from 'src/environments/environment';

export const Constants = {
  apiEndPoint: {
    auth: {
      login: environment.baseUrl + 'authentication/login',
      registerClient: environment.baseUrl + 'authentication/register/client',
      registerSeller: environment.baseUrl + 'authentication/register/seller',
      logout: environment.baseUrl + 'authentication/logout',
    },
  },
};
