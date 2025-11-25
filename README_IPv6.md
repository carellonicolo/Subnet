# IPv6 Subnet Calculator - Documentazione Completa

## Panoramica

L'applicazione Subnet Calculator è stata estesa con funzionalità complete per il calcolo e la gestione di subnet IPv6. Questa implementazione offre strumenti professionali per amministratori di rete, studenti e professionisti IT.

## 🚀 Nuove Funzionalità IPv6

### 1. IPv6 Subnet Calculator

Calcola tutte le informazioni relative a una subnet IPv6:

**Caratteristiche:**
- ✅ Supporto completo per formati IPv6 (espanso, compresso, IPv4-mapped)
- ✅ Conversione automatica tra formato compresso ed espanso
- ✅ Calcolo network address, first/last address
- ✅ Rappresentazione binaria a 128 bit
- ✅ Identificazione tipo di indirizzo (Global Unicast, Link-Local, ULA, Multicast)
- ✅ Determinazione scope dell'indirizzo
- ✅ Generazione reverse DNS (ip6.arpa)
- ✅ Supporto IPv4-mapped addresses
- ✅ Funzione copia rapida per tutti i campi
- ✅ Export PDF con tutti i dettagli

**Esempi di utilizzo:**
```
Input: 2001:0db8:85a3::8a2e:0370:7334/64
Output:
  - Network Address: 2001:db8:85a3::/64
  - Formato Compresso: 2001:db8:85a3::8a2e:370:7334
  - Formato Espanso: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
  - Tipo: Global Unicast
  - Scope: Global
  - Indirizzi Totali: 18,446,744,073,709,551,616
```

### 2. IPv6 VLSM Calculator

Divide una rete IPv6 in subnet di dimensioni variabili:

**Caratteristiche:**
- ✅ Allocazione automatica ottimizzata
- ✅ Ordinamento per dimensione (subnet più grandi prima)
- ✅ Supporto per numeri enormi di indirizzi
- ✅ Validazione in tempo reale
- ✅ Vista dettagliata per ogni subnet
- ✅ Export PDF completo

**Esempi di utilizzo:**
```
Input:
  - Rete Base: 2001:db8::/32
  - Subnet richieste:
    * Data Center: 65536 indirizzi
    * Office Network: 1024 indirizzi
    * DMZ: 256 indirizzi

Output:
  - Data Center: 2001:db8::/48 (281,474,976,710,656 indirizzi)
  - Office Network: 2001:db8:1::/54 (1,024 indirizzi allocati)
  - DMZ: 2001:db8:1:400::/56 (256 indirizzi allocati)
```

### 3. IPv6 Subnet Visualizer

Genera e visualizza tutte le subnet possibili:

**Caratteristiche:**
- ✅ Generazione multipla di subnet
- ✅ Limite configurabile (fino a 1000 subnet)
- ✅ Visualizzazione gerarchica
- ✅ Statistiche complete
- ✅ Export CSV per analisi esterna
- ✅ Indicatori visivi per tipo di indirizzo

**Esempi di utilizzo:**
```
Input:
  - Rete Base: 2001:db8::/48
  - Prefix Originale: /48
  - Nuovo Prefix: /64
  - Max Subnet: 50

Output:
  - 65,536 subnet possibili (mostra le prime 50)
  - Ogni subnet /64 contiene 18,446,744,073,709,551,616 indirizzi
```

## 📚 Guida IPv6 Integrata

La guida completa include:

- **Introduzione a IPv6**: storia, motivazioni, vantaggi
- **Formato degli indirizzi**: struttura, notazione esadecimale
- **Regole di abbreviazione**: compressione con ::, rimozione zeri iniziali
- **Tipi di indirizzi**: Global Unicast, Link-Local, ULA, Multicast, Loopback
- **Prefix Length**: allocazioni comuni (/32, /48, /56, /64, /128)
- **Subnetting IPv6**: differenze con IPv4, best practices
- **SLAAC**: auto-configurazione stateless
- **Best Practices**: raccomandazioni per uso /64, pianificazione gerarchia

