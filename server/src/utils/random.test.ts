import {
  assignRandomContacts,
  durstenFieldShuffle,
  shuntArray,
} from './random';
import { Contact } from '../model/contactDetails.model';

describe('durstenFieldShuffle()', () => {
  test('returned array is different to inputted array', async () => {
    let array = Array.from(Array(100).keys());
    const shuffledArray = durstenFieldShuffle(array);
    expect(array.length).toEqual(shuffledArray.length);
    expect(array).not.toEqual(shuffledArray);
  });
});

describe('shuntArray()', () => {
  test('returned array is different to inputted array', async () => {
    let array = [1, 2, 3, 4, 5];
    const displacedArray = shuntArray(array);

    expect(array.length).toEqual(displacedArray.length);
    expect(array).not.toEqual(displacedArray);
  });

  test('returned array is displaced by correct amount', async () => {
    let array = [1, 2, 3, 4, 5];
    const displacedArray = shuntArray(array);

    expect(displacedArray).toEqual([5, 1, 2, 3, 4]);
  });

  test('returns unchanged array when arguments invalid ', async () => {
    let array = [1];
    const displacedArray1 = shuntArray(array);
    expect(displacedArray1).toEqual(array);
  });
});

describe('assignRandomContacts()', () => {
  test('contacts should not be assigned themselves', async () => {
    const contacts: Contact[] = [
      {
        name: 'A',
        email: 'A',
      },
      {
        name: 'B',
        email: 'B',
      },
      {
        name: 'C',
        email: 'C',
      },
    ];

    const contactPairs = assignRandomContacts(contacts);

    expect(contactPairs[0].contact).not.toEqual(
      contactPairs[0].assignedContact,
    );
    expect(contactPairs[1].contact).not.toEqual(
      contactPairs[1].assignedContact,
    );
    expect(contactPairs[2].contact).not.toEqual(
      contactPairs[2].assignedContact,
    );
  });

  test('contacts assignments should be random each time', async () => {
    const contacts: Contact[] = [
      {
        name: 'A',
        email: 'A',
      },
      {
        name: 'B',
        email: 'B',
      },
      {
        name: 'C',
        email: 'C',
      },
      {
        name: 'D',
        email: 'D',
      },
      {
        name: 'E',
        email: 'E',
      },
      {
        name: 'F',
        email: 'F',
      },
      {
        name: 'G',
        email: 'G',
      },
      {
        name: 'H',
        email: 'H',
      },
      {
        name: 'I',
        email: 'I',
      },
      {
        name: 'J',
        email: 'J',
      },
      {
        name: 'K',
        email: 'K',
      },
      {
        name: 'L',
        email: 'L',
      },
    ];

    const multipleAssignments = [
      assignRandomContacts(contacts),
      assignRandomContacts(contacts),
      assignRandomContacts(contacts),
      assignRandomContacts(contacts),
      assignRandomContacts(contacts),
    ];

    const assignmentsForContactA = multipleAssignments.map(
      (assignment) =>
        assignment.filter((pair) => pair.contact.name === 'A')[0]
          .assignedContact.name,
    );

    const assignmentsAreDifferent = new Set(assignmentsForContactA).size > 1;

    expect(assignmentsAreDifferent).toBeTruthy();
  });

  test('contact arrays with fewer than 3 contacts return an empty array', async () => {
    const contacts: Contact[] = [
      {
        name: 'A',
        email: 'A',
      },
      {
        name: 'B',
        email: 'B',
      },
    ];

    const contactPairs = assignRandomContacts(contacts);
    expect(contactPairs.length).toBe(0);
  });
});
