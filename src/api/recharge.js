import http from "@/utils/http";

export const getRecharge = (params) => {
  return http.get("/api/order", { params });
};

export const getSumMoney = (params) => {
    params['sum_type'] = 'money';
    return http.get("/api/recharge/getSum", { params });
};

export const getSumCard = (params) => {
    params['sum_type'] = 'card';
    return http.get("/api/recharge/getSum", { params });
};
