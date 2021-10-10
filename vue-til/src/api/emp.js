import { emp } from "./index";

function empList(data) {
  return emp.get("/empList", data);
}

// 직원 등록 api
function empRegist(data) {
  return emp.post("/empRegist", data);
}

export { empList, empRegist };
