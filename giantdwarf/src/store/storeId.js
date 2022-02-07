import {
  action,
  makeObservable,
  observable,
} from 'mobx';

export class StoreId {
  constructor() {
    makeObservable(this, {
      currentGroupId: observable,
      setCurrentGroupId: action,
    });
  }
  setCurrentGroupId = (groupId) => {
    this.currentGroupId = groupId;
  };
}
