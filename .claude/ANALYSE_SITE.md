# Analyse du Site Marble5

> Document de référence pour le développement - Mis à jour le 8 décembre 2025

---

## 1. Vue d'ensemble

**Type de site** : Landing page / Site vitrine pour jeu mobile
**Domaine** : marble5.app
**Studio** : One Last Move Studio
**Hébergement** : GitHub Pages
**Statut** : Bêta fermée (lancement prévu : 31 décembre 2025)

---

## 2. Structure des fichiers

```
marble5-website/
├── index.html              # Page principale (FR)
├── privacy.html            # Politique de confidentialité (FR)
├── Hero_movie.mp4          # Vidéo de démonstration (868 KB)
├── OLM banner.jpg          # Bannière studio
├── OLM logo 400.png        # Logo studio basse résolution
├── OLM logo 800.png        # Logo studio haute résolution
├── google-apps-script.js   # Script Google Apps pour formulaires
├── CNAME                   # Domaine personnalisé
│
├── images/
│   ├── backgrounds/        # 9 fonds de jeu (3 par univers)
│   │   ├── ForestBG_*.jpg  # Univers Forêt
│   │   ├── RuinBG_*.jpg    # Univers Ruines
│   │   └── SpaceBG_*.jpg   # Univers Espace
│   ├── marbles/            # 5 billes colorées (PNG)
│   └── screenshots/        # 3 captures d'écran
│
├── en/                     # Version anglaise
│   ├── index.html
│   └── privacy.html
├── es/                     # Version espagnole
│   ├── index.html
│   └── privacy.html
├── de/                     # Version allemande
│   ├── index.html
│   └── privacy.html
│
└── PlayStore/              # Assets pour Google Play Store
    ├── mockup-generator.html   # Outil de génération de mockups
    ├── screen forest.png       # Screenshot forêt
    ├── screen ruines.png       # Screenshot ruines
    ├── screen space.png        # Screenshot espace
    ├── screen space vide.png   # Screenshot espace (vide)
    ├── screen ruines vide.png  # Screenshot ruines (vide)
    ├── screen menu.png         # Screenshot menu
    └── Screen foret 3 stars.jpg # Screenshot 3 étoiles
```

---

## 3. Technologies utilisées

### Frontend
| Technologie | Usage |
|-------------|-------|
| HTML5 | Structure sémantique |
| CSS3 | Variables, animations, gradients, flexbox/grid |
| JavaScript Vanilla | Interactions, carrousel, countdown, localStorage, modals |
| Google Fonts | Quicksand (titres), Exo 2 (corps) |

### Backend (Formulaires)
| Technologie | Usage |
|-------------|-------|
| Google Apps Script | Traitement des formulaires |
| Google Sheets | Stockage des données (inscriptions, bugs, feedback) |
| Google Groups | Notifications email (marble5-team@googlegroups.com) |

### Caractéristiques CSS
- Variables personnalisées (--bg-deep, --marble-colors, etc.)
- Animations keyframes (float-marble, fade-up, bounce, modal-appear)
- Media queries responsive (768px, 600px, 500px, 480px)
- Smooth scroll natif
- Système de modales CSS

### Caractéristiques JS
- Détection automatique de la langue du navigateur
- Stockage des préférences dans localStorage
- Système d'accordéons interactifs
- Carrousel avec navigation clavier
- Countdown timer dynamique
- Formulaires avec validation et envoi AJAX
- Système de modales pour les formulaires de contact

---

## 4. Sections du site

### 4.1 Header/Hero
- Bandeau WIP (site en construction)
- Titre principal avec gradient animé
- Slogan : "Alignez 5 billes. Formez des quintes. Maîtrisez la grille."
- Mockup téléphone avec vidéo en boucle
- 10 billes flottantes animées
- Badge "Bêta fermée"
- Countdown vers le 31/12/2025
- CTA : "Bientôt disponible sur Android" (désactivé)
- Lien "Rejoindre la bêta" (ouvre modal formulaire)

### 4.2 Section Concept (3 cartes)
1. **Formez des Quintes** - Aligner 5 billes de même couleur
2. **Gérez les Plombs** - Éviter/éliminer les obstacles rouges
3. **Décrochez 3 Étoiles** - Progression sur 30 niveaux

### 4.3 Galerie d'aperçu
- 3 screenshots principaux (Forêt, Ruines, Espace)
- Carrousel interactif (9 backgrounds)
- Navigation par boutons et pagination
- Bouton "Voir plus de fonds"

### 4.4 Règles (4 accordéons)
1. Comment jouer
2. Quintes & Liaisons
3. Les Plombs
4. Scoring & Étoiles

### 4.5 Modes de jeu
- **Mode Zen** : Relaxant, progressif
- **Mode Challenge** : Compétitif, difficile

### 4.6 Section Bêta Fermée
- 3 cartes d'information (Distribution, Objectifs, Attentes)
- Statistiques : 100 places, 30 niveaux, 100% gratuit
- Note sur les visuels non définitifs

