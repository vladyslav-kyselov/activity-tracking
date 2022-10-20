import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyB48AwfYHXC727qr2bsx0eYo5kyuGqDa8I",
  authDomain: "check-kpi.firebaseapp.com",
  projectId: "check-kpi",
  storageBucket: "check-kpi.appspot.com",
  messagingSenderId: "841707279524",
  appId: "1:841707279524:web:db8c03426abdcf60b3c231",
  measurementId: "G-H25ED01F6T"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const googleAuthProvider = new GoogleAuthProvider();