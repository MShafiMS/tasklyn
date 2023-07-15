# Tasklyn

This is a simple Todo site built using Next.js, Tailwind CSS, Mobx State Tree, and AWS Amplify GraphQL API.

## Features

- Create new todos
- Update existing todos
- Delete todos
- Mark todos as in todo, in progress or completed
- Persist data using AWS Amplify GraphQL API

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Mobx State Tree](https://mobx-state-tree.js.org/) - State management library based on Mobx
- [AWS Amplify](https://aws.amazon.com/amplify/) - Backend as a Service (BaaS) for building cloud-powered applications
- [GraphQL](https://graphql.org/) - Query language for APIs

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v14 or later)
- npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/MShafiMS/tasklyn.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure AWS Amplify:

- Install the Amplify CLI:

```bash
npm install -g @aws-amplify/cli
# or
yarn global add @aws-amplify/cli
```

- Configure your AWS credentials:

```bash
amplify configure
```

- Set up the AWS Amplify backend:

```bash
amplify init
```

4. Create the AWS Amplify GraphQL API:

```bash
amplify add api
```

5. Deploy the AWS Amplify backend:

```bash
amplify push
```

6. Start the development server:

```bash
npm run dev
# or
yarn dev
```

7. Open your browser and visit http://localhost:3000 to see the Todo site.

## Contributing

Contributions are welcome! If you find any issues or want to contribute to the project, feel free to open a pull request or submit an issue.
