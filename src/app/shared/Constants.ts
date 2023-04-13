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
      getAllCategoryProduct: environment.baseUrl + '/product/category/:id',
      getProductsLessThan300:
        environment.baseUrl + '/product/price/lessThan300/:id',
      getProductsBetween300To1500:
        environment.baseUrl + '/product/price/between300To1500/:id',
      getProductsMoreThan1500:
        environment.baseUrl + '/product/price/between1500To20000/:id',
    },
    category: {
      addCategory: environment.baseUrl + '/category',
      deleteCategory: environment.baseUrl + '/category/:id',
      updateCategory: environment.baseUrl + '/category/:id',
      getOneCategory: environment.baseUrl + '/category/:id',
      getAllCategory: environment.baseUrl + '/category',
    },
    order: {
      addOrder: environment.baseUrl + '/order',
      getOneOrder: environment.baseUrl + '/order/:id',
      getAllOrder: environment.baseUrl + '/order',
      getAllOrderClient: environment.baseUrl + '/order/client/:id',
      getAllOrderSeller: environment.baseUrl + '/order/seller/:id', // by store id
      updateStatus: environment.baseUrl + '/order/status/:id',
      // getAllUserOrder: environment.baseUrl + '/order/user/:id',
    },
    client: {
      getClient: environment.baseUrl + '/client/:id',
      updateClientInfo: environment.baseUrl + '/client/updateInfo/:id',
      updateClientPassword: environment.baseUrl + '/client/updatePassword/:id',
    },
    seller: {
      getSeller: environment.baseUrl + '/seller/:id',
      updateSellerInfo: environment.baseUrl + '/seller/updateInfo/:id',
      updateSellerPassword: environment.baseUrl + '/seller/updatePassword/:id',
    },
  },
};
