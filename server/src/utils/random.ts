import { Contact, PairedContact } from '../model/contactDetails.model';

/**
 * Returns an array of PairedContacts where each Contact is paired
 * with a random contact that is not themselves
 * @param contacts an array of Contacts
 */

export const assignRandomContacts = (contacts: Contact[]): PairedContact[] => {
  if (contacts.length < 3) {
    return [];
  }
  let pairs: PairedContact[] = [];

  const shuffledContacts = durstenFieldShuffle(contacts);
  const displacedContacts = shuntArray(shuffledContacts);

  for (let i = 0; i < contacts.length; i++) {
    pairs.push({
      contact: shuffledContacts[i],
      assignedContact: displacedContacts[i],
    });
  }

  return pairs;
};

/**
 * Returns a randomly shuffled copy of an array
 * @param array the array to be shuffled
 */

export const durstenFieldShuffle = (array: Array<any>): Array<any> => {
  let result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

/**
 * Returns a copy of an array in a modifed order where the last element
 * is removed and replaced at the beginning of the array
 * @param array the array to be displaced
 */

export const shuntArray = (array: Array<any>): Array<any> => {
  let arrayCopy = [...array];
  let temp = arrayCopy.pop();
  arrayCopy.unshift(temp);
  return arrayCopy;
};
