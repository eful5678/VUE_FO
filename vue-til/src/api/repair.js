import { repair } from "./index";

function repairList(data) {
  return repair.get("/list", data);
}

export { repairList };
