import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat text-slate-800 text-sm">
      <Header />
      <Hero/>
    </section>
  );
}
