# Subnet Calculator Pro

> Calcolatore professionale di subnet IPv4 e IPv6 con supporto VLSM

[![Licenza MIT](https://img.shields.io/badge/Licenza-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GitHub stars](https://img.shields.io/github/stars/carellonicolo/Subnet?style=social)](https://github.com/carellonicolo/Subnet)
[![GitHub issues](https://img.shields.io/github/issues/carellonicolo/Subnet)](https://github.com/carellonicolo/Subnet/issues)

## Panoramica

Subnet Calculator Pro e un calcolatore di subnet completo e professionale per reti IPv4 e IPv6. Offre tre strumenti integrati: un calcolatore di subnet classico, un calcolatore VLSM (Variable Length Subnet Masking) per l'ottimizzazione degli indirizzi e una guida didattica interattiva sul subnetting.

Lo strumento e pensato per studenti di Sistemi e Reti, amministratori di rete e professionisti IT che necessitano di calcoli rapidi e precisi, con la possibilita di esportare i risultati in formato PDF e CSV.

## Funzionalita Principali

- **Calcolatore subnet IPv4** — Calcolo completo di network address, broadcast, range di host, wildcard mask e classe
- **Calcolatore subnet IPv6** — Supporto completo per indirizzi a 128 bit con notazione compressa
- **VLSM Calculator** — Suddivisione ottimale di una rete in sottoreti di dimensioni diverse
- **Guida didattica integrata** — Tutorial interattivo sul subnetting con esempi pratici
- **Esportazione** — Export dei risultati in PDF e CSV
- **Visualizzazione** — Rappresentazione visuale della suddivisione della rete
- **Dark mode** — Tema chiaro e scuro
- **Responsive** — Ottimizzato per ogni dimensione di schermo

## Tech Stack

| Tecnologia | Utilizzo |
|:--|:--|
| ![Next.js](https://img.shields.io/badge/Next.js_15-000000?logo=next.js&logoColor=white) | Framework React |
| ![React](https://img.shields.io/badge/React_19-61dafb?logo=react&logoColor=white) | UI Library |
| ![TypeScript](https://img.shields.io/badge/TypeScript_5-3178c6?logo=typescript&logoColor=white) | Linguaggio tipizzato |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06b6d4?logo=tailwindcss&logoColor=white) | Styling |
| ![Radix UI](https://img.shields.io/badge/Radix_UI-161618) | Componenti accessibili |
| ![jsPDF](https://img.shields.io/badge/jsPDF-f44336) | Generazione PDF |

## Requisiti

- **Node.js** >= 18
- **npm** >= 9 (oppure bun)

## Installazione

```bash
git clone https://github.com/carellonicolo/Subnet.git
cd Subnet
npm install
npm run dev
```

L'applicazione sara disponibile su `http://localhost:3000`.

## Utilizzo

1. **Subnet Calculator** — Inserisci un indirizzo IP e la maschera per ottenere tutti i dettagli della rete
2. **VLSM** — Definisci la rete principale e le sottoreti necessarie con i rispettivi host richiesti
3. **Guida** — Consulta la guida interattiva per approfondire i concetti di subnetting
4. **Esporta** — Scarica i risultati in PDF o CSV

## Struttura del Progetto

```
Subnet/
├── src/
│   ├── app/            # App Router Next.js
│   ├── components/     # Componenti React (calcolatori, visualizzazioni)
│   ├── lib/            # Logica di calcolo IPv4/IPv6/VLSM
│   └── hooks/          # Custom hooks
├── public/             # Asset statici
└── next.config.ts      # Configurazione Next.js
```

## Deploy

```bash
npm run build
```

Il progetto e ottimizzato per il deploy su Vercel, Cloudflare Pages o Netlify come applicazione Next.js statica.

## Contribuire

I contributi sono benvenuti! Consulta le [linee guida per contribuire](CONTRIBUTING.md) per maggiori dettagli.

## Licenza

Distribuito con licenza MIT. Vedi il file [LICENSE](LICENSE) per i dettagli completi.

## Autore

**Nicolo Carello**
- GitHub: [@carellonicolo](https://github.com/carellonicolo)
- Website: [nicolocarello.it](https://nicolocarello.it)

---

<sub>Sviluppato con l'ausilio dell'intelligenza artificiale.</sub>

## Progetti Correlati

Questo progetto fa parte di una collezione di strumenti didattici e applicazioni open-source:

| Progetto | Descrizione |
|:--|:--|
| [DFA Visual Editor](https://github.com/carellonicolo/AFS) | Editor visuale per automi DFA |
| [Turing Machine](https://github.com/carellonicolo/Turing-Machine) | Simulatore di Macchina di Turing |
| [Scheduler](https://github.com/carellonicolo/Scheduler) | Simulatore di scheduling CPU |
| [Base Converter](https://github.com/carellonicolo/base-converter) | Suite di conversione multi-funzionale |
| [Gioco del Lotto](https://github.com/carellonicolo/giocodellotto) | Simulatore Lotto e SuperEnalotto |
| [MicroASM](https://github.com/carellonicolo/microasm) | Simulatore assembly |
| [Flow Charts](https://github.com/carellonicolo/flow-charts) | Editor di diagrammi di flusso |
| [Cypher](https://github.com/carellonicolo/cypher) | Toolkit di crittografia |
| [Snake](https://github.com/carellonicolo/snake) | Snake game retro |
| [Pong](https://github.com/carellonicolo/pongcarello) | Pong game |
| [Calculator](https://github.com/carellonicolo/calculator-carello) | Calcolatrice scientifica |
| [IPSC Score](https://github.com/carellonicolo/IPSC) | Calcolatore punteggi IPSC |
| [Quiz](https://github.com/carellonicolo/quiz) | Piattaforma quiz scolastici |
| [Carello Hub](https://github.com/carellonicolo/carello-hub) | Dashboard educativa |
| [Prof Carello](https://github.com/carellonicolo/prof-carello) | Gestionale lezioni private |
| [DOCSITE](https://github.com/carellonicolo/DOCSITE) | Piattaforma documentale |
