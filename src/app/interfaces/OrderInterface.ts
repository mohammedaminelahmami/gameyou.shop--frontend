export interface OrderInterface {
  clientId: number;
  storeId: number;
  paymentType: string;
  orderProducts: {
    quantity: number;
    discount: number;
    product: {
      id: number;
      name: string;
      price: number;
      title: string;
      description: string;
    };
  }[];
}
