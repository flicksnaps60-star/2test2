import { User, Transaction, Budget, SavingsGoal, Investment, Debt, Bill, NotificationItem } from "@/types/finance";

export const CURRENT_USER: User = {
  id: "usr_1",
  name: "Alex Rivera",
  email: "alex@financeflow.ai",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
  plan: "pro",
  theme: "dark",
  currency: "USD",
  language: "en",
};

export const TRANSACTIONS: Transaction[] = [
  { id: "t1", amount: -245.5, type: "expense", category: "Food & Dining", description: "Grocery Shopping - Whole Foods", date: "2026-07-24", account: "Main Checking", tags: ["grocery", "essential"] },
  { id: "t2", amount: -89.99, type: "expense", category: "Entertainment", description: "Netflix Premium Subscription", date: "2026-07-23", account: "Credit Card", tags: ["subscription"], recurring: true },
  { id: "t3", amount: 5800, type: "income", category: "Salary", description: "Monthly Salary - TechCorp", date: "2026-07-20", account: "Main Checking", tags: ["salary", "primary"] },
  { id: "t4", amount: -320, type: "expense", category: "Transportation", description: "Fuel & Parking", date: "2026-07-22", account: "Credit Card", tags: ["transport"] },
  { id: "t5", amount: -1250, type: "expense", category: "Housing", description: "Monthly Rent", date: "2026-07-01", account: "Main Checking", tags: ["rent", "fixed"] },
  { id: "t6", amount: -450, type: "expense", category: "Health", description: "Dental Insurance Premium", date: "2026-07-05", account: "Main Checking", tags: ["insurance"] },
  { id: "t7", amount: 1200, type: "income", category: "Freelance", description: "UI Design Project - Stripe", date: "2026-07-18", account: "Savings", tags: ["freelance", "design"] },
  { id: "t8", amount: -78.4, type: "expense", category: "Food & Dining", description: "Dinner - The Modern Kitchen", date: "2026-07-25", account: "Main Checking", tags: ["dining"] },
];

export const BUDGETS: Budget[] = [
  { id: "b1", category: "Food & Dining", limit: 800, spent: 712.3, period: "monthly", color: "#ec4899" },
  { id: "b2", category: "Transportation", limit: 500, spent: 320, period: "monthly", color: "#f59e0b" },
  { id: "b3", category: "Entertainment", limit: 300, spent: 289.5, period: "monthly", color: "#8b5cf6" },
  { id: "b4", category: "Health", limit: 600, spent: 450, period: "monthly", color: "#10b981" },
  { id: "b5", category: "Housing", limit: 1600, spent: 1250, period: "monthly", color: "#6366f1" },
];

export const SAVINGS_GOALS: SavingsGoal[] = [
  { id: "g1", title: "Dream Vacation - Tokyo", target: 8500, current: 6200, deadline: "2026-12-15", category: "Travel", icon: "plane", completed: false },
  { id: "g2", title: "Emergency Fund", target: 15000, current: 12800, deadline: "2026-11-30", category: "Emergency", icon: "shield", completed: false },
  { id: "g3", title: "New Car Down Payment", target: 12000, current: 8900, deadline: "2027-03-01", category: "Vehicle", icon: "car", completed: false },
  { id: "g4", title: "Tech Gadgets Fund", target: 3000, current: 3000, deadline: "2026-07-01", category: "Tech", icon: "laptop", completed: true },
];

export const INVESTMENTS: Investment[] = [
  { id: "i1", assetName: "Tesla Inc.", type: "stock", quantity: 25, pricePerUnit: 245.3, changePercent: 12.4, trend: "up" },
  { id: "i2", assetName: "Apple Inc.", type: "stock", quantity: 40, pricePerUnit: 189.5, changePercent: 8.2, trend: "up" },
  { id: "i3", assetName: "Bitcoin", type: "crypto", quantity: 0.42, pricePerUnit: 72450, changePercent: -3.1, trend: "down" },
  { id: "i4", assetName: "S&P 500 ETF", type: "etf", quantity: 15, pricePerUnit: 545.2, changePercent: 5.8, trend: "up" },
  { id: "i5", assetName: "Real Estate Trust", type: "real_estate", quantity: 200, pricePerUnit: 125, changePercent: 2.3, trend: "neutral" },
];

export const DEBTS: Debt[] = [
  { id: "d1", name: "Primary Credit Card", type: "Credit Card", balance: 2840, originalBalance: 5200, interestRate: 18.9, monthlyPayment: 250, dueDate: "2026-08-05" },
  { id: "d2", name: "Car Loan - Toyota", type: "Auto Loan", balance: 12400, originalBalance: 28500, interestRate: 6.5, monthlyPayment: 520, dueDate: "2026-08-15", payoffDate: "2028-06-15" },
  { id: "d3", name: "Student Loan", type: "Student Loan", balance: 18400, originalBalance: 32000, interestRate: 4.2, monthlyPayment: 310, dueDate: "2026-08-01", payoffDate: "2031-09-01" },
];

export const BILLS: Bill[] = [
  { id: "bl1", name: "Netflix Premium", amount: 19.99, dueDate: "2026-07-28", category: "Entertainment", recurring: true, status: "pending", subscription: true },
  { id: "bl2", name: "Spotify Premium", amount: 14.99, dueDate: "2026-07-30", category: "Entertainment", recurring: true, status: "pending", subscription: true },
  { id: "bl3", name: "Electricity Bill", amount: 156.4, dueDate: "2026-08-05", category: "Utilities", recurring: true, status: "pending" },
  { id: "bl4", name: "Internet & Fiber", amount: 89.99, dueDate: "2026-07-31", category: "Utilities", recurring: true, status: "pending", subscription: true },
  { id: "bl5", name: "Phone & Data", amount: 65.0, dueDate: "2026-08-02", category: "Utilities", recurring: true, status: "pending", subscription: true },
];

export const NOTIFICATIONS: NotificationItem[] = [
  { id: "n1", title: "Budget Alert", message: "You are 89% through your Entertainment budget for July.", type: "warning", read: false, createdAt: "2026-07-25T10:00:00Z" },
  { id: "n2", title: "Savings Milestone", message: "Your Tokyo Vacation goal reached 73% progress!", type: "success", read: false, createdAt: "2026-07-24T14:30:00Z" },
  { id: "n3", title: "Bill Due Soon", message: "Netflix subscription of $19.99 is due in 3 days.", type: "info", read: false, createdAt: "2026-07-25T09:00:00Z" },
  { id: "n4", title: "AI Insight", message: "Reduce dining out by 20% to reach savings goal 15 days faster.", type: "info", read: true, createdAt: "2026-07-25T08:00:00Z" },
];
