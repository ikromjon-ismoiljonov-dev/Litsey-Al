import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBMauQfM7ppbXe1kSNl6rkwnNGn4x_VdSE",
  authDomain: "mybool-ed83e.firebaseapp.com",
  projectId: "mybool-ed83e",
  storageBucket: "mybool-ed83e.appspot.com",
  messagingSenderId: "351482525899",
  appId: "1:351482525899:web:7f8a6dcbf302d08e66434e",
  measurementId: "G-WBGQHBGRL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;