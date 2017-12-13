using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudAlexis.Models
{
    public class InyectionDependency
    {
        static void main(string[] args)
        {

            var EnviarSMS = new enviarMensaje();
            var _EnviarCorreo = new EnviarCorreo();
      

            // se pasa la clase que se quiere inyectar 
            var CoreEnvio = new EnviadorMensajeCore(EnviarSMS);
            CoreEnvio.EnviarMensajeDesdeCore("hola");

            // se puede  lla mallar a otra clase 
            var CoreEnvio2 = new EnviadorMensajeCore(_EnviarCorreo);
            CoreEnvio2.EnviarMensajeDesdeCore("hola correo");

        }
    }



    public class EnviadorMensajeCore
    {
        // inyection dependency 
        private IEnviarMensaje _enviarMensaje;

        public EnviadorMensajeCore(IEnviarMensaje enviadorMensaje)
        {
           this._enviarMensaje = enviadorMensaje;
        }   

        public void EnviarMensajeDesdeCore(string msn)
        {
            _enviarMensaje.EnviarMensaje(msn);
        }
    }





    public interface IEnviarMensaje
    {
        void EnviarMensaje(string mensaje);
    }

    /// clases que heredan d ela interface
    class enviarMensaje:IEnviarMensaje
    {
        public void EnviarMensaje( string mensajestring)
        {
            Console.WriteLine("mensaje enviado");
        }
    }
    class EnviarCorreo : IEnviarMensaje
    {
        public void EnviarMensaje(string msn)
        {
            Console.WriteLine("Enviar Correo");
        }
    }
    
}
