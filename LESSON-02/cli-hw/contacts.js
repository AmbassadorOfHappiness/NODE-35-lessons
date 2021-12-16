const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

// const contactsPath = path.resolve('./db/contact.json');

const readContent = async () => {
  // const content = await fs.readFile(contactsPath, 'utf8');
  const content = await fs.readFile(path.join(__dirname, 'db', 'contact.json'), 'utf8',);

  const result = JSON.parse(content);
  return result;
}


const listContacts = async () => {
  return await readContent();
}
console.log(readContent());
function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error('ДАННЫЕ ОТСУТСТВУЮТ!!!', err);
    }
    console.log(JSON.parse(data.id))
  });
}
  
function removeContact(contactId) {
  
}
    
function addContact(name, email, phone) {
  const contacts = await readContent();
  const newContact = { name, email, phone, id: crypto.randomUUID() };
  contacts.push(newContact);
  await fs.writeFile(path.join(contactsPath))

}

// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at server",err);
//   }
//   console.log(`Server works at port ${PORT}!`);
// });

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}