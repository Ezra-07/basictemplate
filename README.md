# NGO Platform - Next.js Hackathon Template

This is a comprehensive Next.js template designed for NGO-focused hackathon projects. It includes authentication, donation/payment processing, and other essential features to help you get started quickly.

## Features

- **Authentication** with NextAuth.js (Google and GitHub OAuth providers)
- **Donation System** with Stripe payment integration
- **Responsive Design** with Tailwind CSS
- **Form Handling** with React Hook Form
- **Modern UI Components** with icons and animations

## Pages

- **Home**: Landing page with impact statistics and featured projects
- **About**: Information about the organization, mission, and team
- **Projects**: Showcase of current initiatives (placeholder)
- **Donate**: Donation form with Stripe integration
- **Contact**: Contact form and organization information
- **Authentication**: Sign-in page with OAuth options

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ngo-platform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:

```
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key_here

# OAuth Providers
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GITHUB_ID=your_github_id_here
GITHUB_SECRET=your_github_secret_here

# Stripe Payment
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## OAuth Setup

### Google OAuth
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Set the application type to "Web application"
6. Add "http://localhost:3000" to the authorized JavaScript origins
7. Add "http://localhost:3000/api/auth/callback/google" to the authorized redirect URIs
8. Copy the Client ID and Client Secret to your `.env.local` file

### GitHub OAuth
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details
4. Set the homepage URL to "http://localhost:3000"
5. Set the authorization callback URL to "http://localhost:3000/api/auth/callback/github"
6. Copy the Client ID and Client Secret to your `.env.local` file

## Stripe Setup

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add the publishable key and secret key to your `.env.local` file
4. For webhook testing, you can use the [Stripe CLI](https://stripe.com/docs/stripe-cli)

## Customization

- Update the organization name, mission, and other content in the respective components
- Replace placeholder images with your own
- Customize colors in the Tailwind configuration
- Add additional pages or features as needed

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Stripe](https://stripe.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
