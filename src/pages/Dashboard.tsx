
import MainLayout from "@/components/layout/MainLayout";
import FinanceCard from "@/components/finance/FinanceCard";
import ChartComponent from "@/components/finance/ChartComponent";
import { ChartBar, DollarSign, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const monthlyIncomeData = [
    { name: "Jan", value: 4500 },
    { name: "Fév", value: 4500 },
    { name: "Mar", value: 4500 },
    { name: "Avr", value: 4800 },
    { name: "Mai", value: 4800 },
    { name: "Juin", value: 4800 },
    { name: "Juil", value: 4800, projected: 4800 },
    { name: "Août", value: undefined, projected: 4800 },
    { name: "Sept", value: undefined, projected: 4900 },
    { name: "Oct", value: undefined, projected: 4900 },
    { name: "Nov", value: undefined, projected: 4900 },
    { name: "Déc", value: undefined, projected: 5200 }
  ];

  const monthlyExpensesData = [
    { name: "Jan", value: 3200 },
    { name: "Fév", value: 3400 },
    { name: "Mar", value: 3100 },
    { name: "Avr", value: 3300 },
    { name: "Mai", value: 3500 },
    { name: "Juin", value: 3200 },
    { name: "Juil", value: 3400, projected: 3400 },
    { name: "Août", value: undefined, projected: 3300 },
    { name: "Sept", value: undefined, projected: 3400 },
    { name: "Oct", value: undefined, projected: 3500 },
    { name: "Nov", value: undefined, projected: 3600 },
    { name: "Déc", value: undefined, projected: 3800 }
  ];

  const savingsData = [
    { name: "Jan", value: 1300 },
    { name: "Fév", value: 1100 },
    { name: "Mar", value: 1400 },
    { name: "Avr", value: 1500 },
    { name: "Mai", value: 1300 },
    { name: "Juin", value: 1600 },
    { name: "Juil", value: undefined, projected: 1400 },
    { name: "Août", value: undefined, projected: 1500 },
    { name: "Sept", value: undefined, projected: 1500 },
    { name: "Oct", value: undefined, projected: 1400 },
    { name: "Nov", value: undefined, projected: 1300 },
    { name: "Déc", value: undefined, projected: 1400 }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Tableau de bord</h1>
        
        <div className="grid gap-4 md:grid-cols-3">
          <FinanceCard 
            title="Revenu mensuel moyen" 
            value="4 700 €" 
            trend="up" 
            icon={<DollarSign />}
          />
          <FinanceCard 
            title="Dépenses mensuelles moyennes" 
            value="3 300 €" 
            trend="down" 
            icon={<DollarSign />}
          />
          <FinanceCard 
            title="Épargne mensuelle moyenne" 
            value="1 400 €" 
            trend="up" 
            icon={<TrendingUp />}
          />
        </div>
        
        <Tabs defaultValue="income" className="w-full">
          <TabsList>
            <TabsTrigger value="income">Revenus</TabsTrigger>
            <TabsTrigger value="expenses">Dépenses</TabsTrigger>
            <TabsTrigger value="savings">Épargne</TabsTrigger>
          </TabsList>
          <TabsContent value="income" className="pt-4">
            <ChartComponent 
              title="Évolution des revenus mensuels" 
              data={monthlyIncomeData} 
              type="line"
              height={400}
            />
          </TabsContent>
          <TabsContent value="expenses" className="pt-4">
            <ChartComponent 
              title="Évolution des dépenses mensuelles" 
              data={monthlyExpensesData} 
              type="line"
              height={400}
            />
          </TabsContent>
          <TabsContent value="savings" className="pt-4">
            <ChartComponent 
              title="Évolution de l'épargne mensuelle" 
              data={savingsData} 
              type="bar"
              height={400}
            />
          </TabsContent>
        </Tabs>
        
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div className="col-span-2 md:col-span-1">
            <ChartComponent
              title="Répartition des dépenses"
              data={[
                { name: "Logement", value: 1200 },
                { name: "Alimentation", value: 800 },
                { name: "Transport", value: 400 },
                { name: "Loisirs", value: 300 },
                { name: "Autres", value: 600 },
              ]}
              type="bar"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <ChartComponent
              title="Projection d'épargne annuelle"
              data={[
                { name: "2024", value: 15000 },
                { name: "2025", value: undefined, projected: 18000 },
                { name: "2026", value: undefined, projected: 21500 },
                { name: "2027", value: undefined, projected: 25000 },
                { name: "2028", value: undefined, projected: 29000 },
              ]}
              type="line"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
