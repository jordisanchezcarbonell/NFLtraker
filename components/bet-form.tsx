"use client"

import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BetForm({ addBet }) {
  const [team, setTeam] = useState('');
  const [amount, setAmount] = useState('');
  const [cuota, setCuota] = useState('');
  const [result, setResult] = useState('Pending');
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBet = { team, amount: Number(amount), cuota: Number(cuota), result };
    addBet(newBet);
    toast({
      title: "Apuesta realizada",
      description: `${amount}€ en ${team} con cuota ${cuota}. Resultado: ${result}`,
    })
    // Reset form
    setTeam('');
    setAmount('');
    setCuota('');
    setResult('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div>
        <Label htmlFor="team">Equipo</Label>
        <Select onValueChange={setTeam} value={team}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un equipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Equipo Local</SelectItem>
            <SelectItem value="2">Equipo Visitante</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="amount">Cantidad</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingresa la cantidad apostada"
        />
      </div>
      <div>
        <Label htmlFor="cuota">Cuota</Label>
        <Input
          id="cuota"
          type="number"
          step="0.01"
          value={cuota}
          onChange={(e) => setCuota(e.target.value)}
          placeholder="Ingresa la cuota (ej. 1.67, 2.30)"
        />
      </div>
      <Button type="submit">Realizar Apuesta</Button>
    </form>
  );
}