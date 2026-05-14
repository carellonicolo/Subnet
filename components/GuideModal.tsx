'use client';

import { BookOpen, Binary, Network, Calculator, Lightbulb, GraduationCap, Shield, Cpu, Globe, ArrowRightLeft, Zap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export function GuideModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <BookOpen className="h-4 w-4 mr-2" />
          <span>Guida</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0 flex flex-col">
        {/* Sticky header */}
        <div className="px-6 pt-6 pb-4 border-b bg-background pr-14 shrink-0">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Guida Completa al Subnetting
            </DialogTitle>
            <DialogDescription>
              Impara il subnetting IPv4 e IPv6 da zero con questa guida passo-passo
            </DialogDescription>
          </DialogHeader>
        </div>

        <Tabs defaultValue="ipv4" className="flex flex-col flex-1 overflow-hidden">
          <div className="px-6 pt-3 pb-3 bg-background border-b shrink-0">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ipv4">IPv4</TabsTrigger>
              <TabsTrigger value="ipv6">IPv6</TabsTrigger>
            </TabsList>
          </div>

          <div className="overflow-y-auto flex-1 px-6 pb-6">

            {/* ═══════════════════════════════════════════════════════════
                IPv4 TAB
            ═══════════════════════════════════════════════════════════ */}
            <TabsContent value="ipv4" className="space-y-6 py-4 mt-0">

              {/* 1. Cos'è il Protocollo IPv4 */}
              <Card className="border-primary/40 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    1. Cos&apos;è il Protocollo IPv4?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    <strong>IPv4 (Internet Protocol version 4)</strong> è il protocollo di rete che governa
                    come i dati vengono indirizzati e instradati attraverso Internet e le reti locali.
                    Standardizzato nel <strong>1981</strong> con la pubblicazione di <strong>RFC 791</strong> da
                    parte di DARPA (l&apos;agenzia che ha creato ARPANET, il precursore di Internet), è ancora
                    oggi il protocollo più diffuso al mondo.
                  </p>

                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="text-sm font-semibold">Cos&apos;è un &quot;protocollo&quot;?</p>
                    <p className="text-sm">
                      Un protocollo è un insieme di <strong>regole condivise</strong> che permettono a dispositivi
                      diversi di comunicare tra loro. Così come le persone usano una lingua comune per capirsi,
                      i computer usano IPv4 per &quot;parlare&quot; nella stessa lingua sulla rete.
                    </p>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg space-y-3">
                    <p className="text-sm font-semibold">Cosa fa IPv4 concretamente?</p>
                    <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                      <li><strong>Indirizzamento</strong> — assegna un &quot;numero civico&quot; univoco a ogni dispositivo in rete</li>
                      <li><strong>Impacchettamento</strong> — i dati vengono suddivisi in <em>pacchetti</em> di dimensione gestibile</li>
                      <li><strong>Instradamento (routing)</strong> — ogni pacchetto percorre il cammino migliore verso la destinazione, passando da router a router</li>
                      <li><strong>Frammentazione</strong> — se un link di rete non può trasportare pacchetti grandi, IPv4 li divide automaticamente</li>
                      <li><strong>Riassemblaggio</strong> — il destinatario ricompone i frammenti nell&apos;ordine corretto</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">📦 Modello a Pacchetti</h4>
                      <p className="text-xs text-muted-foreground">
                        IPv4 non invia i dati come un flusso continuo, ma li divide in pacchetti
                        indipendenti. Ogni pacchetto può percorrere strade diverse e arrivare in
                        ordine diverso — sarà TCP a riordinarli!
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">🔄 Connectionless</h4>
                      <p className="text-xs text-muted-foreground">
                        IPv4 è <em>connectionless</em>: non stabilisce una connessione prima di inviare.
                        Ogni pacchetto è autosufficiente e porta l&apos;indirizzo sorgente e destinazione
                        nell&apos;header. La connessione &quot;affidabile&quot; è compito di TCP (livello superiore).
                      </p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">🎯 Best Effort</h4>
                      <p className="text-xs text-muted-foreground">
                        IPv4 fa del suo meglio (<em>best effort</em>) per consegnare i pacchetti,
                        ma <strong>non garantisce</strong> la consegna, l&apos;ordine di arrivo, né tempi
                        di risposta. Un pacchetto può perdersi senza che IPv4 lo sappia.
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">⚠️ Il Problema: Esaurimento</h4>
                      <p className="text-xs text-muted-foreground">
                        Con soli 32 bit, IPv4 supporta ~4,3 miliardi di indirizzi. Nel <strong>2011</strong>
                        l&apos;IANA ha assegnato l&apos;ultimo blocco agli RIR regionali. Grazie al NAT siamo
                        sopravvissuti, ma IPv6 è la vera soluzione a lungo termine.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="text-center bg-muted rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">1981</div>
                      <div className="text-xs text-muted-foreground">Anno standardizzazione (RFC 791)</div>
                    </div>
                    <div className="text-center bg-muted rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">32 bit</div>
                      <div className="text-xs text-muted-foreground">Dimensione indirizzo</div>
                    </div>
                    <div className="text-center bg-muted rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">~4,3 Mld</div>
                      <div className="text-xs text-muted-foreground">Indirizzi teorici totali</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Header IPv4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    2. Struttura dell&apos;Header IPv4
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Ogni pacchetto IPv4 inizia con un <strong>header di 20-60 byte</strong> che contiene
                    tutte le informazioni di controllo. Capire l&apos;header significa capire come IPv4 funziona davvero.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-primary text-primary-foreground">
                          <th className="p-2 text-left font-semibold">Campo</th>
                          <th className="p-2 text-left font-semibold">Bit</th>
                          <th className="p-2 text-left font-semibold">Funzione</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t bg-muted/30">
                          <td className="p-2 font-mono font-semibold">Version</td>
                          <td className="p-2">4</td>
                          <td className="p-2">Versione del protocollo (valore: 4 per IPv4)</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-mono font-semibold">IHL</td>
                          <td className="p-2">4</td>
                          <td className="p-2">Lunghezza header (in parole da 32 bit); minimo 5 = 20 byte</td>
                        </tr>
                        <tr className="border-t bg-muted/30">
                          <td className="p-2 font-mono font-semibold">DSCP / ECN</td>
                          <td className="p-2">8</td>
                          <td className="p-2">Quality of Service: priorità e notifica congestione</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-mono font-semibold">Total Length</td>
                          <td className="p-2">16</td>
                          <td className="p-2">Dimensione totale pacchetto (header + dati), max 65.535 byte</td>
                        </tr>
                        <tr className="border-t bg-muted/30">
                          <td className="p-2 font-mono font-semibold">Identification</td>
                          <td className="p-2">16</td>
                          <td className="p-2">ID univoco per riassemblare i frammenti dello stesso pacchetto</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-mono font-semibold">Flags / Offset</td>
                          <td className="p-2">16</td>
                          <td className="p-2">Controllo frammentazione (DF=Don&apos;t Fragment, MF=More Fragments)</td>
                        </tr>
                        <tr className="border-t bg-muted/30">
                          <td className="p-2 font-mono font-semibold">TTL</td>
                          <td className="p-2">8</td>
                          <td className="p-2">Time To Live: decrementato di 1 a ogni router; a 0 il pacchetto viene scartato</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-mono font-semibold">Protocol</td>
                          <td className="p-2">8</td>
                          <td className="p-2">Protocollo del payload: 6=TCP, 17=UDP, 1=ICMP, 89=OSPF</td>
                        </tr>
                        <tr className="border-t bg-muted/30">
                          <td className="p-2 font-mono font-semibold">Header Checksum</td>
                          <td className="p-2">16</td>
                          <td className="p-2">Verifica integrità dell&apos;header (ricalcolato a ogni hop)</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-mono font-semibold">Source IP</td>
                          <td className="p-2">32</td>
                          <td className="p-2">Indirizzo IP del mittente</td>
                        </tr>
                        <tr className="border-t bg-muted/30">
                          <td className="p-2 font-mono font-semibold">Destination IP</td>
                          <td className="p-2">32</td>
                          <td className="p-2">Indirizzo IP del destinatario</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-mono font-semibold">Options</td>
                          <td className="p-2">0-320</td>
                          <td className="p-2">Opzionale: timestamp, source routing, security label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-2">⏱️ TTL in dettaglio</p>
                      <p className="text-xs">
                        Il TTL (Time To Live) nasce come misura di &quot;hop count&quot;, non di tempo.
                        Quando invii un ping, il TTL parte tipicamente da <strong>64</strong> (Linux/macOS)
                        o <strong>128</strong> (Windows). Ogni router attraversato lo decrementa di 1.
                        Se arriva a 0, il router invia un messaggio ICMP &quot;Time Exceeded&quot; al mittente
                        e scarta il pacchetto. Il comando <code className="bg-background px-1 rounded">traceroute</code> sfrutta
                        proprio questo meccanismo per mappare il percorso di rete!
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-2">🧩 Frammentazione</p>
                      <p className="text-xs">
                        Ogni link di rete ha un <strong>MTU</strong> (Maximum Transmission Unit), tipicamente
                        1500 byte per Ethernet. Se un pacchetto è più grande, IPv4 lo frammenta in parti più
                        piccole usando i campi Identification, Flags e Fragment Offset. Il destinatario usa
                        questi campi per riassemblare i frammenti. La frammentazione è costosa — per questo
                        TCP usa la &quot;Path MTU Discovery&quot; per evitarla.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. Classi IPv4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="h-5 w-5 text-primary" />
                    3. Classi di Indirizzi IPv4 (Classful Addressing)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Prima dell&apos;introduzione di CIDR (1993), gli indirizzi IPv4 erano divisi in <strong>classi</strong>
                    rigide. Conoscere le classi è fondamentale per capire molti comportamenti di rete.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-2 text-left">Classe</th>
                          <th className="p-2 text-left">Primo Ottetto</th>
                          <th className="p-2 text-left">Bit iniziali</th>
                          <th className="p-2 text-left">Mask di default</th>
                          <th className="p-2 text-left">Host per rete</th>
                          <th className="p-2 text-left">Uso tipico</th>
                        </tr>
                      </thead>
                      <tbody className="font-mono">
                        <tr className="border-t bg-blue-50 dark:bg-blue-950">
                          <td className="p-2 font-bold text-blue-700 dark:text-blue-300 font-sans text-sm">A</td>
                          <td className="p-2">1–126</td>
                          <td className="p-2">0xxxxxxx</td>
                          <td className="p-2">/8</td>
                          <td className="p-2">16.777.214</td>
                          <td className="p-2 font-sans">Grandi corp. (IBM, USAF…)</td>
                        </tr>
                        <tr className="border-t bg-green-50 dark:bg-green-950">
                          <td className="p-2 font-bold text-green-700 dark:text-green-300 font-sans text-sm">B</td>
                          <td className="p-2">128–191</td>
                          <td className="p-2">10xxxxxx</td>
                          <td className="p-2">/16</td>
                          <td className="p-2">65.534</td>
                          <td className="p-2 font-sans">Università, ISP, enti</td>
                        </tr>
                        <tr className="border-t bg-yellow-50 dark:bg-yellow-950">
                          <td className="p-2 font-bold text-yellow-700 dark:text-yellow-300 font-sans text-sm">C</td>
                          <td className="p-2">192–223</td>
                          <td className="p-2">110xxxxx</td>
                          <td className="p-2">/24</td>
                          <td className="p-2">254</td>
                          <td className="p-2 font-sans">Piccole reti locali</td>
                        </tr>
                        <tr className="border-t bg-orange-50 dark:bg-orange-950">
                          <td className="p-2 font-bold text-orange-700 dark:text-orange-300 font-sans text-sm">D</td>
                          <td className="p-2">224–239</td>
                          <td className="p-2">1110xxxx</td>
                          <td className="p-2">—</td>
                          <td className="p-2">—</td>
                          <td className="p-2 font-sans">Multicast (OSPF, PIM…)</td>
                        </tr>
                        <tr className="border-t bg-red-50 dark:bg-red-950">
                          <td className="p-2 font-bold text-red-700 dark:text-red-300 font-sans text-sm">E</td>
                          <td className="p-2">240–255</td>
                          <td className="p-2">1111xxxx</td>
                          <td className="p-2">—</td>
                          <td className="p-2">—</td>
                          <td className="p-2 font-sans">Riservati / Sperimentali</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs">
                      <strong>Perché 127.x.x.x non è Classe A?</strong> Il range 127.0.0.0/8 è riservato per il
                      <strong> loopback</strong>. Tecnicamente appartiene alla Classe A per i bit iniziali,
                      ma è stato sottratto all&apos;uso generale. 127.0.0.1 = &quot;localhost&quot; — il tuo stesso computer.
                    </p>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">📉 Il Problema del Classful Addressing</p>
                    <p className="text-xs mb-2">
                      Le classi erano rigide e sprecavano enormi quantità di indirizzi. Una piccola azienda
                      con 300 dipendenti riceveva una Classe B completa (65.534 host) sprecando 65.000+ indirizzi.
                      Questo ha accelerato l&apos;esaurimento di IPv4. La soluzione è stata CIDR.
                    </p>
                    <div className="font-mono text-xs bg-background p-2 rounded">
                      Classful: rete = /8, /16, /24 (solo 3 scelte)<br />
                      CIDR: rete = /1 ... /32 (32 scelte — massima flessibilità)
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 4. Range Privati e Speciali */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    4. Range Privati, NAT e Indirizzi Speciali
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Non tutti gli indirizzi IPv4 sono instradabili su Internet. <strong>RFC 1918</strong> (1996)
                    ha definito tre range &quot;privati&quot; che chiunque può usare liberamente nelle proprie reti interne.
                  </p>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-3">🔒 Range Privati RFC 1918:</p>
                    <div className="space-y-2">
                      {[
                        { range: '10.0.0.0/8', hosts: '16.777.214 host', desc: 'Classe A privata — usata da grandi reti aziendali' },
                        { range: '172.16.0.0/12', hosts: '1.048.574 host', desc: 'Classi B private (172.16.x.x → 172.31.x.x)' },
                        { range: '192.168.0.0/16', hosts: '65.534 host', desc: 'La più comune: router di casa, piccole reti' },
                      ].map(({ range, hosts, desc }) => (
                        <div key={range} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 bg-background p-3 rounded text-xs">
                          <span className="font-mono font-bold w-36 shrink-0">{range}</span>
                          <span className="text-primary font-semibold w-36 shrink-0">{hosts}</span>
                          <span className="text-muted-foreground">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-3">📍 Indirizzi Speciali:</p>
                    <div className="space-y-2 text-xs">
                      {[
                        { ip: '127.0.0.0/8', label: 'Loopback', desc: 'Il tuo stesso dispositivo. 127.0.0.1 = "localhost". Usato per test locali.' },
                        { ip: '0.0.0.0/8', label: 'Unspecified', desc: 'Indirizzo non assegnato. Usato dai server per ascoltare su tutte le interfacce.' },
                        { ip: '255.255.255.255', label: 'Broadcast', desc: 'Invia a tutti i dispositivi sulla rete locale. Non attraversa i router.' },
                        { ip: '169.254.0.0/16', label: 'APIPA / Link-Local', desc: 'Auto-assegnato quando DHCP non risponde. "Segnale di allarme" per problemi di rete.' },
                        { ip: '100.64.0.0/10', label: 'Shared (RFC 6598)', desc: 'Usato dagli ISP per il Carrier-Grade NAT (CGN). Non routable su internet pubblico.' },
                        { ip: '224.0.0.0/4', label: 'Multicast', desc: 'Invia a un gruppo di destinatari (es. OSPF usa 224.0.0.5, mDNS usa 224.0.0.251).' },
                      ].map(({ ip, label, desc }) => (
                        <div key={ip} className="flex gap-3 py-1 border-b border-border/50 last:border-0">
                          <span className="font-mono font-semibold w-36 shrink-0 text-primary">{ip}</span>
                          <span className="font-semibold w-28 shrink-0">{label}</span>
                          <span className="text-muted-foreground">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 p-4 rounded-lg space-y-3">
                    <p className="text-sm font-semibold">🔄 Come funziona il NAT (Network Address Translation)</p>
                    <p className="text-xs">
                      Poiché gli IP privati non sono routable su Internet, il router usa il NAT per &quot;mascherare&quot;
                      tutti i dispositivi della rete interna dietro un unico IP pubblico. Questo ha permesso a
                      miliardi di dispositivi di accedere a Internet con pochi IP pubblici, allungando la vita a IPv4.
                    </p>
                    <div className="bg-background p-3 rounded font-mono text-xs space-y-1">
                      <div className="text-muted-foreground"># Flusso di una richiesta HTTP da casa tua:</div>
                      <div>PC (192.168.1.100:51234) → Router NAT → Google (8.8.8.8:80)</div>
                      <div className="text-muted-foreground"># Il router sostituisce l&apos;IP privato con il suo IP pubblico:</div>
                      <div>Router (85.12.34.56:51234) → Google (8.8.8.8:80)</div>
                      <div className="text-muted-foreground"># La risposta arriva al router che la smista al PC:</div>
                      <div>Google → Router (85.12.34.56) → PC (192.168.1.100)</div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Il router mantiene una <strong>tabella NAT</strong> per ricordare quale PC interno
                      ha fatto quale richiesta e smistare correttamente le risposte.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 5. Il Sistema Binario */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Binary className="h-5 w-5 text-primary" />
                    5. Il Sistema Binario — La Base di Tutto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    I computer &quot;pensano&quot; in <strong>binario</strong>: solo 0 e 1. Un indirizzo IP,
                    anche se lo vediamo come numeri decimali, è in realtà una sequenza di 32 bit (0 o 1).
                  </p>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
                    <p className="text-sm font-semibold">Conversione Decimale → Binario:</p>
                    <div className="space-y-2">
                      {[
                        ['192', '11000000'],
                        ['168', '10101000'],
                        ['1', '00000001'],
                        ['100', '01100100'],
                      ].map(([dec, bin]) => (
                        <div key={dec} className="flex items-center justify-between text-sm font-mono bg-background p-2 rounded">
                          <span>{dec} (dec)</span>
                          <span className="text-muted-foreground">→</span>
                          <span>{bin} (bin)</span>
                        </div>
                      ))}
                    </div>
                    <Separator />
                    <div className="text-sm font-mono bg-background p-3 rounded">
                      <div className="text-xs text-muted-foreground mb-1">IP 192.168.1.100 in binario:</div>
                      <div className="break-all">11000000.10101000.00000001.01100100</div>
                      <div className="text-xs text-muted-foreground mt-2">↑ 32 bit totali (4 ottetti × 8 bit)</div>
                    </div>
                  </div>

                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs">
                      <strong>💡 Tip:</strong> Ogni ottetto è di 8 bit. 2⁸ = 256, ecco perché ogni numero va da 0 a 255!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Subnet Mask */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    6. Cos&apos;è una Subnet Mask?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">La <strong>subnet mask</strong> divide l&apos;indirizzo IP in due parti:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-950 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">🌐 Parte Rete</h4>
                      <p className="text-xs">Identifica quale rete (come il CAP di una città)</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">🏠 Parte Host</h4>
                      <p className="text-xs">Identifica il dispositivo specifico (come il numero civico)</p>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg space-y-3">
                    <p className="text-sm font-semibold">Esempio Visivo:</p>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="bg-background p-3 rounded">
                        <div className="text-xs text-muted-foreground mb-1">IP Address:</div>
                        <div><span className="text-blue-600">192.168.1</span>.<span className="text-green-600">100</span></div>
                      </div>
                      <div className="bg-background p-3 rounded">
                        <div className="text-xs text-muted-foreground mb-1">Subnet Mask:</div>
                        <div><span className="text-blue-600">255.255.255</span>.<span className="text-green-600">0</span></div>
                      </div>
                    </div>
                    <div className="text-xs bg-primary/10 p-3 rounded">
                      <p className="mb-2"><strong>Come funziona:</strong></p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li><span className="text-blue-600">255 = parte di rete</span> (i primi 24 bit sono &quot;bloccati&quot;)</li>
                        <li><span className="text-green-600">0 = parte host</span> (gli ultimi 8 bit sono liberi per i dispositivi)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 7. CIDR */}
              <Card>
                <CardHeader>
                  <CardTitle>7. Notazione CIDR (la via veloce!)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Invece di scrivere <code className="bg-muted px-2 py-1 rounded">255.255.255.0</code>, possiamo usare <code className="bg-muted px-2 py-1 rounded">/24</code>
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-3">Equivalenze comuni:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono">
                      {[
                        ['/24', '255.255.255.0'],
                        ['/16', '255.255.0.0'],
                        ['/8', '255.0.0.0'],
                        ['/32', '255.255.255.255'],
                      ].map(([cidr, mask]) => (
                        <div key={cidr} className="flex justify-between bg-background p-2 rounded">
                          <span>{cidr}</span><span className="text-muted-foreground">=</span><span>{mask}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">📊 Tabella di Riferimento CIDR:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead className="bg-muted">
                          <tr>
                            <th className="p-2 text-left">CIDR</th>
                            <th className="p-2 text-left">Subnet Mask</th>
                            <th className="p-2 text-left">Host Utilizzabili</th>
                            <th className="p-2 text-left">Uso Comune</th>
                          </tr>
                        </thead>
                        <tbody className="font-mono">
                          {[
                            ['/24', '255.255.255.0', '254', 'Rete piccola/media'],
                            ['/25', '255.255.255.128', '126', 'Subnet media'],
                            ['/26', '255.255.255.192', '62', 'Piccolo ufficio'],
                            ['/27', '255.255.255.224', '30', 'Team/Dipartimento'],
                            ['/28', '255.255.255.240', '14', 'Gruppo piccolo'],
                            ['/30', '255.255.255.252', '2', 'Link punto-a-punto'],
                          ].map(([cidr, mask, hosts, use]) => (
                            <tr key={cidr} className="border-t">
                              <td className="p-2">{cidr}</td>
                              <td className="p-2">{mask}</td>
                              <td className="p-2">{hosts}</td>
                              <td className="p-2 font-sans">{use}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 8. Esempio Pratico */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    8. Esempio Pratico Passo-Passo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm font-semibold">Scenario: creare una rete per un ufficio con 50 computer</p>
                  <div className="space-y-3">
                    {[
                      { step: 'Step 1: Scegli l\'IP di partenza', content: <><p className="text-sm font-mono">192.168.1.0</p><p className="text-xs text-muted-foreground mt-1">(IP privato - perfetto per reti locali)</p></> },
                      { step: 'Step 2: Calcola il CIDR necessario', content: <><p className="text-sm">50 computer + 2 (network + broadcast) = 52 indirizzi necessari</p><p className="text-sm mt-2">2⁶ = 64 indirizzi → Usiamo <strong>/26</strong></p></> },
                      {
                        step: 'Step 3: Risultato finale', content: (
                          <div className="space-y-2 text-sm font-mono">
                            {[['Rete:', '192.168.1.0/26'], ['Subnet Mask:', '255.255.255.192'], ['Primo IP:', '192.168.1.1'], ['Ultimo IP:', '192.168.1.62'], ['Broadcast:', '192.168.1.63']].map(([k, v]) => (
                              <div key={k} className="flex justify-between"><span className="text-muted-foreground">{k}</span><span>{v}</span></div>
                            ))}
                          </div>
                        )
                      },
                    ].map(({ step, content }) => (
                      <div key={step} className="bg-muted p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">{step}</p>
                        {content}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 9. Calcolo Manuale */}
              <Card>
                <CardHeader>
                  <CardTitle>9. Come Calcolare Subnet Manualmente (Metodo Rapido)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">Impara a calcolare subnet con carta e penna! Ecco un metodo semplice:</p>
                  <div className="bg-muted p-4 rounded-lg space-y-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">Passo 1: Memorizza la &quot;Tabella Magica&quot;</p>
                      <div className="grid grid-cols-4 md:grid-cols-8 gap-2 text-xs font-mono text-center">
                        {[128, 64, 32, 16, 8, 4, 2, 1].map(v => (
                          <div key={v} className="bg-background p-2 rounded">{v}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Passo 2: Formula Veloce per Host</p>
                      <div className="bg-background p-3 rounded text-sm">
                        <p className="font-mono mb-2">Host Utilizzabili = 2^n - 2</p>
                        <p className="text-xs text-muted-foreground">dove <strong>n</strong> = numero di bit per gli host (32 - CIDR)</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Passo 3: Trucco del &quot;Block Size&quot;</p>
                      <div className="bg-background p-3 rounded space-y-2">
                        <p className="text-sm">Per /26: 256 - 192 = <strong>64</strong> (block size)</p>
                        <p className="text-sm">Le subnet iniziano ogni 64 indirizzi:</p>
                        <div className="font-mono text-xs space-y-1 mt-2">
                          <div>• 0, 64, 128, 192</div>
                          <div className="text-muted-foreground">→ .0, .64, .128, .192</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">📝 Esercizio Pratico:</p>
                    <p className="text-sm mb-2">Calcola 172.16.50.0/27 manualmente:</p>
                    <ul className="text-xs space-y-1 list-decimal list-inside ml-2">
                      <li>27 bit di rete → 32-27 = 5 bit per host</li>
                      <li>2⁵ = 32 indirizzi totali, 30 utilizzabili</li>
                      <li>Block size = 256 - 224 = 32</li>
                      <li>Subnet più vicina a .50 = .32</li>
                      <li>Range: 172.16.50.32 → 172.16.50.63</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 10. Errori Comuni */}
              <Card>
                <CardHeader>
                  <CardTitle>10. Errori Comuni da Evitare</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: 'Dimenticare Network e Broadcast', desc: 'Ricorda sempre di sottrarre 2 dal totale degli indirizzi disponibili!' },
                      { title: 'Confondere CIDR più grande = più host', desc: 'Al contrario! /24 ha PIÙ host di /28. Più grande il numero CIDR, più piccola la rete.' },
                      { title: 'Usare .0 o .255 come IP host', desc: 'In una /24, .0 è network e .255 è broadcast — non assegnabili ai dispositivi!' },
                      { title: 'Non allineare le subnet', desc: 'Le subnet devono iniziare su multipli del block size (es. /26: 0, 64, 128, 192).' },
                    ].map(({ title, desc }) => (
                      <div key={title} className="border-l-4 border-red-500 pl-4 py-2">
                        <p className="text-sm font-semibold">❌ {title}</p>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 11. Casi d'Uso */}
              <Card>
                <CardHeader>
                  <CardTitle>11. Casi d&apos;Uso nel Mondo Reale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { icon: '🏢', title: 'Azienda con 3 Dipartimenti', content: <><p><strong>VLSM su 192.168.10.0/24:</strong></p><ul className="list-disc list-inside ml-2 space-y-1 mt-1"><li>Vendite: .0/25 (126 host)</li><li>IT: .128/26 (62 host)</li><li>Admin: .192/27 (30 host)</li></ul></> },
                      { icon: '🏠', title: 'Rete Domestica', content: <p>Tipico: 192.168.1.0/24 — 254 dispositivi per Wi-Fi, PC, smartphone, IoT.</p> },
                      { icon: '🔗', title: 'Link Punto-a-Punto', content: <p>Router-to-Router: 10.0.0.0/30 — solo 2 IP utilizzabili, ideale tra due router.</p> },
                      { icon: '☁️', title: 'Cloud/Server Farm', content: <p>10.0.0.0/16 suddiviso in /24 per servizio — 256 subnet da 254 host ciascuna.</p> },
                    ].map(({ icon, title, content }) => (
                      <div key={title} className="bg-muted p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">{icon} {title}</p>
                        <div className="text-xs">{content}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 12. Tips */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader><CardTitle>💡 Tips &amp; Tricks per Imparare</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    {[
                      ['Memorizza le potenze di 2:', '2, 4, 8, 16, 32, 64, 128, 256'],
                      ['Parti da /24:', 'È il più comune e facile da capire'],
                      ['Usa questo tool:', 'Prova diversi IP e CIDR per vedere i risultati'],
                      ['Ricorda:', 'Più grande il CIDR (es. /30), meno host disponibili'],
                      ['Pratica:', 'Fai esercizi con carta e penna per assimilare i concetti'],
                    ].map(([bold, rest]) => (
                      <li key={bold} className="flex gap-2">
                        <span className="text-primary">✓</span>
                        <span><strong>{bold}</strong> {rest}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* 13. Glossario */}
              <Card>
                <CardHeader><CardTitle>📖 Glossario Rapido</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    {[
                      ['Network Address', 'Il primo IP della rete, identifica la rete stessa'],
                      ['Broadcast Address', 'L\'ultimo IP, invia messaggi a tutti i dispositivi'],
                      ['Host', 'Un dispositivo connesso alla rete (PC, stampante, etc.)'],
                      ['Subnet', 'Una sotto-rete, divisione di una rete più grande'],
                      ['Gateway', 'Il router che connette la tua rete a Internet'],
                      ['VLSM', 'Tecnica per creare subnet di dimensioni diverse'],
                      ['MTU', 'Maximum Transmission Unit — dimensione max di un frame'],
                      ['DHCP', 'Protocollo che assegna indirizzi IP automaticamente'],
                    ].map(([term, def]) => (
                      <div key={term}>
                        <strong>{term}:</strong>
                        <p className="text-xs text-muted-foreground">{def}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ═══════════════════════════════════════════════════════════
                IPv6 TAB
            ═══════════════════════════════════════════════════════════ */}
            <TabsContent value="ipv6" className="space-y-6 py-4 mt-0">

              {/* 1. Cos'è IPv6 e Perché Esiste */}
              <Card className="border-primary/40 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    1. Cos&apos;è il Protocollo IPv6 e Perché Esiste?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    <strong>IPv6 (Internet Protocol version 6)</strong> è il successore di IPv4, sviluppato
                    dall&apos;IETF e standardizzato nel <strong>1998</strong> con <strong>RFC 2460</strong>
                    (aggiornato da RFC 8200 nel 2017). È nato per risolvere il problema fondamentale di IPv4:
                    l&apos;esaurimento degli indirizzi disponibili.
                  </p>

                  <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">🚨 Il Problema che IPv6 Risolve</p>
                    <p className="text-xs mb-3">
                      IPv4 ha 2³² ≈ 4,3 miliardi di indirizzi. Sembravano infiniti nel 1981, ma negli anni
                      &apos;90 la crescita esplosiva di Internet ha reso chiaro che non sarebbero bastati.
                    </p>
                    <div className="space-y-2 text-xs font-mono bg-background p-3 rounded">
                      <div><span className="text-muted-foreground">IPv4 spazio:</span>  2³²  =    4.294.967.296 indirizzi</div>
                      <div><span className="text-muted-foreground">IPv6 spazio:</span>  2¹²⁸ = 340.282.366.920.938.463.463.374.607.431.768.211.456</div>
                      <div className="text-primary mt-1">IPv6 ha 79 ottilioni di volte più indirizzi di IPv4!</div>
                    </div>
                    <p className="text-xs mt-2 text-muted-foreground">
                      Con IPv6 si potrebbero assegnare circa <strong>50 ottilioni di indirizzi per metro
                      quadrato</strong> della superficie terrestre.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="text-sm font-semibold">📅 Cronologia IPv6:</p>
                    <div className="space-y-2 text-xs">
                      {[
                        ['1990', 'IETF riconosce il problema dell\'esaurimento IPv4'],
                        ['1994', 'Inizia sviluppo di IPng (Next Generation)'],
                        ['1998', 'RFC 2460 — IPv6 standardizzato'],
                        ['2011', 'IANA assegna l\'ultimo blocco IPv4 libero'],
                        ['2012', 'World IPv6 Launch — grandi siti abilitano IPv6 permanentemente'],
                        ['2017', 'RFC 8200 aggiorna e consolida le specifiche IPv6'],
                        ['Oggi', 'Circa il 40%+ del traffico Google è già su IPv6'],
                      ].map(([year, event]) => (
                        <div key={year} className="flex gap-3">
                          <span className="font-mono font-semibold text-primary w-12 shrink-0">{year}</span>
                          <span className="text-muted-foreground">{event}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="text-center bg-muted rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">1998</div>
                      <div className="text-xs text-muted-foreground">Anno standardizzazione (RFC 2460)</div>
                    </div>
                    <div className="text-center bg-muted rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">128 bit</div>
                      <div className="text-xs text-muted-foreground">Dimensione indirizzo</div>
                    </div>
                    <div className="text-center bg-muted rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">3,4×10³⁸</div>
                      <div className="text-xs text-muted-foreground">Indirizzi disponibili</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Caratteristiche Rivoluzionarie */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    2. Caratteristiche Rivoluzionarie di IPv6
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    IPv6 non è solo &quot;più indirizzi&quot;. È una riscrittura del protocollo che risolve
                    molti limiti di IPv4 e introduce funzionalità native che IPv4 non aveva.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">🚫 Niente più NAT</h4>
                      <p className="text-xs text-muted-foreground">
                        Con abbondanza di indirizzi, ogni dispositivo ha il suo IP pubblico globale.
                        Comunicazione end-to-end diretta — come era concepito Internet originalmente.
                        Addio ai problemi di NAT traversal per VoIP, gaming, P2P!
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">⚡ SLAAC — Auto-configurazione</h4>
                      <p className="text-xs text-muted-foreground">
                        Stateless Address Autoconfiguration: un dispositivo genera automaticamente
                        il suo indirizzo combinando il prefix annunciato dal router con il suo
                        identificatore di interfaccia (derivato dal MAC address via EUI-64).
                        Niente DHCP server obbligatorio!
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">🔒 IPSec nativo</h4>
                      <p className="text-xs text-muted-foreground">
                        IPv6 è stato progettato con IPSec (cifratura e autenticazione) come parte
                        integrante, non come estensione opzionale come in IPv4. Sicurezza
                        crittografica a livello di rete by design.
                      </p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">📢 Nessun Broadcast</h4>
                      <p className="text-xs text-muted-foreground">
                        IPv6 elimina il broadcast (che in IPv4 disturbava tutti i dispositivi della rete).
                        Al suo posto usa <strong>multicast</strong> — solo i dispositivi interessati
                        ricevono i messaggi. Reti più efficienti!
                      </p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">📦 Header Semplificato</h4>
                      <p className="text-xs text-muted-foreground">
                        L&apos;header IPv6 è fisso a 40 byte (vs variabile 20-60 di IPv4) e ha solo
                        8 campi (vs 14 di IPv4). I router elaborano i pacchetti più velocemente.
                        Le opzioni vengono gestite tramite extension headers.
                      </p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">🔀 NDP sostituisce ARP</h4>
                      <p className="text-xs text-muted-foreground">
                        In IPv4, ARP (Address Resolution Protocol) serve per mappare IP → MAC.
                        IPv6 usa NDP (Neighbor Discovery Protocol) basato su ICMPv6,
                        che è più sicuro, efficiente e usa multicast invece di broadcast.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">🌐 Flow Label — Novità IPv6</p>
                    <p className="text-xs">
                      IPv6 introduce il campo <strong>Flow Label</strong> (20 bit): permette ai router di
                      identificare e gestire &quot;flussi&quot; di pacchetti appartenenti alla stessa comunicazione
                      (es. una videochiamata) senza dover analizzare i livelli superiori. Utile per QoS
                      (Quality of Service) e load balancing.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 3. Header IPv6 vs IPv4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    3. Struttura dell&apos;Header IPv6 (vs IPv4)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    L&apos;header IPv6 è <strong>fisso a 40 byte</strong> e molto più semplice di IPv4.
                    I campi non necessari sono stati eliminati, quelli utili rinominati o semplificati.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold mb-2 text-center">Header IPv4 (20-60 byte)</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs border rounded overflow-hidden">
                          <tbody>
                            {[
                              ['Version (4b)', 'IHL (4b)', 'DSCP/ECN (8b)'],
                              ['Total Length (16b)', 'Identification (16b)'],
                              ['Flags (3b)', 'Fragment Offset (13b)'],
                              ['TTL (8b)', 'Protocol (8b)', 'Header Checksum (16b)'],
                              ['Source IP Address (32b)'],
                              ['Destination IP Address (32b)'],
                              ['Options (0-40b)'],
                            ].map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-red-50 dark:bg-red-950' : 'bg-red-100/50 dark:bg-red-900/30'}>
                                {row.map((cell, j) => (
                                  <td key={j} className="p-1.5 border text-center" colSpan={row.length === 1 ? 3 : 1}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2 text-center">Header IPv6 (40 byte fissi)</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs border rounded overflow-hidden">
                          <tbody>
                            {[
                              ['Version (4b)', 'Traffic Class (8b)', 'Flow Label (20b)'],
                              ['Payload Length (16b)', 'Next Header (8b)', 'Hop Limit (8b)'],
                              ['Source IPv6 Address (128b)'],
                              ['Destination IPv6 Address (128b)'],
                            ].map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-blue-50 dark:bg-blue-950' : 'bg-blue-100/50 dark:bg-blue-900/30'}>
                                {row.map((cell, j) => (
                                  <td key={j} className="p-1.5 border text-center" colSpan={row.length === 1 ? 3 : 1}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-3">Confronto campi chiave:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead className="bg-primary text-primary-foreground">
                          <tr>
                            <th className="p-2 text-left">Funzione</th>
                            <th className="p-2 text-left">IPv4</th>
                            <th className="p-2 text-left">IPv6</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['Hop limit', 'TTL (8b)', 'Hop Limit (8b) — stesso scopo, nome più chiaro'],
                            ['Protocollo superiore', 'Protocol (8b)', 'Next Header (8b) — supporta extension headers'],
                            ['QoS', 'DSCP/ECN (8b)', 'Traffic Class (8b) — equivalente'],
                            ['Identificazione flusso', 'Assente', 'Flow Label (20b) — novità IPv6'],
                            ['Frammentazione', 'Nell\'header base', 'Extension header separato (Fragment Header)'],
                            ['Checksum header', 'Presente (16b)', 'Eliminato — i livelli superiori già verificano'],
                            ['Opzioni', 'Nell\'header base', 'Extension headers separati e concatenati'],
                          ].map(([func, v4, v6], i) => (
                            <tr key={func} className={`border-t ${i % 2 === 0 ? 'bg-muted/30' : ''}`}>
                              <td className="p-2 font-semibold">{func}</td>
                              <td className="p-2 text-red-700 dark:text-red-400 font-mono">{v4}</td>
                              <td className="p-2 text-blue-700 dark:text-blue-400 font-mono">{v6}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 4. Transizione IPv4 → IPv6 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowRightLeft className="h-5 w-5 text-primary" />
                    4. Transizione da IPv4 a IPv6
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Non è possibile spegnere IPv4 da un giorno all&apos;altro. La transizione è graduale
                    e si usa una combinazione di meccanismi per far coesistere i due protocolli.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">✅ Dual Stack (il metodo preferito)</h4>
                      <p className="text-xs mb-2">
                        Ogni dispositivo e router supporta <strong>sia IPv4 che IPv6</strong> contemporaneamente.
                        Quando comunica con un host IPv6, usa IPv6. Con un host solo IPv4, usa IPv4.
                      </p>
                      <div className="bg-background p-2 rounded font-mono text-xs">
                        eth0: 192.168.1.100 (IPv4)<br />
                        eth0: 2001:db8::1 (IPv6)<br />
                        <span className="text-muted-foreground">→ Entrambi attivi contemporaneamente</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">🚇 Tunneling (6in4 / 6to4 / Teredo)</h4>
                      <p className="text-xs mb-2">
                        I pacchetti IPv6 vengono <strong>incapsulati dentro pacchetti IPv4</strong> per
                        attraversare reti che supportano solo IPv4. Utile per connettere isole IPv6
                        attraverso Internet IPv4.
                      </p>
                      <div className="bg-background p-2 rounded font-mono text-xs">
                        [IPv4 Header | IPv6 Header | Dati]<br />
                        <span className="text-muted-foreground">→ IPv6 &quot;viaja&quot; dentro IPv4</span>
                      </div>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">🔄 NAT64 + DNS64 (traduzione)</h4>
                      <p className="text-xs mb-2">
                        Permette a dispositivi <strong>solo-IPv6</strong> di comunicare con server
                        <strong> solo-IPv4</strong>. Un gateway NAT64 traduce i pacchetti IPv6 in IPv4
                        al volo. DNS64 sintetizza risposte AAAA (IPv6) per host che hanno solo record A (IPv4).
                      </p>
                      <div className="bg-background p-2 rounded font-mono text-xs">
                        Client IPv6 → NAT64 Gateway → Server IPv4<br />
                        <span className="text-muted-foreground">→ Usato da operatori mobili (molti telefoni hanno solo IPv6)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">📊 Adozione IPv6 nel mondo (2024-2025):</p>
                    <div className="space-y-2 text-xs">
                      {[
                        ['Google', '~45%', 'del traffico su IPv6'],
                        ['India', '>70%', 'di adozione (trainata da Jio)'],
                        ['USA', '~55%', 'di adozione generale'],
                        ['Germania', '~60%', 'di adozione'],
                        ['Italia', '~20%', 'ancora in crescita'],
                      ].map(([who, pct, what]) => (
                        <div key={who} className="flex gap-2">
                          <span className="font-semibold w-20 shrink-0">{who}:</span>
                          <span className="text-primary font-bold w-14 shrink-0">{pct}</span>
                          <span className="text-muted-foreground">{what}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 5. Formato e Abbreviazioni */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Binary className="h-5 w-5 text-primary" />
                    5. Il Sistema Esadecimale e Formato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    IPv6 usa il sistema <strong>esadecimale</strong> (base 16) per rappresentare i 128 bit.
                    I caratteri vanno da 0–9 e a–f.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
                    <p className="text-sm font-semibold">Regole di Abbreviazione:</p>
                    <div className="space-y-2">
                      {[
                        { title: '1. Rimozione degli zeri iniziali in ogni gruppo', ex: '2001:0db8:0000:0042 → 2001:db8:0:42' },
                        { title: '2. Compressione con :: (una sola volta per indirizzo!)', ex: '2001:0db8:0000:0000:0000:0000:0000:0001 → 2001:db8::1' },
                        { title: '3. Combinazione di entrambe le regole', ex: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156 → fe80::204:61ff:fe9d:f156' },
                      ].map(({ title, ex }) => (
                        <div key={title} className="bg-background p-3 rounded">
                          <p className="font-medium text-sm mb-1">{title}</p>
                          <p className="font-mono text-xs">{ex}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-xs"><strong>💡 Tip:</strong> Ogni hextet è di 16 bit. 8 hextets × 16 bit = 128 bit totali!</p>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Tipi di Indirizzi */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    6. Tipi di Indirizzi IPv6
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { color: 'green', title: '🌐 Global Unicast (2000::/3)', desc: 'Indirizzi pubblici routable globalmente su Internet. Equivalente agli IP pubblici IPv4.', ex: '2001:db8::/32' },
                      { color: 'blue', title: '🔗 Link-Local (fe80::/10)', desc: 'Validi solo sul link locale, auto-configurati. Non routable oltre il segmento di rete. Obbligatori su ogni interfaccia IPv6.', ex: 'fe80::1' },
                      { color: 'purple', title: '🏠 Unique Local (fc00::/7)', desc: 'Equivalente agli indirizzi privati IPv4. Per reti private non connesse a Internet.', ex: 'fd00::/8' },
                      { color: 'orange', title: '📡 Multicast (ff00::/8)', desc: 'Per comunicazioni one-to-many. IPv6 non usa broadcast, solo multicast.', ex: 'ff02::1 (tutti i nodi)' },
                    ].map(({ color, title, desc, ex }) => (
                      <div key={title} className={`bg-${color}-50 dark:bg-${color}-950 border-2 border-${color}-200 dark:border-${color}-800 rounded-lg p-4`}>
                        <h4 className="font-semibold text-sm mb-2">{title}</h4>
                        <p className="text-xs mb-1">{desc}</p>
                        <p className="font-mono text-xs text-muted-foreground">Es: {ex}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">⚙️ Indirizzi Speciali:</p>
                    <ul className="text-xs space-y-1">
                      <li><span className="font-mono">::1</span> — Loopback (come 127.0.0.1 in IPv4)</li>
                      <li><span className="font-mono">::</span> — Unspecified (come 0.0.0.0 in IPv4)</li>
                      <li><span className="font-mono">::ffff:0:0/96</span> — IPv4-mapped IPv6 (usato da dual-stack)</li>
                      <li><span className="font-mono">64:ff9b::/96</span> — Prefisso Well-Known NAT64</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 7. CIDR */}
              <Card>
                <CardHeader>
                  <CardTitle>7. Notazione CIDR (Prefix Length)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Come in IPv4, si usa la notazione <code className="bg-muted px-2 py-1 rounded">/n</code> dove n indica quanti bit identificano la rete (da 0 a 128).
                  </p>
                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">📊 Allocazioni Comuni in IPv6:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead className="bg-muted">
                          <tr>
                            <th className="p-2 text-left">Prefix</th>
                            <th className="p-2 text-left">Subnet/Host disponibili</th>
                            <th className="p-2 text-left">Uso Tipico</th>
                          </tr>
                        </thead>
                        <tbody className="font-mono">
                          {[
                            ['/3', 'Global Unicast Space', 'Blocco globale Internet'],
                            ['/32', '65.536 subnet /64', 'Allocazione ISP'],
                            ['/48', '65.536 subnet /64', 'Organizzazione/Sito'],
                            ['/56', '256 subnet /64', 'Utente domestico'],
                            ['/64', '2⁶⁴ host', 'Subnet LAN standard ⭐'],
                            ['/128', '1 host', 'Singolo dispositivo/loopback'],
                          ].map(([pfx, sub, use]) => (
                            <tr key={pfx} className={`border-t ${pfx === '/64' ? 'bg-primary/10 font-bold' : ''}`}>
                              <td className="p-2">{pfx}</td>
                              <td className="p-2">{sub}</td>
                              <td className="p-2 font-sans">{use}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="border-l-4 border-primary pl-3 bg-primary/5 p-3 rounded-r">
                    <p className="font-medium text-sm mb-1">⚠️ Best Practice: Usa sempre /64 per le LAN</p>
                    <p className="text-xs">Anche con pochi dispositivi, /64 garantisce compatibilità con SLAAC e tutti i protocolli IPv6!</p>
                  </div>
                </CardContent>
              </Card>

              {/* 8. Esempio Pratico */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    8. Esempio Pratico Passo-Passo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm font-semibold">Scenario: Pianificare la rete IPv6 per un&apos;organizzazione</p>
                  <div className="space-y-3">
                    {[
                      { step: 'Step 1: Ottieni allocazione dall\'ISP', content: <><p className="font-mono text-sm">2001:db8:1234::/48</p><p className="text-xs text-muted-foreground mt-1">Hai 65.536 possibili subnet /64 disponibili!</p></> },
                      { step: 'Step 2: Assegna subnet /64 a ogni LAN', content: <ul className="text-xs mt-2 space-y-1 font-mono"><li>→ Ufficio 1: 2001:db8:1234:0001::/64</li><li>→ Ufficio 2: 2001:db8:1234:0002::/64</li><li>→ Data Center: 2001:db8:1234:000a::/64</li><li>→ WiFi Ospiti: 2001:db8:1234:00ff::/64</li></ul> },
                      { step: 'Step 3: SLAAC configura automaticamente', content: <><p className="text-sm">Il router invia Router Advertisement con il prefix; i dispositivi generano da soli il proprio /128.</p></> },
                    ].map(({ step, content }) => (
                      <div key={step} className="bg-muted p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">{step}</p>
                        {content}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 9. Subnetting IPv6 */}
              <Card>
                <CardHeader>
                  <CardTitle>9. Come Fare Subnetting in IPv6</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">Il subnetting in IPv6 è più semplice di IPv4 grazie allo spazio enorme!</p>
                  <div className="bg-muted p-4 rounded-lg space-y-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">Differenze Chiave da IPv4:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                        <li>Non servono network address e broadcast address riservati</li>
                        <li>Non c&apos;è bisogno di &quot;risparmiare&quot; indirizzi — lo spazio è enorme</li>
                        <li>Si usano nibble boundaries (4 bit) per facilità di lettura</li>
                        <li>Standard: /64 per le LAN, /48 per organizzazioni</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Metodo Pratico:</p>
                      <div className="bg-background p-3 rounded space-y-2 text-xs">
                        <div><strong>1. Parti dal prefix ricevuto:</strong><p className="font-mono">2001:db8::/32</p></div>
                        <div><strong>2. Assegna /48 per ogni sede:</strong><p className="font-mono">2001:db8:XXXX::/48</p></div>
                        <div><strong>3. Crea subnet /64 per ogni LAN:</strong><p className="font-mono">2001:db8:XXXX:YYYY::/64</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">📝 Esercizio:</p>
                    <p className="text-sm mb-2">Da 2001:db8:abcd::/48, crea 4 subnet:</p>
                    <ul className="text-xs space-y-1 ml-2">
                      <li>• LAN Ufficio → 2001:db8:abcd:0001::/64</li>
                      <li>• WiFi → 2001:db8:abcd:0002::/64</li>
                      <li>• Server → 2001:db8:abcd:0010::/64</li>
                      <li>• DMZ → 2001:db8:abcd:00ff::/64</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* 10. Errori Comuni */}
              <Card>
                <CardHeader><CardTitle>10. Errori Comuni da Evitare</CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: 'Usare subnet più piccole di /64 per LAN', desc: 'SLAAC richiede /64! Non funzionerà con prefix più lunghi.' },
                      { title: 'Cercare di "risparmiare" indirizzi', desc: 'In IPv6 non è necessario! Hai miliardi di miliardi di indirizzi disponibili.' },
                      { title: 'Usare :: più di una volta per indirizzo', desc: '2001::db8::1 è SBAGLIATO — :: può comparire una sola volta!' },
                      { title: 'Dimenticare i link-local addresses', desc: 'Ogni interfaccia IPv6 ha SEMPRE un indirizzo fe80::, anche senza configurazione manuale.' },
                    ].map(({ title, desc }) => (
                      <div key={title} className="border-l-4 border-red-500 pl-4 py-2">
                        <p className="text-sm font-semibold">❌ {title}</p>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 11. Casi d'Uso */}
              <Card>
                <CardHeader><CardTitle>11. Casi d&apos;Uso nel Mondo Reale</CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { icon: '🏢', title: 'Grande Organizzazione', content: <><p><strong>Allocazione:</strong> 2001:db8::/32 dall&apos;ISP</p><ul className="list-disc list-inside ml-2 mt-1 space-y-1"><li>Sede 1: 2001:db8:0001::/48</li><li>Sede 2: 2001:db8:0002::/48</li><li>Data Center: 2001:db8:ff00::/48</li></ul></> },
                      { icon: '🏠', title: 'Rete Domestica', content: <><p><strong>Alloc. ISP:</strong> 2001:db8:1234:5600::/56</p><p className="mt-1">256 subnet /64 — una per stanza!</p></> },
                      { icon: '📱', title: 'IoT e Smart Devices', content: <p>Ogni dispositivo ha un IP pubblico — niente più NAT. Comunicazione end-to-end diretta.</p> },
                      { icon: '☁️', title: 'Cloud Infrastructure', content: <p>/48 per cliente, /64 per ogni VPC/subnet — isolamento semplice e scalabilità massima.</p> },
                    ].map(({ icon, title, content }) => (
                      <div key={title} className="bg-muted p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">{icon} {title}</p>
                        <div className="text-xs">{content}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 12. Best Practices */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader><CardTitle>💡 Best Practices e Tips</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    {[
                      ['Usa sempre /64 per LAN:', 'È lo standard e garantisce compatibilità totale con SLAAC'],
                      ['Pianifica la gerarchia:', 'Usa nibble boundaries per leggibilità (/48, /52, /56, /60, /64)'],
                      ['Documenta l\'allocazione:', 'Mantieni una mappa degli assegnamenti — con IPv6 puoi permettertelo!'],
                      ['Abilita SLAAC:', 'Lascia che i dispositivi si configurino automaticamente'],
                      ['Dual Stack subito:', 'Abilita IPv6 in parallelo con IPv4 per una transizione graduale'],
                      ['Non risparmiare indirizzi:', 'Lo spazio è virtualmente infinito — assegna liberamente'],
                    ].map(([bold, rest]) => (
                      <li key={bold} className="flex gap-2">
                        <span className="text-primary">✓</span>
                        <span><strong>{bold}</strong> {rest}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* 13. Glossario */}
              <Card>
                <CardHeader><CardTitle>📖 Glossario Rapido</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    {[
                      ['Hextet', 'Gruppo di 4 cifre esadecimali (16 bit) in un indirizzo IPv6'],
                      ['SLAAC', 'Stateless Address Autoconfiguration — gli host si configurano da soli'],
                      ['Link-Local', 'Indirizzo valido solo sul segmento locale (fe80::), sempre presente'],
                      ['Global Unicast', 'Indirizzo IPv6 pubblico routable su Internet (2000::/3)'],
                      ['Prefix Length', 'Numero di bit di rete nella notazione /n (es. /64)'],
                      ['EUI-64', 'Metodo per generare l\'identificatore di interfaccia dal MAC address'],
                      ['NDP', 'Neighbor Discovery Protocol — sostituisce ARP in IPv6'],
                      ['Flow Label', 'Campo 20-bit per identificare flussi di pacchetti correlati'],
                      ['Extension Header', 'Header opzionale aggiuntivo per frammentazione, routing, sicurezza'],
                      ['Dual Stack', 'Dispositivo/rete con IPv4 e IPv6 attivi contemporaneamente'],
                      ['NAT64', 'Gateway che traduce traffico IPv6 → IPv4 e viceversa'],
                      ['DHCPv6', 'Versione IPv6 di DHCP per configurazione con stato (stateful)'],
                    ].map(([term, def]) => (
                      <div key={term}>
                        <strong>{term}:</strong>
                        <p className="text-xs text-muted-foreground">{def}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
