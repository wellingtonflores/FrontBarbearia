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
          <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96 text-center">
            <img src="https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/6074b2eb-8fec-40ca-b6a9-44ddac1e0d31/6074b2eb-fb34-4646-b542-44ddac1e0d31.jpg" alt="Corte de Cabelo" className="mb-2 rounded-lg w-full min-h-[250px] object-cover" />
            <h2 className="text-2xl font-bold mb-2">Corte de Cabelo</h2>
            <p>Cortes modernos e clássicos</p>
          </div>
          <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96 text-center">
            <img src="https://blog.cuecastore.com.br/wp-content/uploads/2023/03/image-28-1024x683.png" alt="Barba" className="mb-2 rounded-lg w-full min-h-[250px] object-cover" />
            <h2 className="text-2xl font-bold mb-2">Barba</h2>
            <p>Barbas bem cuidadas e estilizadas</p>
          </div>
          <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96 text-center">
            <img src="https://i.pinimg.com/736x/9f/3c/75/9f3c75f372fd5a3cb73ab657d22d209d.jpg" alt="Coloração" className="mb-2 rounded-lg w-full min-h-[250px] object-cover" />
            <h2 className="text-2xl font-bold mb-2">Coloração</h2>
            <p>Coloração profissional para cabelos e barbas</p>
          </div>
        </div>
        <div className="services-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96 text-center">
            <img src="https://barbeariavintage.com.br/wp-content/uploads/2023/06/Sobrancelha-na-Vintage-Barbearia-em-Curitiba.jpg" alt="Sobrancelha" className="mb-2 rounded-lg w-full min-h-[250px] object-cover" />
            <h2 className="text-2xl font-bold mb-2">Sobrancelha</h2>
            <p>Sobrancelhas simétricas e cuidadas</p>
          </div>
          <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96 text-center">
            <img src="https://i.pinimg.com/736x/ad/b1/0f/adb10f8a558649f7109ff488dc7375cc.jpg" alt="Escova Progressiva" className="mb-2 rounded-lg w-full min-h-[250px] object-cover" />
            <h2 className="text-2xl font-bold mb-2">Escova Progressiva</h2>
            <p>A escova progressiva é um procedimento para alisar os cabelos gradativamente</p>
          </div>
          <div className="service-column bg-white bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center h-96 text-center">
            <img src="https://portalnponline.com/wp-content/uploads/2023/12/Depilacao-Masculina950x800.jpg" alt="Depilação com Cera" className="mb-2 rounded-lg w-full min-h-[250px] object-cover" />
            <h2 className="text-2xl font-bold mb-2">Depilação com Cera</h2>
            <p>A depilação com cera tem vantagem de ser rápida e eficaz.</p>
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
