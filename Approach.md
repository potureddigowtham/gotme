# GotMe
**A platform to create personal description pages for promoting services.**

## Project Overview

**GotMe** is a website designed for developers and technical professionals who want to offer services such as teaching, job support, and interview preparation. The platform connects service providers with customers seeking these services.

### User Types

1. **Workers:** Developers or technical professionals offering services (teaching, job support, interview support).
2. **Customers:** Individuals searching for service providers and connecting with them.

### Initial Modules and Features

#### 1. Main Landing Page
- **Introduction:** Explains the purpose of the site.
- **Search and Filter:** Allows customers to search for workers based on various criteria.
- **Testimonials:** Displays feedback from satisfied customers.
- **Footer:** Includes quick links and a "Try Me" option inviting developers to create their own page.

#### 2. Worker Page
This is the core feature of the application, showcasing the worker's profile.

- **Intro Section:** Displays the worker's pseudonym, current company, experience, past projects, and a pseudonym email.
- **Tech Section:** Highlights the worker's technical skills, such as proficiency in Python, cloud technologies, DevOps, etc.
- **Reference Section:** Contains links to any projects or references the worker wishes to share.

#### 3. Worker Page Creator
A tool for workers to create their profile pages.

- **Basic Details Form:** Collects mandatory information.
- **Tech Skills Section:** Allows workers to list their technical skills.
- **Projects Section:** Enables workers to add details about their past projects.

### Additional Features

- **User Accounts:** Workers must create an account using email, Google, GitHub, etc.

## Project Plan

### Phase 1: Planning and Requirements Gathering

1. **Define Requirements:**
   - Detail each feature mentioned in the overview.
   - Create user stories for both Workers and Customers.
   - Prioritize features for an MVP (Minimum Viable Product).

2. **Tech Stack Selection:**
   - **Frontend:** React.js, Tailwind CSS, and Next.js for server-side rendering and SEO.
   - **Backend:** Python with FastAPI for building the API.
   - **Database:** PostgreSQL for relational data management.
   - **Authentication:** Firebase Auth or Auth0 for secure and easy authentication.
   - **Deployment:** Local development initially, with OCI Cloud for production.
   - **Version Control:** GitHub for repository management.
   - **DevOps:** Docker for containerization, GitHub Actions for CI/CD.

3. **Design:**
   - Wireframe the main landing page, worker page, and worker page creator.
   - Create UI/UX designs using Figma or Sketch.

### Phase 2: Setting Up the Development Environment

1. **Version Control Setup:**
   - Initialize a Git repository.
   - Set up branch management strategy (e.g., main, development, feature branches).

2. **Initial Project Setup:**
   - Set up a Next.js project for the frontend.
   - Set up a FastAPI server for the backend.
   - Configure PostgreSQL database.

3. **Environment Configuration:**
   - Create `.env` files for managing environment variables.
   - Configure Docker for consistent development environments.

### Phase 3: Core Feature Development

#### 1. Main Landing Page

- **Frontend:**
  - Implement layout and structure using React components.
  - Create search and filter functionality with a dedicated state management solution like Redux or Context API.
  - Display testimonials with a dynamic carousel.
  - Add a footer with navigation links and a "Try Me" CTA.

- **Backend:**
  - Set up API endpoints using FastAPI for fetching workers' data based on search criteria.
  - Implement logic for testimonials retrieval.

#### 2. Worker Page

- **Frontend:**
  - Design and implement the worker profile page layout.
  - Create reusable components for sections like intro, tech skills, and references.
  - Integrate email contact functionality.

- **Backend:**
  - Develop endpoints using FastAPI to serve worker profile data.
  - Implement a service for sending contact emails.

#### 3. Worker Page Creator

- **Frontend:**
  - Build forms for basic details, tech skills, and projects using Formik or React Hook Form.
  - Implement client-side validation.

- **Backend:**
  - Create API endpoints using FastAPI for submitting and updating worker profiles.
  - Implement backend validation and data sanitation.

### Phase 4: User Accounts and Authentication

1. **Integrate Authentication:**
   - Set up Firebase Auth or Auth0 for user authentication.
   - Implement login, registration, and account management flows.

2. **Protected Routes:**
   - Ensure the worker page creator is accessible only to authenticated users.
   - Implement JWT or session-based authentication for secure access.

### Phase 5: Testing and QA

1. **Unit Testing:**
   - Write tests for React components using Jest and React Testing Library.
   - Test backend endpoints with pytest and FastAPI TestClient.

2. **Integration Testing:**
   - Test interactions between frontend and backend using Cypress or Selenium.

3. **User Testing:**
   - Conduct usability testing sessions with potential users.
   - Gather feedback and iterate on UI/UX improvements.

### Phase 6: Deployment

1. **Prepare for Deployment:**
   - Ensure environment variables are set up correctly.
   - Optimize build for production.

2. **Local Deployment:**
   - Deploy the Next.js app and FastAPI server locally using Docker.

3. **Prepare for OCI Cloud Deployment:**
   - Set up infrastructure on OCI Cloud.
   - Deploy frontend and backend services to OCI.

4. **Continuous Integration/Continuous Deployment (CI/CD):**
   - Set up GitHub Actions for automated testing and deployment pipelines.

### Phase 7: Post-Launch and Iteration

1. **Monitor and Maintain:**
   - Set up monitoring and logging for both frontend and backend.
   - Use services like Google Analytics for user tracking and insights.

2. **Gather Feedback:**
   - Collect user feedback and reviews.
   - Implement new features and improvements based on user suggestions.

3. **Scaling:**
   - Plan for scaling the application based on user growth.
   - Optimize database queries and server performance.

### Technology and Tool Choices

- **Frontend:**
  - **React.js:** Component-based architecture for dynamic UIs.
  - **Next.js:** Server-side rendering for SEO benefits and fast initial load times.
  - **Tailwind CSS:** Utility-first CSS framework for rapid UI development.

- **Backend:**
  - **Python with FastAPI:** Fast and efficient framework for building APIs.
  - **PostgreSQL:** Robust relational database for structured data.
  - **Firebase Auth/Auth0:** Secure and easy-to-implement authentication solutions.

- **DevOps:**
  - **Docker:** Consistent development and production environments.
  - **GitHub Actions:** Automate workflows for testing and deployment.
  - **Local Deployment & OCI Cloud:** Start with local development and plan for OCI Cloud deployment for production.
