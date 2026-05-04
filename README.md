#  Gestione Profumi

Un'applicazione web per gestire la tua collezione personale di profumi. Permette di registrarsi, fare login, aggiungere profumi, visualizzarli, mettere like ai preferiti ed eliminarli.

---

##  Struttura del progetto

```
├── index.html          # Pagina di login e registrazione
├── html/
│   ├── visualizza.html # Dashboard principale con i profumi
│   └── aggiungi.html   # Form per aggiungere un nuovo profumo
├── css/
│   └── style.css       # Stili personalizzati
└── js/
    └── script.js       # Logica dell'applicazione
```

---

##  Funzionalità

- **Login / Registrazione** — Autenticazione utente tramite username e password
- **Aggiunta profumi** — Inserimento di nome, brand, prezzo e dimensione (50ml / 100ml)
- **Visualizzazione** — Tutti i profumi salvati vengono mostrati in card
- **Like** — Possibilità di mettere/togliere il cuore ♥ ai profumi preferiti
- **Eliminazione** — Rimozione di un profumo dalla collezione
- **Link ricerca** — Ogni card include un link diretto a Notino per cercare il profumo online

---

##  Come avviare il progetto

Il progetto è composto da file statici e non richiede un backend. È sufficiente servire i file tramite un web server locale.

##  Persistenza dei dati

I dati vengono salvati nel **localStorage** del browser, quindi non richiedono un database. I dati rimangono disponibili tra una sessione e l'altra sullo stesso browser.

| Chiave localStorage | Contenuto |
|---|---|
| `users` | Array degli utenti registrati |
| `parfumes` | Array dei profumi salvati |

---

## 🛠️ Tecnologie utilizzate

| Tecnologia | Utilizzo |
|---|---|
| HTML5 | Struttura delle pagine |
| CSS3 | Stili personalizzati |
| JavaScript (ES6) | Logica e manipolazione del DOM |
| Bootstrap 5.3 | Componenti UI e layout responsive |
| localStorage | Persistenza dei dati lato client |

---

##  Credenziali di default

All'avvio, è presente un utente predefinito:

| Username | Password |
|---|---|
| `Bena` | `12345` |

---

## 🔧 Possibili miglioramenti futuri

- Autenticazione con sessioni reali (backend + database)
- Protezione delle pagine interne tramite controllo sessione
- Ricerca e filtraggio dei profumi
- Upload di immagini per ogni profumo
- Ordinamento per prezzo, brand o like
