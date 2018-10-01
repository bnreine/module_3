

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

var findPhoneNumber = (PHONEBOOK, phoneNumber) => {
  for (let i=0; i<PHONEBOOK.length; i++) {
    if (PHONEBOOK[i].phone === phoneNumber) {
      return PHONEBOOK[i];
    }
  }
return null;
}

const contactInfo = findPhoneNumber(PHONEBOOK, phoneNumber)

console.log((contactInfo === null) ? "Phone number doesn't exist in phonebook" : `This is ${contactInfo.name}'s phone number: ${contactInfo.phone}`)
