'use client';

import { useState } from 'react';
import { ClipboardList, Brain, CheckCircle, Eye, EyeOff } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Define the exercise type
type Exercise = {
  id: string;
  title: string;
  question: string;
  solution: string;
};

const ipv4Exercises: Exercise[] = [
  {
    id: 'ipv4-1',
    title: 'Calcolo Base',
    question: 'Dato l\'indirizzo IP 192.168.10.50/27, calcola il Network Address, il Broadcast Address e il numero di host utilizzabili.',
    solution: '• Rete: /27 significa 27 bit a 1 (255.255.255.224).\n• Block size: 256 - 224 = 32.\n• Subnet di appartenenza (multipli di 32 vicini a 50): 32.\n• Network Address: 192.168.10.32\n• Broadcast Address: 192.168.10.63\n• Host utilizzabili: 30 (2^(32-27) - 2).'
  },
  {
    id: 'ipv4-2',
    title: 'Da CIDR a Subnet Mask',
    question: 'Converti la notazione CIDR /22 nella corrispondente Subnet Mask decimale.',
    solution: '• /22 significa 22 bit a 1: 11111111.11111111.11111100.00000000\n• In decimale diventa: 255.255.252.0'
  },
  {
    id: 'ipv4-3',
    title: 'Progetto VLSM',
    question: 'Hai a disposizione la rete 10.0.0.0/24. Devi suddividerla per 3 reparti che richiedono rispettivamente: 50 host, 30 host e 10 host.',
    solution: '1. Reparto A (50 host): Serve /26 (64 IP).\n   • Subnet: 10.0.0.0/26\n   • Range utilizzabile: .1 - .62\n   • Broadcast: .63\n\n2. Reparto B (30 host): Serve /27 (32 IP).\n   • Subnet: 10.0.0.64/27\n   • Range utilizzabile: .65 - .94\n   • Broadcast: .95\n\n3. Reparto C (10 host): Serve /28 (16 IP).\n   • Subnet: 10.0.0.96/28\n   • Range utilizzabile: .97 - .110\n   • Broadcast: .111'
  },
  {
    id: 'ipv4-4',
    title: 'Identificazione IP',
    question: 'L\'indirizzo 172.16.5.255/23 può essere assegnato a un PC?',
    solution: 'Sì. Per capirlo dobbiamo calcolare la rete di appartenenza:\n• /23 corrisponde alla subnet mask 255.255.254.0\n• Il block size sul terzo ottetto è 256 - 254 = 2\n• Le reti procedono per multipli di 2: 172.16.0.0, 172.16.2.0, 172.16.4.0, 172.16.6.0...\n• Per la rete 172.16.4.0/23, il range di host va da 172.16.4.1 a 172.16.5.254.\n• Il Broadcast Address è 172.16.5.255.\n\nRisposta: NO, perché 172.16.5.255 è il Broadcast Address di quella specifica subnet!'
  }
];

const ipv6Exercises: Exercise[] = [
  {
    id: 'ipv6-1',
    title: 'Abbreviazione IPv6',
    question: 'Abbrevia il seguente indirizzo IPv6 espanso secondo le regole standard:\n2001:0db8:0000:0000:0000:ff00:0042:8329',
    solution: '1. Rimuovo zeri iniziali in ogni blocco: 2001:db8:0:0:0:ff00:42:8329\n2. Sostituisco i gruppi di zeri consecutivi più lunghi con "::"\n\nRisultato: 2001:db8::ff00:42:8329'
  },
  {
    id: 'ipv6-2',
    title: 'Identificazione Prefix',
    question: 'Qual è il prefisso di rete (Network Prefix) per l\'indirizzo 2001:db8:acad:1::10/64?',
    solution: 'In una /64, i primi 64 bit (i primi 4 hextet) rappresentano il prefisso di rete.\n\nRisultato: 2001:db8:acad:1::/64'
  },
  {
    id: 'ipv6-3',
    title: 'Calcolo Subnet IPv6',
    question: 'Ti viene assegnato il prefisso aziendale 2001:db8:1234::/48. Vuoi creare la prima subnet e la decima subnet usando la prefix length standard per le LAN.',
    solution: 'La prefix length standard per le LAN è /64.\nPer suddividere un /48 in reti /64, si usa il quarto hextet come "Subnet ID" (valori da 0000 a FFFF).\n\n• Prima subnet (ID 0): 2001:db8:1234:0000::/64 (abbreviata: 2001:db8:1234::/64)\n• Decima subnet (ID 9, esadecimale=9): 2001:db8:1234:0009::/64 (abbreviata: 2001:db8:1234:9::/64)'
  }
];

function ExerciseItem({ exercise }: { exercise: Exercise }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center justify-between">
          <span>{exercise.title}</span>
          {showSolution && <CheckCircle className="h-4 w-4 text-green-500" />}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm font-medium whitespace-pre-wrap">{exercise.question}</p>
        
        <Button 
          variant={showSolution ? "secondary" : "outline"} 
          size="sm" 
          onClick={() => setShowSolution(!showSolution)}
          className="w-full sm:w-auto"
        >
          {showSolution ? (
            <><EyeOff className="h-4 w-4 mr-2" /> Nascondi Soluzione</>
          ) : (
            <><Eye className="h-4 w-4 mr-2" /> Mostra Soluzione</>
          )}
        </Button>

        {showSolution && (
          <div className="bg-muted p-4 rounded-lg text-sm border-l-4 border-green-500 whitespace-pre-wrap">
            {exercise.solution}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function ExercisesModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <ClipboardList className="h-4 w-4 mr-2" />
          <span>Esercizi</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Esercizi di Preparazione
          </DialogTitle>
          <DialogDescription>
            Mettiti alla prova con questi esercizi prima della verifica. Clicca su &quot;Mostra Soluzione&quot; per verificare le tue risposte.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="ipv4" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ipv4">Esercizi IPv4</TabsTrigger>
            <TabsTrigger value="ipv6">Esercizi IPv6</TabsTrigger>
          </TabsList>

          <TabsContent value="ipv4" className="space-y-4 py-4">
            {ipv4Exercises.map((exercise) => (
              <ExerciseItem key={exercise.id} exercise={exercise} />
            ))}
          </TabsContent>

          <TabsContent value="ipv6" className="space-y-4 py-4">
            {ipv6Exercises.map((exercise) => (
              <ExerciseItem key={exercise.id} exercise={exercise} />
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
