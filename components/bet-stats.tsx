"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BetStats({ bets }) {
  const totalBets = bets.length;
  const winningBets = bets.filter(bet => bet.result === 'Win').length;
  
  const calculateProfit = (bet) => {
    if (bet.result !== 'Win' && bet.result !== 'Loss') return 0;
    
    const amount = bet.amount;
    const cuota = bet.cuota;
    
    if (bet.result === 'Win') {
      return amount * (cuota - 1);
    } else {
      return -amount;
    }
  };

  const totalProfit = bets.reduce((sum, bet) => sum + calculateProfit(bet), 0);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Apuestas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalBets}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Porcentaje de Aciertos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalBets > 0 ? ((winningBets / totalBets) * 100).toFixed(1) : 0}%
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Beneficio Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProfit.toFixed(2)}€</div>
        </CardContent>
      </Card>
    </div>
  );
}