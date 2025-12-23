# Marble5 - Contexte Projet

> Document de référence pour Claude - Mis à jour le 23 décembre 2025

---

## 1. Le Jeu

### Concept
**Marble5** est un puzzle game stratégique sur mobile où le joueur pose des billes colorées sur une grille pour former des **quintes** (alignements de 5 billes de même couleur).

### Gameplay
- **Objectif** : Former des quintes (horizontal, vertical, diagonal) pour marquer des points
- **Mécanique** : Poser des billes une par une, anticiper les coups suivants
- **Obstacle** : Les **plombs** (billes rouges) apparaissent et bloquent la grille
- **Progression** : 30 niveaux répartis en 3 univers
- **Scoring** : 1 à 3 étoiles par niveau selon le score atteint

### Univers visuels
| Univers | Niveaux | Ambiance |
|---------|---------|----------|
| Forêt | 1-10 | Mystérieux, nature |
| Ruines | 11-20 | Ancien, pierre |
| Espace | 21-30 | Cosmique, sci-fi |

### Modes de jeu
- **Mode Zen** : Relaxant, progression douce
- **Mode Challenge** : Compétitif, exigeant

### Hook marketing
> "Le coup parfait ? C'est celui d'après."
> "Alignez. Anticipez. Enchaînez."

---

## 2. Le Studio

**One Last Move Studio** - Studio indépendant

### Pourquoi ce nom
Le nom fait référence à cette sensation universelle du joueur : "Allez, encore un coup et j'arrête..." (et 3h plus tard, on y est encore).

### Contact
- **Email** : contact@marble5.app
- **Google Groups** : marble5-team@googlegroups.com

---

## 3. Le Site Web

### Informations générales
| Élément | Valeur |
|---------|--------|
| Domaine | marble5.app |
| Hébergement | GitHub Pages |
| Repo | github.com/RudeManoloStudio/Marble5-website |
| Langues | FR (racine), EN, ES, DE |

### Structure des fichiers
```
marble5-website/
├── index.html              # Page principale (FR)
├── privacy.html            # Politique de confidentialité (FR)
├── Hero_movie.mp4          # Vidéo de démonstration
├── OLM banner.jpg          # Bannière studio
├── CNAME                   # Domaine personnalisé
│
├── images/
│   ├── backgrounds/        # 9 fonds de jeu (JPG)
│   ├── marbles/            # 5 billes colorées (PNG)
│   └── screenshots/        # 3 captures d'écran (WebP)
│
├── en/                     # Version anglaise
├── es/                     # Version espagnole
├── de/                     # Version allemande
│
├── PlayStore/              # Assets Google Play Store
│
└── .claude/
    └── README.md           # Ce fichier
```

### Technologies
- **Frontend** : HTML5, CSS3 (variables, animations), JavaScript vanilla
- **Fonts** : Quicksand (titres), Exo 2 (corps)
- **Backend formulaires** : Google Apps Script → Google Sheets
- **Notifications** : Google Groups

### Sections du site
1. **Hero** : Badge bêta, mockup téléphone avec vidéo, message "Bêta privée ouverte"
2. **Concept** : 3 cartes (Quintes, Plombs, Étoiles)
3. **Galerie** : Screenshots + carrousel de backgrounds
4. **Règles** : 4 accordéons explicatifs
5. **Modes de jeu** : Zen et Challenge
6. **Bêta privée** : Stats + mini-roadmap plateformes
7. **Feedback** : Lien Google Play actif
8. **Contact** : 6 cartes (tous formulaires actifs)
9. **About Studio** : Bannière One Last Move Studio

### Design System
```css
/* Couleurs principales */
--bg-deep: #0a0c14;          /* Fond principal */
--bg-card: rgba(16, 20, 32, 0.8);
--text-primary: #f8fafc;
--text-secondary: #94a3b8;
--accent-primary: #4895ef;   /* Bleu */
--accent-secondary: #22d3ee; /* Cyan */

/* Couleurs des billes */
--marble-blue: #4895ef;
--marble-green: #4ade80;
--marble-yellow: #facc15;
--marble-orange: #fb923c;
--marble-cyan: #22d3ee;
--marble-red: #e63946;       /* Plombs */
```

---

## 4. Statut Bêta

### État actuel (23 décembre 2025)
- **Statut** : Bêta privée OUVERTE
- **Plateforme** : Smartphones Android uniquement
- **Distribution** : Google Play (test fermé)
- **Places** : 100

### Roadmap plateformes
```
📱 Smartphones ✓  →  📟 Tablettes Android  →  🍎 iPhone  →  📱 iPad
   Maintenant           Prochainement           À venir       À venir
```

### Formulaires actifs
| Type | Statut |
|------|--------|
| Inscription bêta | ✅ Actif |
| Signaler un bug | ✅ Actif |
| Problème d'installation | ✅ Actif |
| Question sur le jeu | ✅ Actif |
| Feedback / Suggestion | ✅ Actif |
| Autre | ✅ Actif |

### Google Sheets ID
`1FLyDSkBlgwXBi7YzeUe5RmYQUFfR4MoMeMc4OkFPGaE`

---

## 5. Traductions

### Terminologie par langue
| Français | English | Español | Deutsch |
|----------|---------|---------|---------|
| Bêta privée | Private Beta | Beta privada | Private Beta |
| Quinte | Quint | Quina | Fünfer |
| Plombs | Blockers | Bloqueadores | Blocker |
| Étoiles | Stars | Estrellas | Sterne |
| Rejoindre | Join | Unirse | Beitreten |
| Maintenant | Now | Ahora | Jetzt |
| Prochainement | Coming soon | Próximamente | Demnächst |
| À venir | Later | Más tarde | Später |

---

## 6. Assets

### Vidéo
- `Hero_movie.mp4` (868 KB) - Démo gameplay dans mockup

### Images
- **Billes** : 5 PNG (~900 KB total)
- **Backgrounds** : 9 JPG (~2 MB total)
- **Screenshots** : 3 WebP (~150 KB total)
- **Logo/Bannière** : OLM banner.jpg

### PlayStore
- Screenshots pour fiche Google Play
- Outil de génération de mockups

---

## 7. Conventions Git

### Branches
- `main` : Production (déploiement automatique GitHub Pages)
- Branches de feature : Supprimer après merge

### Format de commit
```
Titre court (impératif)

- Détail 1
- Détail 2

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Règles
- Ne pas pusher de fichiers sensibles (.env, credentials)
- Toujours tester localement avant push
- "Merge" = commit + push sur main (publication auto)

---

## 8. Préférences de travail

- **Corrections** : Reprendre poliment l'utilisateur s'il confond des notions techniques
- **Modifications multilingues** : Toujours appliquer aux 4 langues (FR, EN, ES, DE)
- **Commits** : Grouper les modifications liées en un seul commit
- **Tests** : Vérifier le rendu sur le site après push

---

## 9. Contacts & Liens

| Ressource | URL |
|-----------|-----|
| Site | https://marble5.app |
| GitHub | https://github.com/RudeManoloStudio/Marble5-website |
| Google Play | https://play.google.com/store/apps/details?id=com.onelastmove.marble5 |
| Email | contact@marble5.app |

---

*Document de référence Claude - Dernière mise à jour : 23 décembre 2025*
