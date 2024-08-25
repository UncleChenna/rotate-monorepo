# Workspace Setup

1. **Created a directory**  
   A new directory was created for the workspace.

2. **Initialized Git and PNPM**  
   Git and PNPM were initialized in the workspace directory.

3. **Created `pnpm-workspace.yaml`**  
   A `pnpm-workspace.yaml` file was created with a workspace map to define the packages in the workspace:

   ```yaml
   packages:
     - 'apps/*'
     - 'packages/*'

4. **Initialized a new Next.js app**  
   A new Next.js application was initialized inside the `apps` directory.

   ```bash
   mkdir apps
   cd apps
   pnpm create next-app@latest web
   cd ..

5. **Added a shared Next.js configuration as a workspace package**  
   A `next-config` package was added in the `packages` directory to share configurations across all Next.js apps in the workspace.

   ```bash
   mkdir packages
   cd packages
   mkdir next-config
   cd next-config
   pnpm init
   cd ../../

6. **Added Lighthouse configuration as a workspace package**  
   A `lighthouse-config` package was added in the `packages` directory to manage Lighthouse settings across all Next.js apps in the workspace.

   ```bash
   mkdir packages/lighthouse-config
   cd packages/lighthouse-config
   pnpm init
   cd ../../

## Running the App Locally

1. **Navigate to the root workspace directory**  
   Ensure you are in the root of the workspace.

   ```bash
   cd rotate-monorepo

2. **Install dependencies**  
   Run the following command to install all dependencies and packages:

   ```bash
   pnpm install

3. **Start the Next.js app in development mode**  
   Use the following command to start the Next.js application in development mode:

   ```bash
   pnpm web dev