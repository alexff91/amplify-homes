# Amplify Homes

A modern home listing platform built with React and AWS Amplify. Browse, search, and explore property listings with a clean, responsive interface.

## Tech Stack

- **Frontend:** React 18, React Router 6
- **Backend:** AWS Amplify, AppSync (GraphQL), DynamoDB
- **CI/CD:** GitHub Actions
- **Code Quality:** ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- AWS Amplify CLI (`npm install -g @aws-amplify/cli`)

### Installation

```bash
# Clone the repository
git clone https://github.com/alexff91/amplify-homes.git
cd amplify-homes

# Install dependencies
npm install

# (Optional) Initialize Amplify backend
amplify init
amplify push

# Start development server
npm start
```

### Development without AWS

To run the app with mock data (no AWS account needed):

```bash
REACT_APP_USE_MOCK_DATA=true npm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests in watch mode |
| `npm run test:ci` | Run tests with coverage (CI) |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |

## Project Structure

```
src/
  components/     # Reusable UI components
  pages/          # Route-level page components
  hooks/          # Custom React hooks
  services/       # API and data services
  utils/          # Helpers and constants
  __tests__/      # Test files
```

## GraphQL Schema

The app uses a `Home` model with fields for address, price, bedrooms, bathrooms, square footage, property type, and listing status. See `amplify/backend/api/amplifyhomes/schema.graphql` for the full schema.

## Deployment

The app deploys automatically via AWS Amplify Hosting on push to the `main` branch.

## License

MIT
