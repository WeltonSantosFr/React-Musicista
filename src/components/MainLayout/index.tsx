import Header from "../Header";
import Footer from "../Footer";

const MainLayout = ({ children }:any) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray3">
      <Header />

      <main className="flex-grow mt-20">
        {/* Conteúdo dinâmico da página */}
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
