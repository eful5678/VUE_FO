import { BaseEntity } from "../global";
export default class Container extends BaseEntity {
  constructor(result) {
    super();
    const _data = result || {};
    this.containerCode = _data.containerCode || "";
  }
}
