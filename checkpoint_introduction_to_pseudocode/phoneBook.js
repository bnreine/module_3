

const PHONEBOOK = [
  {
  name: "John",
  phone: 673
  },
  {
  name: "Maria",
  phone: 354
  },
  {
  name: "Joe",
  phone: 197
  }
];

const phoneNumber = 197; //Test phone number

var findPhone = (PHONEBOOK, phoneNumber) => {
  for (let i=0; i<PHONEBOOK.length; i++) {
    if (PHONEBOOK[i].phone === phoneNumber) {
      return PHONEBOOK[i];
    }
  }
return null;
}

const result = findPhone(PHONEBOOK, phoneNumber)

console.log((result === null) ? "Phone number doesn't exist in phonebook" : `This is ${result.name}'s phone number: ${result.phone}`)
