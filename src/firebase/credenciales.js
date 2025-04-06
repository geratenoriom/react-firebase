// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAHpre_oKIWy2oJXZzEkTHfWE2EYuYXRR4",
  authDomain: "los-robles-de450.firebaseapp.com",
  databaseURL: "https://los-robles-de450-default-rtdb.firebaseio.com",
  projectId: "los-robles-de450",
  storageBucket: "los-robles-de450.firebasestorage.app",
  messagingSenderId: "945360971660",
  appId: "1:945360971660:web:9a43e5e8f7b4454d2e58a9"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
