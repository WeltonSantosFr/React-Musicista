import Header from "../Header";
import Footer from "../Footer";

const MainLayout = ({ children }:any) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow mt-12">
        {/* Conteúdo dinâmico da página */}
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