### 4.7 Section Feedback
- Bouton Google Play (désactivé avant ouverture bêta)
- Countdown jours restants

### 4.8 Section Contact (6 cartes)
| Carte | État | Action |
|-------|------|--------|
| 🚀 Rejoindre la bêta | Actif | Modal formulaire inscription |
| 🐛 Signaler un bug | Désactivé | "Bêta pas encore ouverte" |
| 🔧 Problème d'installation | Désactivé | "Bêta pas encore ouverte" |
| ❓ Question sur le jeu | Actif | Modal formulaire question |
| 💡 Feedback / Suggestion | Désactivé | "Bêta pas encore ouverte" |
| 📩 Autre | Actif | Modal formulaire autre |

### 4.9 About Studio (Accordéon)
- Bannière One Last Move Studio
- Description humoristique du nom

### 4.10 Footer
- Liens : Règles, Confidentialité, Contact
- Copyright 2025

---

## 5. Système de formulaires

### Architecture
```
[Site Web] → [Google Apps Script] → [Google Sheets] → [Email Notification]
```

### Formulaires disponibles
| Type | Champs | Onglet Google Sheets |
|------|--------|---------------------|
| inscription_beta | prénom, email, appareil, version_android, source, plateformes, profil_joueur, texte_libre | Inscriptions Bêta |
| bug_report | email, appareil, version_android, moment_bug, description | Bugs |
| probleme_installation | email, appareil, version_android, type_probleme, description | Installation |
| question | email, sujet, description | Questions |
| feedback | email, type_feedback, description | Feedback |
| autre | email, sujet, description | Autre |

### Google Sheets ID
`1FLyDSkBlgwXBi7YzeUe5RmYQUFfR4MoMeMc4OkFPGaE`

### Notifications
Envoyées à : `marble5-team@googlegroups.com`

---

## 6. Support multilingue

| Langue | Code | Chemin | Status |
|--------|------|--------|--------|
| Français | FR | `/` (racine) | Principal |
| English | EN | `/en/` | Complet |
| Español | ES | `/es/` | Complet |
| Deutsch | DE | `/de/` | Complet |

### Implémentation
- Sélecteur fixe en haut à droite (codes langue)
- Détection automatique via `navigator.language`
- Mémorisation du choix via `localStorage`
- Chaque langue = fichiers HTML séparés
- Formulaires traduits dans chaque langue

---

## 7. Assets

### Vidéo
| Fichier | Taille | Usage |
|---------|--------|-------|
| Hero_movie.mp4 | 868 KB | Démo dans mockup |

### Images - Billes (PNG)
| Fichier | Taille |
|---------|--------|
| marble_blue.png | 175 KB |
| marble_green.png | 157 KB |
| marble_orange.png | 251 KB |
| marble_purple.png | 176 KB |
| marble_yellow.png | 147 KB |

### Images - Backgrounds (JPG)
| Univers | Fichiers | Taille totale |
|---------|----------|---------------|
| Forest | ForestBG_4, 5, 9 | ~863 KB |
| Ruins | RuinBG_2, 5, 9 | ~771 KB |
| Space | SpaceBG_02, 06, 10 | ~330 KB |

### Images - Screenshots
| Fichier | Taille |
|---------|--------|
| screenshot_foret.png | 235 KB |
| screenshot_ruines.png | 264 KB |
| screenshot_espace.png | 52 KB |

### Logos & Bannières
| Fichier | Taille | Usage |
|---------|--------|-------|
| OLM logo 400.png | 212 KB | Logo basse résolution |
| OLM logo 800.png | 1.1 MB | Logo haute résolution |
| OLM banner.jpg | ~? KB | Bannière section About |

### PlayStore Assets
| Fichier | Usage |
|---------|-------|
| screen forest.png | Screenshot forêt |
| screen ruines.png | Screenshot ruines |
| screen space.png | Screenshot espace |
| screen space vide.png | Screenshot espace (grille vide) |
| screen ruines vide.png | Screenshot ruines (grille vide) |
| screen menu.png | Screenshot menu |
| Screen foret 3 stars.jpg | Screenshot 3 étoiles |
| mockup-generator.html | Outil génération mockups |

**Total assets : ~6.5 MB**

---

## 8. Design System

### Palette de couleurs
```css
--bg-deep: #0a0c14;          /* Fond principal */
--bg-dark: #101420;          /* Fond sections */
--bg-card: rgba(16, 20, 32, 0.8); /* Fond cartes */
--text-primary: #f8fafc;     /* Texte principal */
--text-secondary: #94a3b8;   /* Texte secondaire */
--text-muted: #64748b;       /* Texte désactivé */
--accent-primary: #4895ef;   /* Accent bleu */
--accent-secondary: #22d3ee; /* Accent cyan */
--glow-blue: rgba(72, 149, 239, 0.5); /* Lueur bleue */
```

### Couleurs des billes
```css
--marble-blue: #4895ef;
--marble-green: #4ade80;
--marble-yellow: #facc15;
--marble-orange: #fb923c;
--marble-cyan: #22d3ee;
--marble-red: #e63946;       /* Plombs */
```

