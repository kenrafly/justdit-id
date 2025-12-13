# Update Node.js to Fix Sanity Studio

Your Node.js version (v20.10.0) needs to be updated to run Sanity Studio.

## Required Version

- Node.js >= 20.19 or >= 22.12

## How to Update Node.js

### Option 1: Using Node.js Installer (Recommended)

1. Visit https://nodejs.org/
2. Download the latest LTS version (20.x or 22.x)
3. Run the installer
4. Restart your terminal
5. Verify: `node --version`

### Option 2: Using NVM (Node Version Manager)

```bash
# Install NVM from: https://github.com/coreybutler/nvm-windows

# Then install latest LTS:
nvm install lts
nvm use lts
```

## After Updating Node.js

1. **Verify Node version**:

   ```bash
   node --version
   ```

   Should show v20.19+ or v22.12+

2. **Reinstall dependencies**:

   ```bash
   npm install
   ```

3. **Start Sanity Studio**:

   ```bash
   npm run sanity
   ```

4. **Access Studio**: http://localhost:3333

## Alternative: Use Hosted Studio Only

If you can't update Node.js right now, you can:

1. Deploy Studio to Sanity's cloud:

   ```bash
   npm run sanity:deploy
   ```

2. Access your hosted studio at:
   https://justdit-id.sanity.studio

Note: You may still encounter the same error during deployment. Updating Node.js is recommended.

## Your CMS is Already Working!

The good news: Your homepage is already connected to Sanity CMS! You just need Sanity Studio (the admin panel) to edit content.

For now, you can:

- Continue developing with the default content
- Update Node.js when convenient
- Then use Studio to manage all homepage content

Your Next.js app at http://localhost:3000 is working perfectly!
