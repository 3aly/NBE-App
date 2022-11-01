// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore/lite';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useDispatch} from 'react-redux';
const firebaseConfig = {
  apiKey: 'AIzaSyDnSOueYodTSLjpqGjRtD45YkT07cmMqTw',
  authDomain: 'nbe-app-59671.firebaseapp.com',
  projectId: 'nbe-app-59671',
  storageBucket: 'nbe-app-59671.appspot.com',
  messagingSenderId: '802231263478',
  appId: '1:802231263478:web:97c2f905235dd7b3b3ccd7',
};
import {removeCurrentUser, setCurrentUser} from '../store/UserSlice';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const GoogleProvider = new GoogleAuthProvider();

export const CreateAnAccount = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const getIn = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const updater = async (displayName, phoneNumber, photoURL) => {
  await updateProfile(auth.currentUser, {
    displayName: displayName,
    phoneNumber: phoneNumber,
    photoURL: photoURL,
  });
};

export const asdsa = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...

      console.log(user);
      return user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// export const login = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;
//       dispatch(
//         setCurrentUser({
//           displayName: 'hefny',
//           email: user.email,
//           isLoggedIn: true,
//           pic: 'https://lh3.googleusercontent.com/a/ALm5wu3WEdwsFGG0D1muUoC4O2fs4FrfVL52A0Ul2THOZg=s288-p-no',
//         }),
//       );
//       console.log(user, 'user signed in');
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// };

export const SignOut = () => {
  signOut(auth);

  console.log('signed out');
  return;
};

export const createUserDocumentFromAuth = async (
  auth,
  additionalInformation = {},
) => {
  if (!auth) return;

  const userDocRef = doc(db, 'users', auth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = auth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const GoogleSignin = (email, password, displayName) => {
  signInWithPopup(auth, GoogleProvider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log(user, 'google');
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
