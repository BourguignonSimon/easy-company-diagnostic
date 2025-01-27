# Guide d'Installation et de Déploiement

## Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn
- Un serveur web (pour le déploiement en production)

## Installation

1. Cloner le repository :
```bash
git clone https://github.com/BourguignonSimon/easy-company-diagnostic.git
cd easy-company-diagnostic
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

3. Configuration des dépendances principales :
```bash
# Installation des composants UI
npm install @radix-ui/react-alert-dialog @radix-ui/react-checkbox @radix-ui/react-label @radix-ui/react-radio-group recharts
# Installation des outils de styling
npm install tailwindcss @tailwindcss/forms
```

## Structure du Projet

```
easy-company-diagnostic/
├── src/
│   ├── components/
│   │   ├── DiagnosticForm.jsx
│   │   ├── DiagnosticResults.jsx
│   │   └── ui/
│   │       └── ... (composants shadcn/ui)
│   ├── utils/
│   │   └── DiagnosticAnalyzer.js
│   └── questionnaires/
│       ├── diagnostic_rapide.json
│       └── diagnostic_detaille.json
├── public/
├── INSTALLATION.md
└── README.md
```

## Configuration

1. Créer le fichier de configuration Tailwind :
```bash
npx tailwindcss init -p
```

2. Mettre à jour `tailwind.config.js` :
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
```

## Déploiement

### 1. Développement Local

```bash
npm run dev
# ou
yarn dev
```

### 2. Construction pour Production

```bash
npm run build
# ou
yarn build
```

### 3. Déploiement

#### Option A : Hébergement Statique (ex: Netlify, Vercel)

1. Connectez votre repository GitHub à la plateforme
2. Configurez les variables d'environnement si nécessaire
3. Déployez avec les paramètres par défaut

#### Option B : Serveur Web Traditionnel

1. Construire l'application :
```bash
npm run build
```

2. Transférer le contenu du dossier `dist` vers votre serveur web

## Personnalisation

### Modification des Questionnaires

Les questionnaires sont stockés dans `src/questionnaires/`. Pour les modifier :

1. Ouvrir le fichier JSON correspondant
2. Suivre la structure existante
3. Ajouter/modifier les questions selon vos besoins

### Adaptation du Scoring

Pour modifier le système de scoring :

1. Ouvrir `src/utils/DiagnosticAnalyzer.js`
2. Ajuster les méthodes de calcul selon vos besoins
3. Modifier les seuils de recommandations si nécessaire

## Maintenance

### Mises à Jour Régulières

1. Mettre à jour les dépendances :
```bash
npm update
# ou
yarn upgrade
```

2. Vérifier les vulnérabilités :
```bash
npm audit
# ou
yarn audit
```

### Sauvegarde

- Sauvegarder régulièrement les données des questionnaires
- Maintenir un système de versioning pour les modifications
- Documenter les changements dans un fichier CHANGELOG

## Support

Pour toute question ou assistance :
- Créer une issue sur GitHub
- Contacter l'équipe de support (support@easycompany.be)
