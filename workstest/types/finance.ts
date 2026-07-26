export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: "free" | "pro" | "enterprise";
  theme: "dark" | "light" | "system";
  currency: string;
  language: string;
}

export interface Transaction {
  id: string;
  amount: number;
  type: "expense" | "income";
  category: string;
  description: string;
  date: string;
  account: string;
  tags: string[];
  recurring?: boolean;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  period: "monthly" | "weekly" | "yearly";
  color: string;
}

export interface SavingsGoal {
  id: string;
  title: string;
  target: number;
  current: number;
  deadline: string;
  category: string;
  icon: string;
  completed: boolean;
}

export interface Investment {
  id: string;
  assetName: string;
  type: "stock" | "crypto" | "etf" | "mutual_fund" | "real_estate";
  quantity: number;
  pricePerUnit: number;
  changePercent: number;
  trend: "up" | "down" | "neutral";
}

export interface Debt {
  id: string;
  name: string;
  type: string;
  balance: number;
  originalBalance: number;
  interestRate: number;
  monthlyPayment: number;
  dueDate: string;
  payoffDate?: string;
}

export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  category: string;
  recurring: boolean;
  status: "paid" | "pending" | "overdue";
  subscription?: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: string;
}
