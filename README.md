# Doron Hadad Law Firm Website

This is the front-end repository for the **Doron Hadad Law Firm Website**. Built using **Next.js**, this website showcases the law firm's information, services, and contact details. It integrates with **Sanity CMS**, allowing the owner to easily manage content, edit existing pages, and create new ones.

## Features

- **Responsive Design**: Optimized for all devices, from desktops to mobile.
- **Dynamic Content Management**: Integrated with Sanity CMS for seamless updates.
- **Serverless Architecture**: Powered by Next.js Serverless Functions for scalable performance.
- **Modern Styling**: Designed with Tailwind CSS for a clean and professional look.
- **Extensibility**: Built with TypeScript for maintainable and scalable code.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Ensures type safety and code reliability.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Serverless Functions**: Backend functionality powered by Next.js API routes.
- **Sanity CMS**: Headless CMS for content creation and management.

## CMS Integration

This project is tightly integrated with **Sanity CMS**, allowing the website owner to:

- Edit existing pages.
- Create new pages dynamically.
- Manage content without needing to modify the code.

For the CMS, see the corresponding [doron-cms repository](https://github.com/your-username/doron-cms).

## Project Structure

- `/pages`: Contains all the page components and API routes.
- `/components`: Reusable components used across the website.
- `/styles`: Tailwind CSS configurations and global styles.
- `/lib`: Helper functions and utilities.
- `/sanity`: Contains the configuration for Sanity integration.

## Getting Started

1. Clone the repository:

   git clone https://github.com/your-username/doron-frontend.git  
   cd doron-frontend  

2. Install dependencies:

   npm install  

3. Configure environment variables:

   Create a `.env.local` file in the root directory and add the following:

   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id  
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_PRODUCTION_URL=
   NEXT_PUBLIC_BASE_URL=
  
  GMAIL_EMAIL_ADDRESS=
  GMAIL_APP_PASSWORD=
  GMAIL_EMAIL_PASSWORD=
  
  NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY=
  NEXT_PUBLIC_GOOGLE_ANALYTICS=
  
  GREEN_API_API_TOKEN=a
  GREEN_API_INSTANCE_ID=
  GREEN_API_MEDIA_URL=
  GREEN_API_BASE_URL=

5. Run the development server:

   npm run dev  

   The website will be available at `http://localhost:3000`.

## Deployment

This project is deployed on **Vercel**. To deploy:

1. Push changes to the main branch.
2. Vercel will automatically build and deploy the updated website.

## Live Website

You can view the live website [here](https://doron-hadad.vercel.app).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

- **CMS Repository**: [doron-cms](https://github.com/barel31/doron-cms)
- **Live Website**: [Doron Hadad Law Firm](https://doron-hadad.vercel.app)

---
Made with ❤️ for Doron Hadad
