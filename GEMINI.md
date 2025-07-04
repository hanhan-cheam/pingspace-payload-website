# Pingspace Payload Web Project

This document provides project-specific context for the Gemini AI assistant.

## Project Overview

This is a web application built with Next.js and Payload CMS. The project serves as the frontend and backend for the Pingspace website.

## Tech Stack

*   **Framework:** Next.js
*   **CMS:** Payload CMS
*   **Language:** TypeScript
*   **Package Manager:** pnpm
*   **Styling:** Tailwind CSS
*   **Linting:** ESLint
*   **Formatting:** Prettier

## Key Scripts

*   **Install dependencies:** `pnpm install`
*   **Run development server:** `pnpm dev`
*   **Build for production:** `pnpm build`
*   **Run production server:** `pnpm start`
*   **Lint files:** `pnpm lint`

## Project Structure

*   `src/app/(frontend)`: Contains the public-facing Next.js application.
*   `src/app/(payload)`: Contains the Payload CMS admin panel.
*   `src/collections`: Defines the data structures (collections) for Payload.
*   `src/blocks`: Reusable content blocks used within the CMS.
*   `src/globals`: Configuration for global site elements like the header and footer.
*   `payload.config.ts`: The main configuration file for Payload CMS.
