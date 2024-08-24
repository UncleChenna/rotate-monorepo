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