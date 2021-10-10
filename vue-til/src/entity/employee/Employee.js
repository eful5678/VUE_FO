import { BaseEntity } from "../global";
export default class Employee extends BaseEntity {
  constructor(result) {
    super();
    const _data = result || {};
    this.name = _data.name || "";
    this.empLevel = _data.empLevel || "";
    this.id = _data.id || 0;
    this.entryDate = _data.entryDate || 0;
  }

  search() {
    return {};
  }
  create() {
    return {
      name: this.name,
      empLevel: this.empLevel,
      entryDate: this.entryDate,
    };
  }
}
