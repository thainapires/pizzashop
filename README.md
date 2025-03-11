##### English Version:

# 🍕 Pizza Shop

![image](https://github.com/user-attachments/assets/96e49e93-8110-4e5b-812c-1d9d11a0c659)

Dashboard for managing establishments and order control, inspired by iFood (a famous orders management in Brazil), developed through the ReactJS training by Rocketseat.

## Setup

##### Running with the API

If you want to test the application with the backend, follow these steps:

1. Clone the API repo and follow its setup instructions to run it locally:

[Pizzashop API - Rocketseat](https://github.com/rocketseat-education/pizzashop-api)

2. Copy the contents of```.env.local.example``` into a new file called ```.env.local```.

3. Install dependencies:
```pnpm i```

3. Start the application:
```pnpm run dev```

##### Running with mocks

If you want to test only the frontend using mock data, follow these steps:

1. Install dependencies:
```pnpm i```

2. Start the application with mock data:
```pnpm run dev:test```

## Tests

1. Unit Tests

To run the unit tests (using Vitest), use the following command:

```pnpm run test```

2. End-to-End (E2E) Tests

To run end-to-end tests (using Playwright), use:

```pnpm playwright test```

If you prefer to run tests with the Playwright UI, use:

```pnpm playwright test --ui```

## Tools 

React, React Router DOM, Tailwind, shadcn/ui, React Query and Radix.

## Learnings

Throughout this project, I learned a lot about React Query and its advantages, such as efficient data fetching, caching and optimized queries. I also deepened my knowledge of unit testing using Vitest and end to end testing (E2E) with Playwright, both widely used tools in the industry. Additionally, the project enhanced my skills in building scalable react applications, managing states and optimizing performance while following best practices.

## Features

- Establishment registration;
- Establishment login (magic link);
- Registration as a customer;
- Creation of new orders;
- Menu management;
- Evaluation management;
- Order management;
- Establishment profile management;
- Store open/closed;
- Dashboard metrics;
  - Order graph in the last 15 days;
  - Value graph in the last 15 days;
  - Average evaluations (month/general);
  - Average orders per day (month/general);
