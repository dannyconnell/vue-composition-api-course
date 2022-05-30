import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDzOhY4FBznWEM8tC4zm47cHkjaW6Nf4J4',
  authDomain: 'noteballs-22869.firebaseapp.com',
  projectId: 'noteballs-22869',
  storageBucket: 'noteballs-22869.appspot.com',
  messagingSenderId: '452955415779',
  appId: '1:452955415779:web:9882a55e2a853f5ff051d6'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
  db
}