## 🔧 Implementazione Tecnica

### Struttura dei File

```
utils/
  ├── ipv6.ts                    # Utility functions per IPv6
  └── ipv6.test.ts              # Test suite completa

components/
  ├── IPv6SubnetCalculator.tsx   # Componente calcolatore principale
  ├── IPv6VLSMCalculator.tsx     # Componente VLSM
  ├── IPv6SubnetVisualizer.tsx   # Componente visualizzatore
  └── IPv6GuideModal.tsx         # Guida educativa

utils/
  └── pdfExport.ts              # Export PDF (esteso per IPv6)
```

### Algoritmi Chiave

#### 1. Espansione/Compressione Indirizzi

```typescript
// Espande :: in sequenza di zeri
expandIPv6('2001:db8::1')
// → '2001:0db8:0000:0000:0000:0000:0000:0001'

// Comprime sequenza più lunga di zeri
compressIPv6('2001:0db8:0000:0000:0000:0000:0000:0001')
// → '2001:db8::1'
```

#### 2. Calcolo Network Address

```typescript
// Usa manipolazione binaria a 128 bit
// 1. Converte in binario
// 2. Applica mask basata su prefix
// 3. Converte risultato in IPv6
getIPv6NetworkAddress(ip, prefix)
```

#### 3. Identificazione Tipo Indirizzo

```typescript
// Analizza i primi bit dell'indirizzo
// 2000::/3    → Global Unicast
// fe80::/10   → Link-Local
// fc00::/7    → Unique Local
// ff00::/8    → Multicast
```

## 🎨 UI/UX Features

### Tema Dark/Light
- Switch dinamico con persistenza
- Supporto completo per tutti i componenti IPv6
- Palette colori ottimizzata per leggibilità

### Responsive Design
- Layout adattivo mobile-first
- Card impilabili su dispositivi piccoli
- Tabelle scrollabili orizzontalmente

### Interattività
- Auto-calcolo su Enter
- Validazione in tempo reale
- Messaggi di errore descrittivi
- Indicatori di stato (loading, success, error)

### Accessibility
- ARIA labels per screen readers
- Contrasti colori conformi WCAG 2.1
- Navigazione da tastiera completa

## 📊 Export Funzionalità

### Export PDF
Ogni calcolatore può esportare risultati in PDF professionale:

**Contenuto PDF:**
- Header con logo e timestamp
- Informazioni subnet complete
- Tabelle formattate
- Rappresentazione binaria
- Reverse DNS
- Footer con attributions
- Multipagina se necessario

**Formato file:**
```
ipv6_subnet_2001_db8__1_64.pdf
ipv6_vlsm_2001_db8__32.pdf
```

### Export CSV (Visualizer)
Esporta subnet generate in formato CSV:

**Colonne:**
- Subnet #
- Network Address (Compressed)
- Network Address (Expanded)
- Prefix
- First Address
- Last Address
- Total Addresses
- Address Type
- Scope

## 🧪 Testing

Suite di test completa con Jest:

```bash
npm test -- ipv6.test.ts
```

**Test Coverage:**
- ✅ Validazione indirizzi IPv6 (formati vari)
- ✅ Validazione prefix lengths
- ✅ Espansione/compressione indirizzi
- ✅ Conversione binaria
- ✅ Identificazione tipi di indirizzo
- ✅ Determinazione scope
- ✅ Calcoli subnet
- ✅ Casi edge (::, ::1, /0, /128)
- ✅ Esempi real-world

## 🌟 Best Practices Implementate

### 1. Performance
- Lazy loading dei componenti
- Memoization dove appropriato
- Debouncing per input validation
- Limite configurabile per generazione subnet

### 2. Sicurezza
- Sanitizzazione input utente
- Validazione rigorosa
- No eval() o codice dinamico
- XSS protection

### 3. Manutenibilità
- Codice TypeScript tipizzato
- Commenti JSDoc estensivi
- Separazione logica/UI
- Componenti riutilizzabili

### 4. Accessibilità
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Focus management

