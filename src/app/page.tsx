import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import PurchaseList from '@/components/PurchaseList/PurchaseList';
import SettingsMenu from '@/components/SettingsMenu/SettingsMenu';

export default function Home() {
  const accounts = [];

  return (
    <main className="min-h-screen">
      <div className="">
        <nav className="h-16 border-b-white/20 border-b flex flex-row justify-between items-center mx-6">
          <h1>cool bank</h1>
          <SettingsMenu />
        </nav>
        <section className="mx-2">
          <Tabs defaultValue="chequing" className="">
            <div className="flex flex-row justify-between m-2">
              <div>
                <h2>$3000.00</h2>
              </div>
              <TabsList>
                <TabsTrigger value="chequing">Chequing</TabsTrigger>
                <TabsTrigger value="savings">Savings</TabsTrigger>
                <TabsTrigger value="credit">Visa</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="chequing">
              <PurchaseList />
            </TabsContent>
            <TabsContent value="savings">savings expenditures</TabsContent>
            <TabsContent value="credit">credit expenditures</TabsContent>
          </Tabs>
        </section>
        <ul></ul>
      </div>
    </main>
  );
}
