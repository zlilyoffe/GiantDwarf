import { groupSchema } from '../createNewGroup/database.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { getGiantByGroup } from './database.js';
import { getGroup } from '../Play/database.js';

export const giantInfo = async (groupId) => {
  try {
    const group = await getGroup(groupId);
    if (!group) {
      return { groupExists: false, error: 'group does not exist' };
    }
    // const participants = group.participants;
    ////
    for (let participantsNumber = group.participants.length; participantsNumber > 0; participantsNumber-- ){
      function getRandom(){
        let numDwarf = (Math.random() * (participantsNumber + 1 - 0) + 0);
        let numGiant = (Math.random() * (participantsNumber + 1 - 0) + 0);
      } if (numDwarf != numGiant){
        giantArray.splice(index, numGiant, group.participants[participantsNumber]);
        dwarfArray.splice(index, numDwarf, group.participants[participantsNumber]);
      } else {
        let numDwarf = (Math.random() * (participantsNumber + 1 - 0) + 0);
        giantArray.splice(index, numGiant, group.participants[participantsNumber]);
        dwarfArray.splice(index, numDwarf, group.participants[participantsNumber]);
      }
    }
    const giant = await getGiantByGroup(groupId);
    if (!giant) {
      return { groupExists: false, error: 'giant does not exist' };
    }
    return { giantName: giant.giantName };
  } catch (e) {
    console.log(e);
  }
};
