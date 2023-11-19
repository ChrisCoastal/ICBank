export type Purchase = {
  type: string;
  location: string;
  date: string;
  amount: number;
  description: string;
};

export type Account = {
  name: string;
  purchases: Purchase[];
};
