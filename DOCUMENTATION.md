# 📚 Documentation Technique & Fonctionnelle — Projet Ghostech

Bienvenue dans la documentation officielle du projet **Ghostech**. Ce document fournit une analyse approfondie de l'architecture du code, de l'organisation des fichiers, des fonctionnalités clés et du système de base de données.

---

## 🌐 1. Présentation Générale de Ghostech

**Ghostech** est une organisation technologique et communautaire visant à former, connecter et propulser les talents tech de demain. La plateforme web sert de vitrine officielle pour l'organisation et propose un espace immersif et gamifié d'apprentissage et de compétition pour ses membres.

Le site est structuré en deux grandes sections :
1. **La Vitrine Publique** : Présentation de l'organisation, annuaire des membres, catalogue des formations et inscription aux hackathons.
2. **La DevArena (Espace Privé)** : Une plateforme de compétition de code inspirée de l'univers de **Duolingo** (design 3D tactile), où les membres s'affrontent en duos à travers différentes vagues de développement pour débloquer des récompenses (badges, points d'expérience).

---

## 🏗️ 2. Architecture Technique

La plateforme s'appuie sur une pile technologique moderne, performante et interactive :

* **Framework** : [Next.js 16 (App Router)](https://nextjs.org/) — Pour le routage moderne, le rendu optimisé et la modularité.
* **Langage** : [TypeScript](https://www.typescriptlang.org/) — Pour un typage statique fort et la robustesse du code.
* **Styling & UI** : [Tailwind CSS 4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/) — Pour un design système fluide, cohérent et haut de gamme.
* **Animations** :
  * [Framer Motion](https://www.framer.com/motion/) — Pour les transitions de page, les popups et les effets tactiles.
  * [React Three Fiber](https://r3f.docs.pmnd.rs/) (Three.js) — Pour l'intégration d'éléments 3D interactifs (ex: `Antigravity.tsx`).
  * [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) — Pour célébrer les accomplissements et déblocages de badges.
* **Base de données & Auth** : [Firebase 12](https://firebase.google.com/) — Utilisation de **Firebase Auth** (gestion des sessions utilisateurs) et **Cloud Firestore** (stockage en temps réel des profils, scores et badges).

---

## 📁 3. Organisation des Dossiers & Fichiers

L'arborescence du projet suit les meilleures pratiques de Next.js :

```text
ghostech/
├── app/                      # Dossier principal Next.js (Routage par dossier)
│   ├── globals.css           # Styles CSS globaux (variables de thème, styles de base)
│   ├── layout.tsx            # Layout racine (HTML de base, Navbar & Footer conditionnels)
│   ├── page.tsx              # Page d'accueil officielle (Vitrine Ghostech)
│   ├── login/                # Page de connexion
│   ├── register/             # Page d'inscription
│   ├── profil/               # Tableau de bord utilisateur (Profil, Bio, Badges)
│   ├── formation/            # Catalogue et détails des formations
│   ├── devarena/             # Module privé de compétition (Arène)
│   │   ├── _components/      # Composants locaux privés (Sidebar, NavbarArena, Popups)
│   │   ├── actualites/       # Flux d'actualités de l'arène
│   │   ├── classement/       # Leaderboards (Global, Vagues 1, 2 et 3)
│   │   ├── duo/              # Matchups de duos et suivi des projets
│   │   ├── reglement/        # Charte et critères de notation (style Duolingo 3D)
│   │   └── arenaData.ts      # Données mockées et logique d'initialisation locale
│   └── ...                   # Autres pages (apropos, contact, equipe, projets)
├── components/               # Composants réutilisables globaux
│   ├── ui/                   # Primitives Shadcn UI (button, input, sidebar, sheet...)
│   ├── Navbar.tsx            # Barre de navigation principale
│   ├── Footer.tsx            # Pied de page global
│   ├── SplashCursor.tsx      # Effet interactif de curseur
│   └── Antigravity.tsx       # Animation de particules 3D interactive (Three.js)
├── lib/                      # Centralisation des configurations tierces
│   ├── firebase.ts           # Initialisation du SDK Firebase (Auth & Firestore)
│   └── utils.ts              # Utilitaire de fusion de classes CSS (clsx + tailwind-merge)
├── public/                   # Fichiers statiques (logos, icônes, images)
├── firestore.rules           # Règles de sécurité de la base de données Firestore
├── package.json              # Dépendances et scripts NPM
└── tsconfig.json             # Configuration TypeScript
```

---

## 🚀 4. Fonctionnalités Clés & Expérience Utilisateur

### 4.1. La Vitrine Ghostech (`app/page.tsx`)
* **Héros Immersif** : Carrousel d'images fluide, animations de texte, bouton d'action vers les événements.
* **Pédagogie Active** : Présentation vidéo de la méthodologie de l'organisation.
* **Annuaire de l'Équipe** : Carrousel interactif des portraits et rôles des membres de l'administration.
* **FAQ** : Accordéon rétractable élégant.

### 4.2. La DevArena (Design Duolingo 3D)
* **Esthétique Tactile** : Toutes les interfaces de la DevArena utilisent des composants à l'effet 3D marqué (bordures inférieures prononcées `border-b-4` ou `border-b-[6px]`, angles très arrondis `rounded-3xl`, et micro-animations de clic simulant un enfoncement physique).
* **Les Vagues Éliminatoires** :
  * **Vague 1 (Rose)** : Terminée. Thèmes axés sur les bases de données et les MVP.
  * **Vague 2 (Orange)** : En cours. Thèmes axés sur l'IA et les applications mobiles.
  * **Vague 3 (Indigo)** : À venir.
* **Classements Interactifs** : Leaderboards dynamiques par vague affichant le rang, l'avatar, les points accumulés et l'évolution des participants.
* **Règlement de l'Arène (`/devarena/reglement`)** : Une charte visuelle présentant les étapes d'une vague et le barème de notation exact du jury (Respect du thème /10, Créativité & Originalité /10, Fonctionnalités /15, Présentation & Démo /15).
* **Système de Badges & Gamification** :
  * Lorsqu'une vague se termine, les utilisateurs éligibles reçoivent un badge.
  * Un popup festif (`BadgeUnlockPopup.tsx`) s'affiche avec une animation Framer Motion et une explosion de confettis.
  * Le badge est persisté dans le compte utilisateur (Firestore et localement pour un rendu immédiat).

### 4.3. Gestion de l'Authentification & Profils
* Protection des routes privées (`/devarena/*`, `/profil`) : redirection vers `/login` si l'utilisateur n'est pas connecté.
* **Page de Profil (`/profil`)** :
  * Édition de la biographie et de la photo de profil (compatible Cloudinary).
  * Affichage des badges débloqués sous forme de médailles colorées avec état verrouillé/déverrouillé.
  * Liste des expériences professionnelles, projets et participations aux événements.

---

## 💾 5. Modèle de Données (Firestore)

Les profils utilisateurs sont stockés dans la collection `users`.

### Collection `users`
Chaque document a pour ID l'UID de l'utilisateur généré par Firebase Auth.

```json
{
  "uid": "string (ex: 'u8z9R...')",
  "displayName": "string (ex: 'Sarah')",
  "email": "string (ex: 'sarah@ghostech.ci')",
  "photoURL": "string (URL de l'avatar)",
  "bio": "string (présentation de l'utilisateur)",
  "role": "string ('participant' | 'jury' | 'organisateur' | 'admin')",
  "points": "number (ex: 4500)",
  "level": "string (ex: 'Gold')",
  "badges": [
    "string (ex: 'vague1_finisher')",
    "string (ex: 'top_coder')"
  ],
  "experience": [
    {
      "role": "string",
      "company": "string",
      "duration": "string",
      "description": "string"
    }
  ],
  "projects": [
    {
      "name": "string",
      "description": "string",
      "link": "string"
    }
  ],
  "createdAt": "timestamp"
}
```

---

## ⚙️ 6. Guide de Démarrage Local

### 1. Prérequis
Assurez-vous d'avoir installé [Node.js](https://nodejs.org/) (version 18+ recommandée) et le CLI Firebase.

### 2. Installation des dépendances
```bash
npm install
```

### 3. Configuration des variables d'environnement
Créez un fichier `.env.local` à la racine du projet et ajoutez vos clés Firebase et Cloudinary :
```env
NEXT_PUBLIC_FIREBASE_API_KEY=votre_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=votre_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=votre_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=votre_app_id

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=votre_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=votre_preset
```

### 4. Lancement du serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 🔒 7. Sécurité & Bonnes Pratiques pour la Production

1. **Règles Firestore (`firestore.rules`)** :
   Actuellement configuré pour autoriser toutes les lectures et écritures à des fins de test. Avant de déployer, appliquez des règles strictes basées sur l'authentification (ex: `allow write: if request.auth != null && request.auth.uid == userId;`).
2. **Variables d'environnement** :
   Ne commitez **jamais** vos fichiers `.env.local` sur GitHub. Ils sont correctement ignorés grâce au fichier `.gitignore`.
3. **Optimisation des Images** :
   Utilisez toujours le composant `next/image` pour redimensionner automatiquement les logos et avatars et améliorer les performances globales du site.
