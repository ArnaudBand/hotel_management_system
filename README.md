# Hotel Management System

A web application for managing hotel operations built with Next.js, React, CMS (Sanity.IO), Tailwind CSS, and integrated with Stripe for payment processing.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Hotel Management System is designed to streamline hotel operations, providing a user-friendly interface for managing reservations, room inventory, customer information, and payment processing.

## Features

- **Reservation Management:** Easily manage reservations and room allocations.
- **Room Inventory:** Keep track of room availability and status.
- **Customer Information:** Store and access customer details for personalized service.
- **Stripe Integration:** Seamlessly process payments through Stripe.
- **Customizable Content:** Use Sanity.IO as a CMS for managing website content.

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Sanity.IO](https://www.sanity.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/hotel-management-system.git
   cd hotel-management-system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Sanity.IO:**

   - Create an account on [Sanity.IO](https://www.sanity.io/) and set up a new project.
   - Configure the project API keys in your Next.js environment.

4. **Configure Stripe:**

   - Create an account on [Stripe](https://stripe.com/) and obtain the necessary API keys.
   - Configure the Stripe keys in your Next.js environment.

5. **Run the application:**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

- **`/pages`:** Next.js pages.
- **`/components`:** React components.
- **`/public`:** Static assets.
- **`/sanity`:** Sanity.IO configuration files.
- **`/styles`:** Tailwind CSS styles.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).