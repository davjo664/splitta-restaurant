import firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fireStore = firebaseApp.firestore();
fireStore.settings({timestampsInSnapshots: true});

export default fireStore;