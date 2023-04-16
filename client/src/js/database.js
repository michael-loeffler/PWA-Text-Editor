import { openDB } from 'idb';

// Establishes the IndexedDB database if one doesn't already exist
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// PUT "route" that adds any new changes in Text Editor window to IndexedDB. This is done whenever the user clicks off the Text Editor window.
export const putDb = async (content) => {
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ jate: content, id: 1 });
  const result = await request;
  console.log('Data saved to the database!');
}

// GET "route" that retrieves the data stored in IndexedDB to be display in the Text Editor when the page is loaded
export const getDb = async () => {
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('Result of get:', result.jate);
  return result.jate;
};

initdb();
