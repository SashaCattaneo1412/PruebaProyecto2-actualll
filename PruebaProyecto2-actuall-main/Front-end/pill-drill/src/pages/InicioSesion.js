import React from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link';
 import PhotoCarousel from '../components/PhotoCarousel.js';
 import style from '../styles/SignUp.module.css';

 const InicioSesion = () => {
   return (
    <div>
 
     <PhotoCarousel />

       
     <main className={style.flexbox}>
        <form>
          <h1 className={style.title}>INICIA SESION</h1>

          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="Mail" />
          </div>


            <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="floatingPassword" placeholder=" Contraseña" />
            </div>

          <div>
            <label className={style.seguimiento}>
            
            </label>
          </div>

        

          <div>
            <label className={style.cuenta}>
            ¿Olvidaste tu contraseña? 
            </label>
            <Link href="/InicioSesion"> Recuperala</Link>
          </div>

          <div>
            <label className={style.cuenta}>
            ¿No tenes cuenta?
            </label>
            <Link href="/Registrarse">  Crea cuenta nueva</Link>
          </div>
           
       


        </form>
      </main>


    </div>
   )
 }
 
 export default InicioSesion