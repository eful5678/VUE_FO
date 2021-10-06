import { BaseEntity } from "../global";
export default class Post extends BaseEntity {
  constructor(result) {
    super();
    const _data = result || {};

    this.title = _data.title || "";
    this.contents = _data.contents || "";

    this.username = _data.username || "";

    this.postId = _data.postId || 0;

    this.createDateTime = _data.createDateTime || "";
  }

  insert() {
    return {
      title: this.title,
      contents: this.contents,
      username: this.username,
    };
  }
  update() {
    return {
      postId: this.postId,
      title: this.title,
      contents: this.contents,
    };
  }
}
