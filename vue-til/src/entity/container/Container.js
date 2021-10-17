import { BaseEntity } from "../global";
export default class Container extends BaseEntity {
  constructor(result) {
    super();
    const _data = result || {};
    this.containerCode = _data.containerCode || "";
    this.repairCost = _data.repairCost || 0;
    this.paymentAmount = _data.paymentAmount || 0;
    this.shippingCompany = _data.shippingCompany || "";
    this.regDate = _data.regDate || 0;
    this.repairDate = _data.repairDate || 0;
  }

  search() {
    return {
      containerCode: this.containerCode,
    };
  }
  insert() {
    return {
      containerCode: this.containerCode,
      repairCost: this.repairCost,
      shippingCompany: this.shippingCompany,
      regDate: this.dateToLong(this.regDate),
      repairDate: this.dateToLong(this.repairDate),
    };
  }
}
