Site déployé : https://catalogue-de-diagrammes.netlify.app/

# Liste des diagrammes contenus dans le catalogue

## Diagrammes UML
- **Diagramme de classes**
- Diagramme de composants
- Diagramme de déploiement
- Diagramme de structure composite
- Diagramme d'objets
- Diagramme de profil
- Diagramme de paquetages
- **Diagramme de temps**
- Diagramme d'aperçu des interactions
- Diagramme de communication
- **Diagramme de cas d'utilisation (ou use case)**
- **Diagramme de séquence**
- **Diagramme d'activités**
- Diagramme d'état

## Modèles MERISE (Modèle Niveau Découpage)
- **MCC (Modèle Conceptuel de Communication)**
- MOC (Modèle Organisationnel de Communication)
- MLC (Modèle Logique de Communication)
- MPC (Modèle Physique de Communication)
- **MCD (Modèle Conceptuel de Données) ou Modèle entités-relations** 
- MOD (Modèle Organisationnel de Données)
- **MLD (Modèle Logique de Données)**
- MPD (Modèle Physique de Données)
- **MCT (Modèle Conceptuel de Traitement)**
- MOT (Modèle Organisationnel de Traitement)
- MLT (Modèle Logique de Traitement)
- MPT (Modèle Physique de Traitement)

---
### Axes d'améliorations :
- transformer le script qui gère les comportements de scrolling des éléments en utilisant des propriétés CSS, pour des raisons d'éco-conception
- ajouter un niveau dans la navigation pour optimiser l'accessibilité

---
# Critères d'évaluation

## Git
- Versionné régulièrement et de manière atomique (Plusieurs "commit" par jour pendant toute la durée du projet) => Vérif Git
- Historique de commit propre => (éviter les doublons, les commits inutiles)
- Mise en plance d'une branche de développement supplémentaire, voire plusieurs selon l'architecture du site => Vérif sur Git
- Fonction "pull request" => Check sur Github
- Mise en place un Github Action (automatisation de tests intégration, vulnérabilité, ...) => Check sur Github

## Sécurité
- Prévenir les vulnérabilités principales (cross site, injection sql, protection des tokens, validation des données) => GoogleSearchConsole, Sucuri
- Respect de la protection des données (RGPD, encapsulation)
- Utilisation des chemins absolus

## SEO
- Mise en place de la stratégie SEO : données structurées, ...
- PWA (Progressive Web App) : services workers (microphone, localisation, ...)
- HTML sémantique

## Performance
- Bon résultat sur PageSpeed Insights
- Optimisation images (surtout mobile) : poids et formats adaptés
- Limiter le nombre de requêtes

## Accessibilité
- Accessibilité : title, aria-label, alt
- Fournir un site web avec une bonne expérience utilisateur
- Texte lisible : interlinéage suffisant, taille des polices proportionnelles, contraste des couleurs optimale, ...

## Architecture
- Bons principes de structuration respectés, y compris pour le web mobile => vérif des balises (body, header, navbar), et des noms de classes CSS, variables, media queries
- Eviter les répétitions en utilisant des fonctions => check du code source

## Contenu
- Contenu vérifié : informations croisées, résumé de plusieurs sources, ...
- Détail des étapes pour chaque diagramme

## UI/UX
- Features d'animations, transitions, barre de navigation => vérif du site
- Design cohérent (couleur, forme, police)

> Checklist des critères d'évaluation
**Git**
- [x] Créer une branche "develop" pour le développement
- [] Effectuer des pulls request de la branche en développement vers la branche principale
- [] Versionner réguliérement, effectuer régulièrement des commits

**SEO**
- [] Utiliser des balises sémantiques (header, main, footer, ...)
- [] Mettre en place les balises title et méta

**Performance**
- [] Tester son site web sur PageSpeed Insights

**Accessibilité**
- [] Tester son site pour l'accessibilité
- [] Tester le contraste des couleurs
- [] Vérifier que la taille des polices est supérieure à 16px

**Architecture**
- [] Utiliser des noms de classes, variables, ... logiques
- [] Laisser des commentaires dans le code

**Contenu**
- [] Détailler une méthode pour créer et utiliser chaque diagramme ou modèle
- [] Vérifier les informations sur les en croisant les informations de différentes sources
- [] Citer les sources des images, liens, ...

**Sécurité**
- [] Utiliser des chemins absolus pour les fichiers, images, etc.
