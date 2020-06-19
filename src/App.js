import React from 'react';
import './App.css';
import { Header } from './modules/header';
import { Balance } from './modules/balance';
import { TransactionList } from './modules/transactionsList';
import { IncomeExpenses } from './modules/incomeExpense';
import { AddTransaction } from './modules/addTransaction';

import { GlobalProvider } from './contextStates/globalState';
function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  </GlobalProvider>
  );
}

export default App;
