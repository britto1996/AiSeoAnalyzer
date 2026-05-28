import Header from "./components/Header";
import Hero from "./components/Hero";
import { AppProvider } from "./context/AppContext";

export default function Home() {
  return (
    <AppProvider>
      <section className="min-h-screen flex flex-col bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat text-slate-800 text-sm">
        <Header />
        <Hero />
      </section>
    </AppProvider>  
  );
}
