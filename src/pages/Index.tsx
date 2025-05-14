
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChartBar, ChartLine, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-avatar-blue flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Avatar</h1>
          </div>
          <div>
            <Button asChild>
              <Link to="/dashboard">
                Commencer
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Planifiez votre avenir financier avec <span className="text-avatar-blue">Avatar</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              Une solution complète pour visualiser et prévoir votre situation financière. Prenez des décisions éclairées grâce à nos outils d'analyse avancés.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/dashboard">
                  Accéder au tableau de bord
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/data-input">
                  Commencer la saisie
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ChartBar className="h-6 w-6 text-avatar-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tableau de bord</h3>
              <p className="text-gray-500">Visualisez votre situation financière actuelle avec des graphiques clairs et intuitifs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ChartLine className="h-6 w-6 text-avatar-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prévisions financières</h3>
              <p className="text-gray-500">Analysez différents scénarios et visualisez l'évolution future de vos finances.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-avatar-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Saisie de données</h3>
              <p className="text-gray-500">Importez facilement vos données financières ou saisissez-les manuellement.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">© 2025 Avatar Finance. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
