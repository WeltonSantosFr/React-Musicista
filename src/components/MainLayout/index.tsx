import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";

interface MainLayoutProps {
  children?:ReactNode
}

const MainLayout:React.FC<MainLayoutProps>= ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
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
