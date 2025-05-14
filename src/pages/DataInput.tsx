
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { UploadIcon } from "lucide-react";

const DataInput = () => {
  const [incomeType, setIncomeType] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDate, setIncomeDate] = useState("");
  
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  
  const handleIncomeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Revenu enregistré avec succès !");
    setIncomeType("");
    setIncomeAmount("");
    setIncomeDate("");
  };
  
  const handleExpenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Dépense enregistrée avec succès !");
    setExpenseCategory("");
    setExpenseAmount("");
    setExpenseDate("");
  };
  
  const handleFileUpload = () => {
    toast.info("La connexion à Supabase est nécessaire pour importer des fichiers.");
  };
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Saisie des données</h1>
        
        <Tabs defaultValue="income" className="w-full">
          <TabsList>
            <TabsTrigger value="income">Revenus</TabsTrigger>
            <TabsTrigger value="expenses">Dépenses</TabsTrigger>
            <TabsTrigger value="import">Importer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="income" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Ajouter un revenu</CardTitle>
                <CardDescription>
                  Enregistrez vos sources de revenus pour une analyse plus précise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleIncomeSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="income-type">Type de revenu</Label>
                      <Select value={incomeType} onValueChange={setIncomeType} required>
                        <SelectTrigger id="income-type">
                          <SelectValue placeholder="Sélectionner un type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salary">Salaire</SelectItem>
                          <SelectItem value="freelance">Revenus freelance</SelectItem>
                          <SelectItem value="investment">Investissements</SelectItem>
                          <SelectItem value="rental">Revenus locatifs</SelectItem>
                          <SelectItem value="other">Autres</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="income-amount">Montant (€)</Label>
                      <Input
                        id="income-amount"
                        type="number"
                        placeholder="0.00"
                        value={incomeAmount}
                        onChange={(e) => setIncomeAmount(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="income-date">Date</Label>
                      <Input
                        id="income-date"
                        type="date"
                        value={incomeDate}
                        onChange={(e) => setIncomeDate(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="income-recurring">Récurrent</Label>
                      <Select>
                        <SelectTrigger id="income-recurring">
                          <SelectValue placeholder="Non" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">Non</SelectItem>
                          <SelectItem value="monthly">Mensuel</SelectItem>
                          <SelectItem value="quarterly">Trimestriel</SelectItem>
                          <SelectItem value="annual">Annuel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="income-notes">Notes (optionnel)</Label>
                    <Input id="income-notes" placeholder="Détails supplémentaires..." />
                  </div>
                  
                  <Button type="submit" className="w-full">Enregistrer le revenu</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="expenses" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Ajouter une dépense</CardTitle>
                <CardDescription>
                  Enregistrez vos dépenses pour suivre votre budget
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleExpenseSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="expense-category">Catégorie</Label>
                      <Select value={expenseCategory} onValueChange={setExpenseCategory} required>
                        <SelectTrigger id="expense-category">
                          <SelectValue placeholder="Sélectionner une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="housing">Logement</SelectItem>
                          <SelectItem value="food">Alimentation</SelectItem>
                          <SelectItem value="transport">Transport</SelectItem>
                          <SelectItem value="utilities">Services publics</SelectItem>
                          <SelectItem value="entertainment">Loisirs</SelectItem>
                          <SelectItem value="healthcare">Santé</SelectItem>
                          <SelectItem value="other">Autres</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expense-amount">Montant (€)</Label>
                      <Input
                        id="expense-amount"
                        type="number"
                        placeholder="0.00"
                        value={expenseAmount}
                        onChange={(e) => setExpenseAmount(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expense-date">Date</Label>
                      <Input
                        id="expense-date"
                        type="date"
                        value={expenseDate}
                        onChange={(e) => setExpenseDate(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expense-recurring">Récurrent</Label>
                      <Select>
                        <SelectTrigger id="expense-recurring">
                          <SelectValue placeholder="Non" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">Non</SelectItem>
                          <SelectItem value="monthly">Mensuel</SelectItem>
                          <SelectItem value="quarterly">Trimestriel</SelectItem>
                          <SelectItem value="annual">Annuel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="expense-notes">Notes (optionnel)</Label>
                    <Input id="expense-notes" placeholder="Détails supplémentaires..." />
                  </div>
                  
                  <Button type="submit" className="w-full">Enregistrer la dépense</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="import" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Importer des données</CardTitle>
                <CardDescription>
                  Importez vos données financières à partir d'un fichier CSV ou Excel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                  <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold">Déposez vos fichiers ici</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Formats acceptés: CSV, XLS, XLSX (Max 5MB)
                    </p>
                  </div>
                  <Button variant="outline" className="mt-4" onClick={handleFileUpload}>
                    <span>Sélectionner un fichier</span>
                  </Button>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Modèles de fichiers</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Téléchargez un modèle pour créer votre fichier d'import
                  </p>
                  <div className="space-y-2">
                    <Button variant="secondary" className="w-full justify-start" size="sm">
                      Télécharger le modèle pour les revenus
                    </Button>
                    <Button variant="secondary" className="w-full justify-start" size="sm">
                      Télécharger le modèle pour les dépenses
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-amber-600 w-full rounded-md bg-amber-50 p-3">
                  <p>
                    Pour utiliser cette fonctionnalité, veuillez d'abord connecter l'application à Supabase.
                    Cela permettra de stocker les données importées de façon sécurisée.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default DataInput;
