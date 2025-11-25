'use client';

import { Network, Calculator, Eye, BookOpen, Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SubnetCalculator } from '@/components/SubnetCalculator';
import { VLSMCalculator } from '@/components/VLSMCalculator';
import { SubnetVisualizer } from '@/components/SubnetVisualizer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Network className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Subnet Calculator
                </h1>
                <p className="text-xs text-muted-foreground">IPv4 Subnetting Tool</p>
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Strumento Professionale per il{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Calcolo delle Subnet
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calcola subnet IPv4, VLSM e visualizza divisioni di rete in modo semplice e intuitivo.
            Perfetto per studenti, amministratori di rete e professionisti IT.
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="calculator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid h-auto p-1">
            <TabsTrigger value="calculator" className="gap-2">
              <Calculator className="h-4 w-4" />
              <span>Calculator</span>
            </TabsTrigger>
            <TabsTrigger value="vlsm" className="gap-2">
              <Network className="h-4 w-4" />
              <span>VLSM</span>
            </TabsTrigger>
            <TabsTrigger value="visualizer" className="gap-2">
              <Eye className="h-4 w-4" />
              <span>Visualizer</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <SubnetCalculator />
          </TabsContent>

          <TabsContent value="vlsm" className="space-y-6">
            <VLSMCalculator />
          </TabsContent>

          <TabsContent value="visualizer" className="space-y-6">
            <SubnetVisualizer />
          </TabsContent>
        </Tabs>

        {/* Theory Section */}
        <div className="mt-12">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <CardTitle>Guida Rapida al Subnetting IPv4</CardTitle>
              </div>
              <CardDescription>
                Concetti fondamentali per comprendere e utilizzare il subnetting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Cosa sono le Subnet?</h3>
                  <p className="text-sm text-muted-foreground">
                    Una subnet (sottorete) è una suddivisione logica di una rete IP. Il subnetting
                    permette di dividere una grande rete in reti più piccole e gestibili, migliorando
                    le prestazioni e la sicurezza.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-mono">
                      Esempio: 192.168.1.0/24 può diventare:<br />
                      • 192.168.1.0/26 (64 host)<br />
                      • 192.168.1.64/26 (64 host)<br />
                      • 192.168.1.128/26 (64 host)<br />
                      • 192.168.1.192/26 (64 host)
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Notazione CIDR</h3>
                  <p className="text-sm text-muted-foreground">
                    CIDR (Classless Inter-Domain Routing) è una notazione che indica quanti bit
                    della subnet mask sono impostati a 1. Un /24 significa che i primi 24 bit sono
                    per la rete e gli ultimi 8 per gli host.
                  </p>
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="text-sm font-mono">
                      <strong>/24</strong> = 255.255.255.0 → 254 host<br />
                      <strong>/25</strong> = 255.255.255.128 → 126 host<br />
                      <strong>/26</strong> = 255.255.255.192 → 62 host<br />
                      <strong>/27</strong> = 255.255.255.224 → 30 host<br />
                      <strong>/28</strong> = 255.255.255.240 → 14 host
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Classi di Indirizzi IP</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span className="font-medium">Classe A</span>
                      <span className="font-mono text-xs">1.0.0.0 - 126.255.255.255</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span className="font-medium">Classe B</span>
                      <span className="font-mono text-xs">128.0.0.0 - 191.255.255.255</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span className="font-medium">Classe C</span>
                      <span className="font-mono text-xs">192.0.0.0 - 223.255.255.255</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">IP Privati</h3>
                  <p className="text-sm text-muted-foreground">
                    Gli indirizzi IP privati sono riservati per l&apos;uso in reti locali e non sono
                    instradabili su Internet. Sono definiti in RFC 1918.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span className="font-medium">Classe A</span>
                      <span className="font-mono text-xs">10.0.0.0/8</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span className="font-medium">Classe B</span>
                      <span className="font-mono text-xs">172.16.0.0/12</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted rounded">
                      <span className="font-medium">Classe C</span>
                      <span className="font-mono text-xs">192.168.0.0/16</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Suggerimenti per lo Studio
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground ml-8 list-disc">
                  <li>Inizia praticando con reti /24 (subnet mask 255.255.255.0)</li>
                  <li>Memorizza le potenze di 2: 2, 4, 8, 16, 32, 64, 128, 256</li>
                  <li>Ricorda: ogni subnet ha 2 indirizzi riservati (network e broadcast)</li>
                  <li>Usa VLSM per ottimizzare l&apos;uso degli indirizzi IP</li>
                  <li>Pratica convertendo tra binario e decimale</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2024 Subnet Calculator. Creato per studenti e professionisti IT.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-foreground transition-colors">
                Documentazione
              </a>
              <span>•</span>
              <a href="#" className="hover:text-foreground transition-colors">
                Feedback
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
