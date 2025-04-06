import React, { useState } from "react";

import firebaseApp from "../firebase/credenciales";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);


function Login() {
    const firestore = getFirestore(firebaseApp);
    const [isResgistrando, setIsRegistrando] = useState(false);

    async function registrarUsuario(email, password, rol){
       const infoUsuario = await createUserWithEmailAndPassword(auth, email, password
       ).then((usuarioFirebase) => {
        return usuarioFirebase;
       });
       console.log(infoUsuario.user.uid);
       const docuRef =  doc(firestore, `usuarios/${infoUsuario.user.uid}`);
       setDoc(docuRef, {correo: email, rol: rol});
    }

    function submitHandler(e){
        e.preventDefault();
            
        //Recuperar los datos correo, password y rol
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const rol = e.target.elements.rol.value;        

        console.log("submit", email, password, rol);

        if (isResgistrando){
            // registrar
            registrarUsuario(email,password, rol);
        } else{
            signInWithEmailAndPassword(auth, email, password);
        }

    }

    return <div>
        <h1>{isResgistrando ? "Registrate" : "Inicia sesión"}</h1>

        <form onSubmit={submitHandler}>
            <label>
                Correo electrónico:
                <input type="email" id="email"/>
            </label>
            <label>
                Contraseña:
                <input type="password" id="password"/>
            </label>
            <label>
                Rol:
                <select id="rol">
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                </select>
            </label>    
            <input
                type="submit"
                value={isResgistrando ? "Registrar" : "Iniciar sesión"}
            />
        </form>
        <button onClick={() => setIsRegistrando(!isResgistrando)}>
            {isResgistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
        </button>

    </div>
}

export default Login;