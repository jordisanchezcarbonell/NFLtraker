"use client"

import { useState } from 'react';
import { BetForm } from '@/components/bet-form';
import { BetList } from '@/components/bet-list';
import { BetStats } from '@/components/bet-stats';

export default function Home() {
  const [bets, setBets] = useState([
    { id: 1, team: '1', amount: 100, cuota: 1.67, result: 'Win' },
    { id: 2, team: '2', amount: 50, cuota: 2.30, result: 'Loss' },
    { id: 3, team: '1', amount: 75, cuota: 1.90, result: 'Push' },
    { id: 4, team: '2', amount: 200, cuota: 2.10, result: 'Pending' },
  ]);

  const addBet = (newBet) => {
    setBets([...bets, { ...newBet, id: bets.length + 1 }]);
  };

  const updateBetResult = (id, newResult) => {
    setBets(bets.map(bet => bet.id === id ? { ...bet, result: newResult } : bet));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Seguimiento de Apuestas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <BetForm addBet={addBet} />
          <BetStats bets={bets} />
        </div>
        <BetList bets={bets} updateBetResult={updateBetResult} />
      </div>
    </div>
  );
}