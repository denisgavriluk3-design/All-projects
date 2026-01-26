// domain/orderStatus.js
export const ORDER_STATUS = {
    CREATED: "CREATED",
    PAID: "PAID",
    CANCELLED: "CANCELLED",
  };
  
  export const canPay = (order) =>
    order.status === ORDER_STATUS.CREATED;
  
  export const canCancel = (order) =>
    order.status === ORDER_STATUS.CREATED;
  