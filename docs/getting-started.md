# Getting Started

Welcome to the TAO Product Documentation. This guide will help you set up the documentation site locally and understand how to contribute.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- npm, yarn, or pnpm

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/fdrs10/TAO-Product-Documentation.git
cd TAO-Product-Documentation
npm install
```

## Development

Start the local development server:

```bash
npm run docs:dev
```

The site will be available at `http://localhost:5173` by default.

## Build

Generate a static production build:

```bash
npm run docs:build
```

The built files will be output to `docs/.vitepress/dist`.

## Preview

Preview the production build locally:

```bash
npm run docs:preview
```
