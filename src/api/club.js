import http from "@/utils/http";

export const getClubList = (params) => {
    return http.get("/api/club",{params});
  };