import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pb-10 relative">
      <Header className="bg-transparent absolute top-0 z-50 text-white" />
      <main className="container mx-auto px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
