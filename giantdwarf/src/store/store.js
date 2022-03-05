import { action, makeObservable, observable, makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

export class Store {
  constructor() {
    makeObservable(this, {
      currentGroupId: observable,
      setCurrentGroupId: action,
      currentGroupName: observable,
      setGroupName: action,
      currentUserId: observable,
      setCurrentUserId: action,
    });
  }
  currentGroupId = 'group-id';
  setCurrentGroupId = (groupId) => {
    this.currentGroupId = groupId;
  };
  currentGroupName = 'group-name';
  setGroupName = (groupName) => {
    this.currentGroupName = groupName;
  };
  currentUserId = 'user-id';
  setCurrentUserId = (userId) => {
    this.currentUserId = userId;
  };
}
