
function FaseDisenioDesarrollo() {
    return (
      <div className="container mx-auto px-4">
        <h1 className='text-5xl font-bold text-center py-4' style={{ color: '#00377B' }}>Fase de Diseño y Desarrollo</h1>
        <h2 className='text-2xl font-bold text-center' style={{ color: '#00377B' }}>FUNCIONES DEL SISTEMA</h2>
        <p style={{ color: '#717171' }} className=' mt-2 justify-center text-justify'>
          Las funciones que conforman el sistema de CRM de Tigo, son los siguientes:
          <br />
              - Identificar, capturar, registrar y validar de información de los clientes de Tigo.
              <br />
              - Proporcionar un servicio de atención al cliente.
              <br />
              - Monitorear y analizar resultados de ventas y retroalimentación de clientes.
              <br />
              - Responder y solucionar de la forma más eficaz y efectiva a las consultas de los clientes.
              <br />
              - Realizar una gestión de marketing a través de una investigación de mercado.
              <br /> 
              - Otorgar calidad en la interacción con el cliente, mediante comunicación efectiva.
              <br />
              - Atender a consultas de los clientes mediante el uso de un chatbot inteligente
        </p>
        <h2 className='text-2xl font-bold text-center' style={{ color: '#00377B' }}>REQUERIMIENTOS FUNCIONALES</h2>
        <p className='text-justify mt-2' style={{ color: '#717171' }}>
          Los requerimientos funcionales que conforman el sistema de CRM de Tigo, son los siguientes:
        </p>
        
        <table className="table-auto border-collapse border border-gray-800">
          <thead>
            <tr>
              <th className="border border-gray-800 px-4 py-2">ID</th>
              <th className="border border-gray-800 px-4 py-2">Nombre</th>
              <th className="border border-gray-800 px-4 py-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-800 px-4 py-2">RF01</td>
              <td className="border border-gray-800 px-4 py-2">Registro Usuario</td>
              <td className="border border-gray-800 px-4 py-2">El sistema CRM debe de poder registrar nuevos usuarios a través de un formulario de registro.</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-800 px-4 py-2">RF02</td>
              <td className="border border-gray-800 px-4 py-2">Validación de Correo Electrónico, Número de Teléfono y C.I.</td>
              <td className="border border-gray-800 px-4 py-2">El registro de los usuarios  debe de validar que los datos de Correo Electrónico, Número de Celular y C.I.</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-4 py-2">RF03</td>
              <td className="border border-gray-800 px-4 py-2">Identificación del Cliente</td>
              <td className="border border-gray-800 px-4 py-2">Identificar de forma única a cada cliente usando datos personales.</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-800 px-4 py-2">RF04</td>
              <td className="border border-gray-800 px-4 py-2">Captura de Datos del Cliente</td>
              <td className="border border-gray-800 px-4 py-2">Capturar datos de clientes en tiempo real a través de interfaces del CRM.</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-4 py-2">RF05</td>
              <td className="border border-gray-800 px-4 py-2">Registro de Cliente</td>
              <td className="border border-gray-800 px-4 py-2">Permitir el registro de nuevos clientes en el CRM.</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-800 px-4 py-2">RF06</td>
              <td className="border border-gray-800 px-4 py-2">Validación de Información</td>
              <td className="border border-gray-800 px-4 py-2">Validar la información proporcionada por los clientes al registrarse o actualizar su perfil.</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-4 py-2">RF07</td>
              <td className="border border-gray-800 px-4 py-2">Seguimiento de Casos</td>
              <td className="border border-gray-800 px-4 py-2">Hacer seguimiento de los casos de servicio al cliente.</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-800 px-4 py-2">RF08</td>
              <td className="border border-gray-800 px-4 py-2">Análisis de Ventas</td>
              <td className="border border-gray-800 px-4 py-2">Analizar las tendencias y resultados de ventas.</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-4 py-2">RF09</td>
              <td className="border border-gray-800 px-4 py-2">Retroalimentación del Cliente</td>
              <td className="border border-gray-800 px-4 py-2">Recopilar y analizar la retroalimentación de los clientes.</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-800 px-4 py-2">RF10</td>
              <td className="border border-gray-800 px-4 py-2">Atención al cliente mediante el ChatBot</td>
              <td className="border border-gray-800 px-4 py-2">Implementar la funcionalidad del ChatBot para brindar asistencia eficaz a los clientes en tiempo real y sin necesidad de personal en casos simples.</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-4 py-2">RF11</td>
              <td className="border border-gray-800 px-4 py-2">Comunicación Multicanal</td>
              <td className="border border-gray-800 px-4 py-2">Realizar estudios de mercado para informar estrategias de marketing.</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-800 px-4 py-2">RF12</td>
              <td className="border border-gray-800 px-4 py-2">Monitoreo de los resultados</td>
              <td className="border border-gray-800 px-4 py-2">Realizar el monitoreo para las ventas.</td>
            </tr>
            <tr>
              <td className="border border-gray-800 px-4 py-2">RF13</td>
              <td className="border border-gray-800 px-4 py-2">Administración de Casos de Clientes</td>
              <td className="border border-gray-800 px-4 py-2">Establecer un sistema para registrar, asignar y dar seguimiento a los casos de servicio al cliente.</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-800 px-4 py-2">RF14</td>
              <td className="border border-gray-800 px-4 py-2">Anuncio de las campañas de Marketing</td>
              <td className="border border-gray-800 px-4 py-2">Implementar un sistema de notificación automática para informar a los clientes sobre las campañas de marketing en curso o futuras.</td>
            </tr>
          </tbody>
        </table>

      </div>

    );
  }
  
  export default FaseDisenioDesarrollo;