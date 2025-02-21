import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  Unsubscribe,
  updateProfile,
} from "firebase/auth";
// import { User } from "firebase/auth";
import app from "./firebase";
export const auth = getAuth(app);

export const createUser = (email: string, password: string, name: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (!auth.currentUser) throw "no current user";
      return updateProfile(user, {
        displayName: name,
        photoURL: null,
      })
        .then(() => {
          return auth.currentUser;
        })
        .catch((err) => {
          throw err;
        });

      //   return auth.currentUser;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const signInUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const onAuthChange = (): Unsubscribe => {
  return onAuthStateChanged(auth, (user) => {
    // const {uid, email, displayName} = user;

    if (user) {
      console.log(user);
      return user;
    }
    return null;
  });
};
