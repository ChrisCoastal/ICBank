'use client';

import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import PurchaseList from '@/components/PurchaseList/PurchaseList';
import SettingsMenu from '@/components/SettingsMenu/SettingsMenu';
import useAppContext from '@/hooks/useAppContext';
import { nanoid } from 'nanoid';

export default function Home() {
  // const accounts = [];
  const { state, dispatch } = useAppContext();
  const accounts = state.accounts;

  return (
    <main className="min-h-screen">
      <div className="">
        <section className="mx-2">
          <Tabs defaultValue="Checking" className="">
            <div className="flex  justify-between m-2 mb-8">
              <div>
                <h2 className="text-2xl font-bold">$3000.00</h2>
              </div>
              <TabsList>
                <TabsTrigger value="Checking">Checking</TabsTrigger>
                <TabsTrigger value="Savings">Savings</TabsTrigger>
                <TabsTrigger value="Credit">Visa</TabsTrigger>
              </TabsList>
            </div>
            {accounts.map((account) => {
              return (
                <TabsContent key={nanoid()} value={account.name}>
                  <PurchaseList account={account.name} />
                </TabsContent>
              );
            })}
          </Tabs>
        </section>
        <ul></ul>
      </div>
    </main>
  );
}
