import { repair } from "./index";

function repairList(data) {
  return repair.get("/list", data);
}

function insertContainer(data) {
  return repair.post("/insert", data);
}

export { repairList, insertContainer };
