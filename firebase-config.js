// Firebase Console > Project settings > Your apps > Web app config
// এই ফাইলে নিজের Firebase config বসান। এটি public web config, কিন্তু Firestore Security Rules অবশ্যই সঠিক রাখবেন।
window.SNK_FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
