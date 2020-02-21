### Kan jeg bruke den gamle løsningen?

Nei.

---

## Innlogging

### Jeg kan ikke logge inn, hva gjør jeg?

Kun godkjente brukere har adgang til systemet. Er ikke e-post-adressen du prøver å logge inn med lagt inn som bruker i systemet, vil du ikke ha mulighet til å logge inn. Be en systemadministrator om tilgang.

### ... men jeg er allerede lagt inn!

Da er det nok noe feil i systemet. Ta kontakt med systemadministrator.

---

## Rettigheter til å endre

### Jeg kan ikke legge inn eller endre mål og nøkkelresultater

Du må være medlem av et produkt for å gjøre endringer på produktet. Andre registrerte teammedlemmer kan legge deg til produktet dersom du skal ha tilgang.

### ... men det er jo ingen medlemmer på teamet!

Kontakt en systemadministrator for å legge deg inn som medlem av et team.

### Legge til team-medlemmer

På produktsiden klikk på «Endre produkt» i [sidemenyen](/sidebar.png), og deretter skriv inn navn eller e-post addresse under «Team»-feltet.

Dersom en persom du ønsker å legge til ikke eksisterer i listen må en systemadministrator legge til brukeren til systemet først.

Kun systemadministratorer og eksisterende team-medlemmer har rettigheter til å legge til nye medlemmer.

---

## Profil

### Hvordan kan jeg endre profilbilde?

Gå til [profilsiden](/me) og endre feltet «Display name» og trykk `Lagre`.

---

### Hvordan beregnes progresjon for et produkt

Den totale progresjonen for et produkt eller produktområde beregnes ut fra gjennomsnitt av progresjonen for _målene_ innenfor en periode (kvartal). Alle målene vektes likt uavhengig av antall nøkkelresultater for målet.

Progresjonen for et nøkkelresultat er prosent av nåværende verdi sammenlignet med avstanden mellom start- og målverdiene. Dersom nåværende verdi er lavere enn startverdien blir den satt til 0% og dersom den er passert målverdien blir progresjonen satt til 100%.

### Hva betyr «Dashboard-bruker»

Ved å logge inn som «dashboard-bruker» kan du få lesetilgang til systemet uten å logge inn med en personlig brukerkonto. Dette kan være nyttig for å logge inn på «felles» maskiner for å for eksempel ha åpent dashboard-visningen.

Ta kontakt med en systemadministrator for å få passordet.

---

## Hva er «Markdown»?

Markdown lar deg enkelt formatere tekst ved hjelp av spesialtegn. For eksempel:

| Tegn              | Format       |
| ----------------- | ------------ |
| #                 | Tittelnivå 1 |
| ##                | Tittelnivå 2 |
| ###               | Tittelnivå 3 |
| ####              | Tittelnivå 4 |
| - \<tekst\>       | Liste        |
| \_\<tekst\>\_     | _Kursiv_     |
| \*\*\<tekst\>\*\* | **Halvfet**  |

