'use client';

import PurchaseList from '@/components/PurchaseList/PurchaseList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import CheckIcon from '@/components/ui/icons/CheckIcon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import useAppContext from '@/hooks/useAppContext';

export default function Home() {
  const { state } = useAppContext();
  const accounts = state.accounts;

  return (
    <main>
      <div className="mx-4 mb-4 flex max-w-5xl justify-end gap-2 lg:mx-auto lg:pr-4">
        <CheckIcon className="fill-emerald-300" height="40" width="40" />
        <h2 className="text-4xl font-bold text-emerald-300">Accounts</h2>
      </div>
      <div className="m-auto max-w-5xl">
        <section className="mx-2">
          <Tabs defaultValue="checking">
            <Card className="bg-gradient-to-br from-red-500 to-violet-800">
              <CardHeader>
                <div>
                  <div>
                    <div className="text-sm font-light opacity-60">
                      account balance
                    </div>
                  </div>
                  <CardTitle className="text-4xl font-bold text-emerald-300">
                    {`$2743.10`}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <TabsList>
                    <TabsTrigger value="checking" className="font-normal">
                      Checking
                    </TabsTrigger>
                    <TabsTrigger value="savings" className="font-normal">
                      Savings
                    </TabsTrigger>
                    <TabsTrigger value="visa" className="font-normal">
                      Visa
                    </TabsTrigger>
                  </TabsList>
                </div>
              </CardContent>
            </Card>

            <TabsContent value={accounts.checking.accountId}>
              <PurchaseList account={accounts.checking.accountId} />
            </TabsContent>
            <TabsContent value={accounts.savings.accountId}>
              <PurchaseList account={accounts.savings.accountId} />
            </TabsContent>
            <TabsContent value={accounts.visa.accountId}>
              <PurchaseList account={accounts.visa.accountId} />
            </TabsContent>
          </Tabs>
        </section>
        <ul></ul>
      </div>
    </main>
  );
}
