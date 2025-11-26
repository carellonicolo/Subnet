# 🌐 Subnet Calculator Pro

<div align="center">

**Calcolatore professionale di subnet IPv4 e IPv6**

Un'applicazione web moderna e completa per il calcolo, la visualizzazione e l'analisi di reti IPv4 e IPv6.
Progettata per studenti, amministratori di rete e professionisti IT.

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[Demo Live](#) • [Guida](#-guida-integrata) • [Contribuisci](#-contributi)

</div>

---

## ✨ Caratteristiche Principali

### 🔢 Supporto Completo IPv4 e IPv6
- **Doppio protocollo**: Switch rapido tra IPv4 e IPv6
- **Formati flessibili**: Supporto per notazione compressa, espansa, CIDR
- **Calcoli precisi**: Algoritmi ottimizzati e validati

### 📊 Tre Strumenti Integrati

#### 1. 🧮 Subnet Calculator
Calcola tutte le informazioni di una subnet:

**IPv4:**
- Network address e broadcast address
- Range IP utilizzabili (primo e ultimo host)
- Conversione CIDR ↔ Subnet Mask
- Rappresentazione binaria completa
- Classe IP e tipo (Private/Public/Special)
- Wildcard mask e numero totale di host

**IPv6:**
- Network address e range completo
- Formato compresso e espanso
- Rappresentazione binaria a 128 bit
- Tipo di indirizzo (Global Unicast, Link-Local, ULA, Multicast)
- Scope dell'indirizzo
- Reverse DNS (ip6.arpa)
- Supporto IPv4-mapped addresses

#### 2. 🔀 VLSM Calculator
Variable Length Subnet Masking per subnet di dimensioni diverse:

- Allocazione automatica ottimizzata
- Supporto per requisiti variabili di host per subnet
- Ordinamento intelligente per dimensione
- Visualizzazione tabellare e dettagliata
- Controllo overlap e spreco indirizzi
- Export risultati

#### 3. 👁️ Subnet Visualizer
Genera e visualizza tutte le subnet possibili:

- Divisione automatica di reti in subnet uguali
- Generazione fino a 1000 subnet
- Vista gerarchica e organizzata
- Statistiche complete in tempo reale
- Identificazione visiva dei tipi di indirizzo
- Export in CSV e PDF

### 📄 Export Professionale
- **PDF**: Layout professionale, tabelle formattate, pronto per la stampa
- **CSV**: Esportazione dati per analisi esterna
- **Copy-to-clipboard**: Copia rapida di qualsiasi campo

### 🎓 Guida Integrata
Guida didattica completa con sezioni separate per IPv4 e IPv6:

**Contenuti IPv4:**
- Cos'è un indirizzo IP
- Il sistema binario
- Subnet mask e CIDR
- Come calcolare manualmente
- Esempi pratici passo-passo
- Errori comuni da evitare
- Casi d'uso reali
- Glossario

**Contenuti IPv6:**
- Introduzione a IPv6 e vantaggi
- Sistema esadecimale e formato
- Tipi di indirizzi IPv6
- Prefix length e allocazioni
- Subnetting IPv6 vs IPv4
- SLAAC e auto-configurazione
- Best practices
- Glossario IPv6

### 🎨 Interfaccia Moderna
- **Dark Mode**: Tema chiaro/scuro con persistenza
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Accessibile**: Componenti accessibili conformi WCAG 2.1
- **Animazioni**: Transizioni fluide con Framer Motion
- **UX intuitiva**: Validazione in tempo reale, messaggi d'errore chiari

---

## 🚀 Quick Start

### Prerequisiti
- **Node.js** 18+
- **npm** o **yarn**

### Installazione

```bash
# Clona il repository
git clone https://github.com/tuousername/subnet-calculator.git

# Entra nella directory
cd subnet-calculator

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Build per Produzione

```bash
# Crea una build ottimizzata
npm run build

# Avvia il server di produzione
npm start
```

---

## 🏗️ Stack Tecnologico

| Tecnologia | Versione | Uso |
|------------|----------|-----|
| [Next.js](https://nextjs.org/) | 15.1 | Framework React con App Router |
| [React](https://react.dev/) | 19.0 | Libreria UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.0 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Styling utility-first |
| [Shadcn/UI](https://ui.shadcn.com/) | Latest | Componenti UI |
| [Radix UI](https://www.radix-ui.com/) | Latest | Primitive accessibili |
| [Framer Motion](https://www.framer.com/motion/) | Latest | Animazioni |
| [Lucide Icons](https://lucide.dev/) | Latest | Icone |
| [jsPDF](https://github.com/parallax/jsPDF) | Latest | Generazione PDF |

---

## 📁 Struttura del Progetto

```
subnet-calculator/
├── app/                        # Next.js App Router
│   ├── page.tsx               # Pagina principale con layout a tab
│   ├── layout.tsx             # Layout globale dell'app
│   └── globals.css            # Stili globali e tema
│
├── components/                 # Componenti React
│   ├── ui/                    # Componenti UI base (Shadcn)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   │
│   ├── SubnetCalculator.tsx           # Calculator IPv4
│   ├── VLSMCalculator.tsx             # VLSM IPv4
│   ├── SubnetVisualizer.tsx           # Visualizer IPv4
│   ├── IPv6SubnetCalculator.tsx       # Calculator IPv6
│   ├── IPv6VLSMCalculator.tsx         # VLSM IPv6
│   ├── IPv6SubnetVisualizer.tsx       # Visualizer IPv6
│   ├── GuideModal.tsx                 # Guida integrata (IPv4 + IPv6)
│   ├── ThemeProvider.tsx              # Provider tema dark/light
│   └── ThemeToggle.tsx                # Toggle dark mode
│
├── utils/                      # Utility functions
│   ├── subnet.ts              # Logica calcoli IPv4
│   ├── ipv6.ts                # Logica calcoli IPv6
│   └── pdfExport.ts           # Export PDF per entrambi i protocolli
│
├── lib/                        # Librerie e configurazioni
│   └── utils.ts               # Helper functions
│
└── public/                     # Asset statici
```

---

## 💡 Come Usare

### Subnet Calculator

1. Seleziona il protocollo (IPv4 o IPv6) dal tab principale
2. Scegli lo strumento "Calculator"
3. Inserisci un indirizzo IP valido
4. Scegli il CIDR/prefix dal dropdown o inseriscilo manualmente
5. Clicca "Calcola Subnet"
6. Esplora i risultati e usa i pulsanti "Copy" per copiare i dati
7. Export in PDF se necessario

**Esempi:**
- IPv4: `192.168.1.0/24`
- IPv6: `2001:db8::/32` o `fe80::1/64`

### VLSM Calculator

1. Inserisci la rete base con il suo prefix
2. Aggiungi le subnet necessarie con nome e numero di host richiesti
3. Clicca "Calcola VLSM"
4. Il sistema allocherà automaticamente le subnet in modo ottimizzato
5. Visualizza i dettagli di ogni subnet generata
6. Export per documentazione

### Subnet Visualizer

1. Inserisci la rete base e il prefix originale
2. Specifica il nuovo prefix length per le subnet
3. Imposta il limite di visualizzazione (1-1000 subnet)
4. Clicca "Genera Subnet"
5. Esplora visivamente tutte le subnet generate
6. Export in CSV per analisi esterna

---

## 🎯 Casi d'Uso

### 🏢 Azienda con più sedi
Dividi una rete `/24` per uffici diversi usando VLSM:
- Sede principale: 100 host → `/25`
- IT Department: 50 host → `/26`
- Amministrazione: 20 host → `/27`

### 🏠 Rete Domestica IPv6
Pianifica la tua rete IPv6 domestica:
- Allocazione ISP: `2001:db8:1234:5600::/56`
- Subnet per stanza: `/64` per ogni ambiente
- 256 subnet disponibili!

### ☁️ Data Center
Visualizza tutte le subnet di un range IPv6 `/48`:
- 65,536 subnet `/64` possibili
- Identifica e documenta l'allocazione
- Export per gestione IP address management (IPAM)

### 📚 Studio e Certificazioni
Impara e pratica subnetting per:
- Certificazioni Cisco (CCNA, CCNP)
- CompTIA Network+
- Esami universitari di reti
- Preparazione colloqui tecnici

---

## 🌐 Deploy

### Vercel (Consigliato)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tuousername/subnet-calculator)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### Docker

```dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

**Test Coverage:**
- ✅ Validazione indirizzi IPv4 e IPv6
- ✅ Calcoli subnet (network, broadcast, range)
- ✅ Conversioni binarie e esadecimali
- ✅ Identificazione tipi di indirizzo
- ✅ Algoritmi VLSM
- ✅ Casi edge e boundary conditions

---

## 🤝 Contributi

I contributi sono benvenuti! Ecco come puoi contribuire:

1. **Fork** il progetto
2. Crea un **branch** per la tua feature
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** le tue modifiche
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** al branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Apri una **Pull Request**

### Guidelines
- Scrivi codice TypeScript pulito e tipizzato
- Aggiungi test per nuove funzionalità
- Segui le convenzioni di stile esistenti
- Aggiorna la documentazione se necessario
- Assicurati che tutti i test passino

---

## 🐛 Bug Report & Feature Request

Hai trovato un bug o hai un'idea per una nuova funzionalità?

- 🐛 **Bug Report**: [Apri un issue](https://github.com/tuousername/subnet-calculator/issues/new?template=bug_report.md)
- 💡 **Feature Request**: [Suggerisci una feature](https://github.com/tuousername/subnet-calculator/issues/new?template=feature_request.md)

---

## 📋 Roadmap

- [x] Supporto IPv4 completo
- [x] Supporto IPv6 completo
- [x] VLSM per IPv4 e IPv6
- [x] Subnet Visualizer
- [x] Export PDF e CSV
- [x] Dark mode
- [x] Guida integrata
- [ ] API REST per integrazione
- [ ] CLI tool
- [ ] Import configurazioni da file
- [ ] Database subnet assegnate
- [ ] Calcolo subnet overlap/conflicts
- [ ] Generatore configurazioni router (Cisco, Juniper, MikroTik)
- [ ] Support per DHCPv6 range calculation
- [ ] IPv6 Privacy Extensions
- [ ] Multilingua (EN, IT, ES, FR)

---

## 📄 Licenza

Questo progetto è distribuito sotto licenza **MIT**. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.

```
MIT License

Copyright (c) 2024 Prof. Carello Nicolò

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Autore

**Prof. Carello Nicolò**

Creato con ❤️ per studenti e professionisti IT

---

## 🙏 Ringraziamenti

Questo progetto è stato reso possibile grazie a:

- [Shadcn](https://twitter.com/shadcn) per gli eccellenti componenti UI
- La community di [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/) per l'hosting
- Tutti i contributori open-source
- **RFC Standards**:
  - RFC 791 (Internet Protocol IPv4)
  - RFC 4291 (IPv6 Addressing Architecture)
  - RFC 5952 (IPv6 Text Representation)
  - RFC 4862 (IPv6 SLAAC)
  - RFC 1918 (Private IPv4 Addresses)
  - RFC 4193 (Unique Local IPv6 Addresses)

---

## 📚 Risorse Utili

- [RFC 791 - Internet Protocol](https://tools.ietf.org/html/rfc791)
- [RFC 4291 - IPv6 Addressing](https://tools.ietf.org/html/rfc4291)
- [IANA IPv4 Address Space](https://www.iana.org/assignments/ipv4-address-space/)
- [IANA IPv6 Address Space](https://www.iana.org/assignments/ipv6-address-space/)
- [Subnet Calculator Guide](https://www.subnet-calculator.com/)

---

## ⭐ Support

Se questo progetto ti è stato utile, considera di:

- ⭐ Lasciare una **stella** su GitHub
- 🐛 Segnalare **bug** o suggerire **miglioramenti**
- 🤝 **Contribuire** al codice
- 📢 **Condividere** il progetto con altri

---

<div align="center">

**[⬆ Torna all'inizio](#-subnet-calculator-pro)**

Made with ❤️ and ☕ by [Prof. Carello Nicolò](https://github.com/nicolocarello)

</div>
