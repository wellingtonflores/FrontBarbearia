import './Content.css'; 

export default function Content() {
  return (
    <>
      <div className="content-background flex items-center justify-center">
        <a href="/agendamentos" className="button-link">Agende Agora</a>
      </div>
      <hr className="border-t-2 border-white my-0.1" />
      <div className="services-section bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white mb-8">O que nós oferecemos</h2>
          <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96">
              <img src="https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/6074b2eb-8fec-40ca-b6a9-44ddac1e0d31/6074b2eb-fb34-4646-b542-44ddac1e0d31.jpg" alt="Corte de Cabelo" className="mb-2 rounded-lg w-full h-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Corte de Cabelo</h2>
              <p>Cortes modernos e clássicos</p>
            </div>
            <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96">
              <img src="https://www.example.com/barba.jpg" alt="Barba" className="mb-2 rounded-lg w-full h-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Barba</h2>
              <p>Barbas bem cuidadas e estilizadas</p>
            </div>
            <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96">
              <img src="https://www.example.com/coloracao.jpg" alt="Coloração" className="mb-2 rounded-lg w-full h-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Coloração</h2>
              <p>Coloração profissional para cabelos e barbas</p>
            </div>
          </div>
          <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96">
              <img src="https://via.placeholder.com/300x300.png?text=Serviço+4" alt="Serviço 4" className="mb-2 rounded-lg w-full h-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Serviço 4</h2>
              <p>Descrição do Serviço 4</p>
            </div>
            <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96">
              <img src="" alt="Serviço 5" className="mb-2 rounded-lg w-full h-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Serviço 5</h2>
              <p>Descrição do Serviço 5</p>
            </div>
            <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96">
              <img src="https://via.placeholder.com/300x300.png?text=Serviço+6" alt="Serviço 6" className="mb-2 rounded-lg w-full h-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Serviço 6</h2>
              <p>Descrição do Serviço 6</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/servicos" className="button-link-light">Ver todos nossos serviços</a>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-white my-0.1" />
    </>
  );
}
