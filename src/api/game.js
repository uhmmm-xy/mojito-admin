import http from "@/utils/http";

export const getGameControl = (params) => {
  return http.get("/api/gameControl", {
    params,
  });
};

export const addControl = (params)=>{
  return http.post("/api/gameControl/save", {
    params,
  });
}

export const editControl = (params)=>{
  return http.post("/api/gameControl/update", {
    params,
  });
}