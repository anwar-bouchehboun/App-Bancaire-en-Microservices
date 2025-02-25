# 🏦 Bank Microservices

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.2-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud-2024.0.0-blue.svg)](https://spring.io/projects/spring-cloud)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org)
[![Material-UI](https://img.shields.io/badge/MUI-5-blue.svg)](https://mui.com)
[![Docker](https://img.shields.io/badge/Docker-Latest-blue.svg)](https://www.docker.com/)

## 📋 À propos

Application bancaire moderne basée sur une architecture microservices, permettant la gestion des clients et de leurs comptes bancaires avec une interface utilisateur réactive et intuitive.

## 🎯 Objectifs du Projet

- Architecture microservices scalable
- Interface utilisateur moderne et responsive
- Gestion efficace des données bancaires
- Sécurité et validation des données
- Performance et haute disponibilité

## 🚀 Technologies

### Backend

- ![Java](https://img.shields.io/badge/Java-17-orange.svg) Java 17
- ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.2-brightgreen.svg) Spring Boot 3.4.2
- ![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud-2024.0.0-blue.svg) Spring Cloud 2024.0.0
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue.svg) PostgreSQL
- ![Docker](https://img.shields.io/badge/Docker-Latest-blue.svg) Docker
- ![Maven](https://img.shields.io/badge/Maven-3.8+-red.svg) Maven

### Frontend

- ![React](https://img.shields.io/badge/React-18-blue.svg) React 18
- ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg) TypeScript 5
- ![Material-UI](https://img.shields.io/badge/MUI-5-blue.svg) Material-UI 5
- ![Vite](https://img.shields.io/badge/Vite-Latest-646CFF.svg) Vite
- ![Axios](https://img.shields.io/badge/Axios-Latest-5A29E4.svg) Axios

## 🏗️ Architecture

```mermaid
graph LR
    Client[Client React] --> Gateway[API Gateway]
    Gateway --> CS[Customer Service]
    Gateway --> AS[Account Service]
    CS --> DB1[(Customer DB)]
    AS --> DB2[(Account DB)]
```

## 🌟 Fonctionnalités

### 👥 Gestion des Clients

- Création de nouveaux clients
- Modification des informations clients
- Suppression de clients
- Liste paginée avec recherche
- Validation des données clients

### 💰 Gestion des Comptes

- Création de comptes (Épargne/Courant)
- Consultation des soldes
- Limitation à 2 comptes par client
- Un seul compte de chaque type par client
- Historique des opérations

## 📥 Installation

### Prérequis

- Java 17+
- Node.js 18+
- Docker & Docker Compose
- Maven 3.8+
- PostgreSQL (via Docker)

### Cloner le Projet

```bash
git clone https://github.com/anwar-bouchehboun/App-Bancaire-en-Microservices.git
cd App-Bancaire-en-Microservices
```

### Configuration de la Base de Données

```bash
# Démarrer PostgreSQL et autres services
docker-compose up -d
```

### Démarrer les Microservices

```bash
# Customer Service
cd customer-service
./mvnw spring-boot:run

# Account Service (dans un nouveau terminal)
cd account-service
./mvnw spring-boot:run
```

### Lancer le Frontend

```bash
cd gestion-bancaire
npm install
npm run dev
```

## 🌐 Accès aux Services

- Frontend: http://localhost:5173
- Customer Service: http://localhost:8080/customer-service
- Account Service: http://localhost:8080/account-service
- Swagger UI:
  - Customer API: http://localhost:8080/customer-service/swagger-ui.html
  - Account API: http://localhost:8080/account-service/swagger-ui.html

## 🔒 Sécurité et Validation

- ✅ Validation des données entrantes
- 🛡️ Protection contre les injections SQL
- 🔄 Gestion des erreurs avec messages explicites
- 🔐 Sécurisation des endpoints
- 📝 Logging des opérations importantes

## 🐛 Gestion des Erreurs

- Messages d'erreur clairs et informatifs
- Validation côté client et serveur
- Gestion des cas limites
- Feedback utilisateur immédiat

## 🔄 CI/CD

- Tests automatisés
- Build et déploiement automatisés
- Conteneurisation avec Docker
- Environnements de développement/production

## 📈 Améliorations Futures

- [ ] Authentification JWT
- [ ] Service de notification
- [ ] Rapports et analytics
- [ ] Support multi-devises
- [ ] Application mobile

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Anwar BOUCHEHBOUN**

- GitHub: [@anwar-bouchehboun](https://github.com/anwar-bouchehboun)
- LinkedIn: [Anwar BOUCHEHBOUN](https://www.linkedin.com/in/anwar-bouchehboun)
