import { environment } from 'src/environments/environment';

export const Constants = {
  apiEndPoint: {
    auth: {
      login: environment.baseUrl + '/authentication/login',
      register: environment.baseUrl + '/authentication/register',
      logout: environment.baseUrl + '/authentication/logout',
    },
    product: {
      addProduct: environment.baseUrl + '/product',
      deleteProduct: environment.baseUrl + '/product/:id',
      updateProduct: environment.baseUrl + '/product/:id',
      getOneProduct: environment.baseUrl + '/product/:id',
      getAllProduct: environment.baseUrl + '/product',
      getAllStoreProduct: environment.baseUrl + '/product/store/:id',
    },
  },
};
