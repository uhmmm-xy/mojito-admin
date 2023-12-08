import http from "@/utils/http";

export const getMemberById = (id) => {
    return http.get("/api/member/by/"+id);
  };