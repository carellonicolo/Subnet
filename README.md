# 🌐 Subnet Calculator - IPv4 Subnetting Tool

Una moderna applicazione web per il calcolo professionale di subnet IPv4, progettata specificamente per studenti e professionisti IT.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black)
![React](https://img.shields.io/badge/React-19.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Funzionalità

### 🧮 Subnet Calculator
- Calcolo completo di subnet IPv4
- Conversione CIDR ↔ Subnet Mask
- Visualizzazione binaria degli indirizzi
- Identificazione classe IP e tipo (Private/Public)
- Range IP utilizzabili
- Network e Broadcast address

### 🔀 VLSM Calculator
- Variable Length Subnet Masking
- Allocazione ottimizzata delle subnet
- Supporto per requisiti di host variabili
- Ordinamento automatico per dimensione
- Vista tabellare e dettagliata

### 👁️ Subnet Visualizer
- Generazione automatica di tutte le subnet possibili
- Divisione di reti in subnet di dimensioni uguali
- Export dei risultati in CSV e PDF
- Statistiche dettagliate
- Visualizzazione chiara e intuitiva

### 📄 Export PDF Professionale
- Export PDF per tutti i calcolatori
- Layout professionale e ben formattato
- Tabelle dettagliate con informazioni complete
- Pronto per la stampa

## 🚀 Getting Started

### Prerequisiti
- Node.js 18+
- npm o yarn

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

Apri [http://localhost:3000](http://localhost:3000) nel tuo browser.

### Build per produzione

```bash
# Crea una build ottimizzata
npm run build

# Avvia il server di produzione
npm start
```

## 🏗️ Stack Tecnologico

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Linguaggio**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Componenti**: [Shadcn/UI](https://ui.shadcn.com/)
- **Animazioni**: [Framer Motion](https://www.framer.com/motion/)
- **Icone**: [Lucide Icons](https://lucide.dev/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF)

## 📁 Struttura del Progetto

```
subnet-calculator/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Pagina principale
│   ├── layout.tsx         # Layout globale
│   └── globals.css        # Stili globali
├── components/            # Componenti React
│   ├── ui/               # Componenti UI base (Shadcn)
│   ├── SubnetCalculator.tsx
│   ├── VLSMCalculator.tsx
│   └── SubnetVisualizer.tsx
├── utils/                 # Utility functions
│   ├── subnet.ts         # Logica calcoli subnetting
│   └── pdfExport.ts      # Funzioni export PDF
└── public/               # Asset statici
```

## 🧪 Testing

L'applicazione include:
- Validazione completa degli input
- Gestione degli errori
- Test dei calcoli IPv4
- Supporto per casi edge (RFC 3021 /31, /32)

## 🎨 Design

- **Design System**: Moderno e professionale con Tailwind CSS
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Accessibilità**: Componenti accessibili con Radix UI
- **Dark Mode Ready**: Supporto per tema scuro integrato
- **Performance**: Ottimizzato per velocità con Next.js 15

## 📚 Funzionalità Educative

L'applicazione include sezioni didattiche con:
- Spiegazione dei concetti base di subnetting
- Esempi pratici
- Tabelle di riferimento per CIDR e subnet mask
- Classi di indirizzi IP
- Suggerimenti per lo studio

## 🌐 Deploy

### Netlify
L'applicazione è ottimizzata per il deploy su Netlify:

```bash
# Build automatica
npm run build

# Deploy
netlify deploy --prod
```

### Vercel
Compatibile anche con Vercel:

```bash
vercel --prod
```

## 🤝 Contributi

I contributi sono benvenuti! Per favore:
1. Fork il progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📝 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori informazioni.

## 👨‍💻 Autore

Creato con ❤️ per studenti e professionisti IT

## 🙏 Ringraziamenti

- [Shadcn](https://twitter.com/shadcn) per gli eccellenti componenti UI
- La community di Next.js
- Tutti i contributori open-source

---

**⭐ Se questo progetto ti è stato utile, lascia una stella su GitHub!**