Her kan du finne [fullstendig liste av formater](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

---

## Administrator

### Legge til en ny bruker til systemet

Kun systemadministratorer har tilgang til å legge inn nye brukere til systemet. Administratorer kan administrere brukere fra [adminpanelet](/admin).

### Legge til eller fjerne administrator-tilgang for en bruker

Administratorer kan legge til eller fjerne admintilganger for brukere fra [adminpanelet](/admin) ved å skru av/på bryteren under «Admin»-kolonnen for en bruker.

---

## Produktområder

Produktområder inneholder _produkter_, _mål_ og _nøkkelresultater_.

---

## Mål

Et _mål_ skal være noe som ditt team ønsker å oppnå. Dette skal ikke være helt konkret. Mål er knyttet til én periode (ett kvartal).

| Felt        | Format     | Beskrivelse                                           |
| ----------- | ---------- | ----------------------------------------------------- |
| Kvartal     | `Menyvalg` | Velg hvilket kvartal målet gjelder for.               |
| Ikon        | `Menyvalg` | Velg et passende ikon for målet.                      |
| Tittel      | `Tekst`    | Skriv en kort (1--2 ord) tittel for målet.            |
| Beskrivelse | `Tekst`    | En kort (cirka en setning) tekst som beskriver målet. |

### Legge inn mål for fremtidige perioder (kvartaler)

Du kan legge inn mål og nøkkelresultater for den neste perioden (kvartalet).

- Gå til `Endre produkt`
- Naviger til `Mål og nøkkelresultater`-fanen
- Velg fremtidig kvartal i første kolonne
- Trykk `+ Legg til` i kolonnen for «Mål»

Mål og nøkkelresultater for fremtidige perioder vil ikke vises til andre enn dine teammedlemmer og er kun tilgjengelige fra «Administrer mål og nøkkelresultater»-siden.

### Kan jeg gjenbruke et tidligere mål?

Det finnes ingen måte å kopiere et mål til en ny periode. Målet må opprettes på nytt.

---

## Nøkkelresultater

Nøkkelresultater er det du _måler_ for et spesifikt **mål**.

| Felt          | Format     | Beskrivelse                                                                                                                        |
| ------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Tilnyttet mål | `Menyvalg` | Hvilket **mål** som nøkkelresultatet er en del av.                                                                                 |
| Beskrivelse   | `Tekst`    | Tekstbeskrivelse av nøkkelresultatet. Bør være kort og konkret.                                                                    |
| Startverdi    | `Tall`     | Hvilken verdi som nøkkelresultatet starter på                                                                                      |
| Målverdi      | `Tall`     | Verdien som skal oppnås                                                                                                            |
| Måleenhet     | `Tekst`    | Hva er det som måles (skriv så kort som mulig). Måler du prosent, skriv «%», eller måler du **antall brukere**, skriv «# brukere». |

### Registrere progresjon for et nøkkelresultat

Kun administratorer og teammedlemmer har rettigheter til å registrere progresjon for et nøkkelresultat.

Det finnes tre måter å registrere progresjon for et nøkkelresultat:

- Via «Oppdater data» fra sidemenyen til et produkt eller produktområde
- Ved å trykke på <i class="fa fa-wrench"></i>-ikonet ved siden av nøkkelresultatet på produktsiden.
- På nøkkelresultatsiden under «Legg til nytt målepunkt».

Sistnevnte lar deg legge inn progresjon på en spesifikk dato.

### Slette eller endre progresjon for et nøkkelresultat

Kun administratorer og teammedlemmer har rettigheter til å endre progresjon for et nøkkelresultat.

På nøkkelresultatsiden (trykk på et nøkkelresultat for å åpne), kan du slette et målepunkt ved å trykke på <i class="fa fa-trash"></i>-knappen på høyre side av målepunktet.

Det er ingen måte å endre et eksisterende målepunkt, så det må i så fall slettes og legges inn på nytt med de nye verdiene.

## Google Sheets-integrasjon

Med hjelp av Google Sheets kan du konfigurere automatisk oppdatering av progresjon for et nøkkelresultat.

Progresjonen for det «automatiske» nøkkelresultatet vil bli oppdatert to ganger om dagen med verdien i den _cellen_ som er definert.

| Felt            | Beskrivelse                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| Google Sheet ID | Dette er Google Sheet-dokumentets ID, og kan finnes i URL-en når du har dokumentet åpent. |
| Fane            | Navnet på fanen hvor cellen ligger                                                        |
| Celle           | Navnet på cellen (f.eks.: «A1»)                                                           |

Dokumentet må deles med OKR-trackeren via applikasjonens _service account_ (`origo-okr-tracker@appspot.gserviceaccount.com`).

### Opprette et «automatisk» nøkkelresultat

**Steg 1: Forberede Google Sheets-dokument**

- Gå til [Google Sheets](https://sheets.google.com)
- Opprett nytt regneark
- Trykk på «Del»
- Del dokumentet med `origo-okr-tracker@appspot.gserviceaccount.com`
- Finn dokument-id-en i URL-en (.../spreadsheets/d/`<ID>`/edit)
- Finn navnet på _fanen_ som verdien du ønsker å bruke ligger i

**Steg 2: Opprette nøkkelresultat**

_Ønsker du datauthenting fra Google Analytics bør du følge guiden for dette før du går videre._

- I OKR-trackeren, naviger til produktet som nøkkelresultatet skal ligge under
- Trykk på «+ Nytt nøkkelresultat» i sidemenyen
- Fyll inn detaljene i skjemaet
- Aktiver «Automatisk (Google Sheets)»
- Fyll inn «Google Sheet ID», «Fane» og «Celle»
- Klikk «Lagre nytt nøkkelresultat»

### Google Analytics

Via en Google Analytics-plugin til Google Sheets kan du automatisk hente ut verdier fra analytics.

**Obs!** Din innloggede bruker må allerede ha tilgang til Analytics-rapporten som du ønsker å hente ut verdi(er) fra.

**Steg 1: Installer Plugin til dokumentet**

- Åpne Google Sheets-dokumentet
- Velg «Add-ons» fra toppmenyen
- Klikk på «Get add-ons»
- Søk etter og velg på «Google Analytics» og klikk på «Install»

**Steg 2: Hent ut data**

- Velg «Add-ons» → «Google Analytics» → «Create new report» fra toppmenyen
- Skriv inn et navn (dette blir også navnet på fanen)
- Fyll inn skjemaet for å finne riktig verdi å hente ut
- Trykk «Create Report»
- Du kan nå hente data manuelt via «Add-ons» → «Google Analytics» → «Run reports» fra toppmenyen.

**Viktig:**

I fanen «Report Configuration», er det viktig at du oppdaterer «Start date» og «End date» til å samsvare med det kvartalet som nøkkelresultatet gjelder for (YYYY-MM-DD).

**Sette opp automatisk uthenting**

- Velg «Add-ons» → «Google Analytics» → «Schedule reports» fra toppmenyen
- Velg «Enable reports to run automatically»
- Velg «Every day» eller «Every hour»
- Klikk «Save»