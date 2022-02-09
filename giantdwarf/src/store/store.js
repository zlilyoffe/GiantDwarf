import { action, makeObservable, observable } from 'mobx';

export class Store {
  constructor() {
    makeObservable(this, {
      currentGroupId: observable,
      setCurrentGroupId: action,
    });
  }
  currentGroupId = 'group-id';
  setCurrentGroupId = (groupId) => {
    this.currentGroupId = groupId;
  };
}
