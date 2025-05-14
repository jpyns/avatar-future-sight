
import MainLayout from "@/components/layout/MainLayout";
import ChartComponent from "@/components/finance/ChartComponent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Forecasts = () => {
  const [savingsRate, setSavingsRate] = useState<number[]>([25]);
  const [incomeGrowth, setIncomeGrowth] = useState<number[]>([3]);
  const [includeInvestments, setIncludeInvestments] = useState(true);
  
  // Données de base pour les prévisions
  const baseProjectionData = [
    { name: "2024", value: 15000 },
    { name: "2025", value: undefined, projected: 18000 },
    { name: "2026", value: undefined, projected: 21500 },
    { name: "2027", value: undefined, projected: 25000 },
    { name: "2028", value: undefined, projected: 29000 },
    { name: "2029", value: undefined, projected: 33500 }
  ];
  
  // Données pour les différents scénarios
  const conservativeData = [
    { name: "2024", value: 15000 },
    { name: "2025", value: undefined, projected: 17000 },
    { name: "2026", value: undefined, projected: 19000 },
    { name: "2027", value: undefined, projected: 21000 },
    { name: "2028", value: undefined, projected: 23500 },
    { name: "2029", value: undefined, projected: 26000 }
  ];
  
  const aggressiveData = [
    { name: "2024", value: 15000 },
    { name: "2025", value: undefined, projected: 19000 },
    { name: "2026", value: undefined, projected: 24000 },
    { name: "2027", value: undefined, projected: 30000 },
    { name: "2028", value: undefined, projected: 37000 },
    { name: "2029", value: undefined, projected: 45000 }
  ];
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Prévisions financières</h1>
        
        <Tabs defaultValue="simple" className="w-full">
          <TabsList>
            <TabsTrigger value="simple">Prévision simple</TabsTrigger>
            <TabsTrigger value="scenarios">Scénarios multiples</TabsTrigger>
            <TabsTrigger value="custom">Personnalisée</TabsTrigger>
          </TabsList>
          
          <TabsContent value="simple" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Projection d'épargne sur 5 ans</CardTitle>
                <CardDescription>
                  Estimation basée sur les tendances actuelles de revenus et dépenses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartComponent
                  title=""
                  data={baseProjectionData}
                  type="line"
                  height={400}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="scenarios" className="space-y-6 pt-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Scénario conservateur</CardTitle>
                  <CardDescription>
                    Croissance lente mais stable des revenus (2% par an)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartComponent
                    title=""
                    data={conservativeData}
                    type="line"
                    height={300}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Scénario équilibré</CardTitle>
                  <CardDescription>
                    Croissance modérée des revenus (3.5% par an)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartComponent
                    title=""
                    data={baseProjectionData}
                    type="line"
                    height={300}
                  />
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Scénario agressif</CardTitle>
                  <CardDescription>
                    Forte croissance des revenus et investissements performants (5%+ par an)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartComponent
                    title=""
                    data={aggressiveData}
                    type="line"
                    height={300}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="custom" className="space-y-6 pt-4">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Paramètres de simulation</CardTitle>
                  <CardDescription>
                    Personnalisez vos prévisions financières
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="savings-rate">Taux d'épargne (%)</Label>
                      <span>{savingsRate[0]}%</span>
                    </div>
                    <Slider
                      id="savings-rate"
                      min={5}
                      max={50}
                      step={1}
                      value={savingsRate}
                      onValueChange={setSavingsRate}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="income-growth">Croissance des revenus (%)</Label>
                      <span>{incomeGrowth[0]}%</span>
                    </div>
                    <Slider
                      id="income-growth"
                      min={0}
                      max={10}
                      step={0.5}
                      value={incomeGrowth}
                      onValueChange={setIncomeGrowth}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="include-investments">Inclure les investissements</Label>
                    <Switch
                      id="include-investments"
                      checked={includeInvestments}
                      onCheckedChange={setIncludeInvestments}
                    />
                  </div>
                  
                  <Button className="w-full">Recalculer les prévisions</Button>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Prévision personnalisée</CardTitle>
                  <CardDescription>
                    Basée sur les paramètres que vous avez définis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartComponent
                    title=""
                    data={baseProjectionData}
                    type="line"
                    height={400}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Analyser vos prévisions</CardTitle>
            <CardDescription>
              Comprendre les facteurs qui influencent vos projections financières
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p>
                Les prévisions financières sont basées sur plusieurs facteurs clés :
              </p>
              <ul>
                <li>Votre taux d'épargne actuel</li>
                <li>L'évolution prévue de vos revenus</li>
                <li>Vos dépenses récurrentes et leur évolution</li>
                <li>Les rendements potentiels de vos investissements</li>
                <li>Les variations économiques (inflation, taux d'intérêt)</li>
              </ul>
              <p>
                Ajustez les paramètres dans l'onglet "Personnalisée" pour voir comment 
                différents choix financiers peuvent affecter votre avenir.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Forecasts;
