'use client';

import { Network, Calculator, Eye, Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SubnetCalculator } from '@/components/SubnetCalculator';
import { VLSMCalculator } from '@/components/VLSMCalculator';
import { SubnetVisualizer } from '@/components/SubnetVisualizer';
import { GuideModal } from '@/components/GuideModal';

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
                <p className="text-xs text-muted-foreground">Powered By Prof. Carello Nicolò</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GuideModal />
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
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2024 Subnet Calculator. Powered By Prof. Carello Nicolò
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
