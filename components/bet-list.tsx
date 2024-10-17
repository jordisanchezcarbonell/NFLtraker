"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BetList({ bets, updateBetResult }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tus Apuestas</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Equipo</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Cuota</TableHead>
            <TableHead>Resultado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bets.map((bet) => (
            <TableRow key={bet.id}>
              <TableCell>{bet.team === '1' ? 'Local' : 'Visitante'}</TableCell>
              <TableCell>{bet.amount}€</TableCell>
              <TableCell>{bet.cuota}</TableCell>
              <TableCell>
                <Select
                  value={bet.result}
                  onValueChange={(newResult) => updateBetResult(bet.id, newResult)}
                >
                  <SelectTrigger>
                    <SelectValue>{bet.result}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Win">Ganada</SelectItem>
                    <SelectItem value="Loss">Perdida</SelectItem>
                    <SelectItem value="Push">Nula</SelectItem>
                    <SelectItem value="Pending">Pendiente</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}