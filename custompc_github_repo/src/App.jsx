import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import PCConfigurator from "./PCConfigurator";
import { Button } from "./components/ui/button";

function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Witamy w CustomPC</h1>
      <p className="mb-6 text-lg">Skonfiguruj komputer idealnie dopasowany do Twoich potrzeb</p>
      <Link to="/konfigurator">
        <Button className="text-lg">Rozpocznij konfigurację</Button>
      </Link>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">O nas</h2>
      <p>CustomPC to firma specjalizująca się w tworzeniu wydajnych i zoptymalizowanych zestawów komputerowych. Każda konfiguracja powstaje z myślą o konkretnych potrzebach użytkownika.</p>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow mb-6">
        <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">CustomPC</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Strona główna</Link>
            <Link to="/konfigurator" className="hover:underline">Konfigurator</Link>
            <Link to="/o-nas" className="hover:underline">O nas</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-white mt-12 p-4 text-center text-sm text-gray-600">
        © 2025 CustomPC. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/konfigurator" element={<PCConfigurator />} />
          <Route path="/o-nas" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}