### Typographie
- **Titres** : Quicksand (400-700)
- **Corps** : Exo 2 (300-600)

---

## 9. Éléments interactifs

### Animations CSS
| Nom | Description | Durée |
|-----|-------------|-------|
| float-marble | Billes flottantes | 15s infinite |
| float-slow | Mockup flottant | 6s infinite |
| fade-up | Apparition de bas en haut | 1s |
| fade-down | Apparition de haut en bas | 0.8s |
| bounce | Rebond scroll hint | 2s infinite |
| modal-appear | Apparition modale | 0.3s |

### Composants JS
- **Accordéons** : Click to expand/collapse
- **Carrousel** : Navigation prev/next + dots + labels thématiques
- **Countdown** : Mise à jour chaque seconde vers 31/12/2025
- **Language switcher** : Redirection + localStorage
- **Modales** : Formulaires de contact avec validation
- **Formulaires** : Envoi AJAX vers Google Apps Script

---

## 10. SEO & Meta

### Éléments présents
- `<title>` unique par langue
- Meta description
- Meta viewport responsive

### Éléments à ajouter
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Schema.org markup
- [ ] Sitemap.xml
- [ ] Favicon

---

## 11. Points forts

- Design moderne et cohérent
- Animations fluides non distrayantes
- Support multilingue complet (4 langues)
- Responsive design bien exécuté
- Countdown créant de l'urgence
- Zéro dépendances lourdes (vanilla JS/CSS)
- Code propre et maintenable
- Système de formulaires fonctionnel avec Google Sheets
- UX adaptée au statut bêta (boutons désactivés pertinents)
- Section contact bien structurée

---

## 12. Axes d'amélioration

- [x] ~~Formulaire d'inscription à la bêta~~
- [x] ~~Section contact complète~~
- [x] ~~Inverser les CTA du hero~~
- [x] ~~Ajouter Open Graph / Twitter Cards~~
- [ ] Optimiser le logo 800px (1.1 MB trop lourd)
- [ ] Créer sitemap.xml
- [ ] Ajouter preuve sociale (testimonials)
- [ ] Ajouter FAQ

---

## 13. Quick Wins Marketing (à faire)

| # | Action | Temps | Impact | Possible maintenant ? |
|---|--------|-------|--------|----------------------|
| 3 | Compteur d'inscrits dynamique | 30 min | 🔥🔥🔥 | ⏳ Après validation Play Store |
| 5 | Ajouter 2-3 testimonials | 15 min | 🔥🔥 | ✅ Oui |
| 6 | "Plus que X places !" | 10 min | 🔥🔥 | ⏳ Après #3 |
| 7 | Boutons de partage post-inscription | 20 min | 🔥🔥 | ✅ Oui |
| 9 | Favicon | 5 min | 🔥 | ✅ Oui |
| 10 | Email de confirmation auto | 30 min | 🔥🔥 | ✅ Oui |

### Quick Wins déjà réalisés (8-9 déc. 2025)
- [x] #1 : Inverser CTA hero → "Rejoindre la bêta" en bouton principal
- [x] #2 : Open Graph tags → Image + titre + description pour partages sociaux
- [x] Fix image Twitter/OG → Renommée en og-preview.jpg (cache Twitter en cours d'expiration)

### Note Play Store (9 déc. 2025)
Avant de passer en production, Google exige :
1. ✅ Publier une version de test fermé
2. ⏳ **12 testeurs minimum** qui installent l'app (0 actuellement)
3. ⏳ **14 jours de test** consécutifs

→ Recruter des testeurs via le formulaire bêta du site, puis les ajouter dans Play Console

---

## 14. Commits récents

| Hash | Description |
|------|-------------|
| 885a9cf | Désactive les boutons Bug/Install/Feedback avant ouverture bêta |
| e64e8b8 | Ajoute l'ID du Google Sheet dans le script |
| a713e50 | Précise que l'adresse Gmail est requise pour la bêta |
| 3cc4690 | Ajoute les formulaires de contact dans toutes les langues |
| e4ad5e7 | Améliore l'UX des liens vers la bêta |
| dfc8046 | Ajoute les formulaires de contact avec Google Sheets |
| f3d60f1 | Corrige l'adresse email contact@marble.app -> contact@marble5.app |
| a4b89e5 | Harmonise les IDs et remplace le logo par la bannière OLM |
| 165053e | Politique de confidentialité multilingue |
| bc2aeba | Identité One Last Move Studio |

---

## 14. Informations de contact

**Studio** : One Last Move Studio
**Email** : contact@marble5.app
**Domain** : marble5.app
**Google Groups** : marble5-team@googlegroups.com

---

## 15. Préférences de travail

- **Corriger les erreurs de compréhension** : Si l'utilisateur confond des notions informatiques (git, dev, archi, etc.), le reprendre poliment pour l'aider à apprendre.
- **"Merge"** = commit + push sur `main` (publication automatique via GitHub Pages)

---

*Document mis à jour automatiquement. Dernière analyse : 9 décembre 2025*
