import http from "@/utils/http";

export const getMemberById = (id) => {
  return http.get("/api/member/by/" + id);
};
export const getGameLog = (params)=>{
  return http.get("/api/member/getGameLog",{params});
}

export const getGameSumCard = (params)=>{
  params['sum_type'] = 'card';
  return http.get("/api/member/getGameLogSum",{params});
}