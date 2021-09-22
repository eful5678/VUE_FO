import { BaseEntity } from "../global";
export default class Member extends BaseEntity {
  constructor(result) {
    super();
    const _data = result || {};
    this.username = _data.username || "";
    this.nickname = _data.nickname || "";
    this.password = _data.password || "";
  }

  form() {
    return {
      username: this.username,
      nickname: this.nickname,
      password: this.password,
    };
  }
}
