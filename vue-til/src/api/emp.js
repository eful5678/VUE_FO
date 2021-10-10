import { emp } from "./index";

function empList(data) {
  return emp.get("/empList", data);
}

export { empList };