## 📖 Guida Utilizzo

### Quick Start

1. **Seleziona IPv6** dalla tab principale
2. **Scegli lo strumento**:
   - Calculator: calcoli singola subnet
   - VLSM: divisione in subnet variabili
   - Visualizer: generazione multipla subnet

### Calculator

1. Inserisci indirizzo IPv6 (qualsiasi formato)
2. Scegli prefix length (0-128) o usa dropdown preset
3. Clicca "Calcola Subnet"
4. Esplora risultati e usa pulsanti copia
5. Export PDF se necessario

### VLSM

1. Inserisci rete base con prefix
2. Aggiungi subnet richieste con nome e numero indirizzi
3. Clicca "Calcola VLSM"
4. Visualizza allocazione ottimizzata
5. Export PDF per documentazione

### Visualizer

1. Inserisci rete base e prefix originale
2. Specifica nuovo prefix per subnet
3. Imposta limite visualizzazione (1-1000)
4. Genera subnet
5. Esplora visualmente gerarchia
6. Export CSV per analisi

## 🔍 Esempi Pratici

### Esempio 1: Rete Aziendale

**Scenario:** ISP assegna 2001:db8:1234::/48 all'azienda

**Divisione:**
```
Head Office:     2001:db8:1234:0::/64    (LAN principale)
Branch Office 1: 2001:db8:1234:1::/64    (Filiale 1)
Branch Office 2: 2001:db8:1234:2::/64    (Filiale 2)
DMZ:            2001:db8:1234:100::/64   (Server pubblici)
Management:     2001:db8:1234:200::/64   (VLAN gestione)
```

### Esempio 2: Data Center

**Scenario:** Allocazione /48 per data center multi-tenant

**VLSM:**
```
Input:
  - Base: 2001:db8:5000::/48
  - Tenant A: 100000 indirizzi → /48 (281T indirizzi)
  - Tenant B: 50000 indirizzi → /49 (140T indirizzi)
  - Infrastructure: 10000 indirizzi → /52 (17T indirizzi)
```

### Esempio 3: Link-Local Testing

**Scenario:** Configurazione link-local per testing

```
Interface 1: fe80::1/64
Interface 2: fe80::2/64

Type: Link-Local Unicast
Scope: Link-Local (non-routable)
```

## 🚧 Limitazioni Note

1. **Numeri Grandi**: Per prefix < 75, numeri indirizzi mostrati come 2^n
2. **Subnet Visualizer**: Limite 1000 subnet per performance browser
3. **IPv4-mapped**: Supporto limitato a ::ffff:x.x.x.x/96
4. **VLSM IPv6**: Allocazione semplificata (potrebbe non essere ottimale al 100%)

## 🔮 Possibili Sviluppi Futuri

- [ ] Supporto IPv6 Privacy Extensions
- [ ] Calcolo subnet overlap/conflicts
- [ ] Import configurazioni da file
- [ ] Confronto IPv4 ↔ IPv6 side-by-side
- [ ] API REST per integrazione
- [ ] Database subnet assegnate
- [ ] Generatore configurazioni router (Cisco, Juniper)
- [ ] Supporto DHCPv6 range calculation

## 📝 Note di Sviluppo

**Versione:** 2.0.0 (con supporto IPv6)
**Data Rilascio:** Novembre 2024
**Autore:** Prof. Carello Nicolò
**Tecnologie:** Next.js 15, React 19, TypeScript 5, Tailwind CSS 3.4

## 🙏 Credits

Implementazione IPv6 basata su:
- RFC 4291 (IPv6 Addressing Architecture)
- RFC 5952 (IPv6 Text Representation Recommendation)
- RFC 4862 (IPv6 Stateless Address Autoconfiguration)
- RFC 3596 (DNS Extensions for IPv6)

## 📄 Licenza

© 2024 Subnet Calculator - Prof. Carello Nicolò
Tutti i diritti riservati.

---

**Per supporto o domande:**
Consulta la guida integrata nell'applicazione o contatta il team di sviluppo.
