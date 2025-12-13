# Role-Based Authentication Guide

This guide explains the role-based authentication system implemented in JustDit.id.

## Overview

The system supports three user roles:

- **Buyer** (Default): Regular customers who purchase products
- **Reseller**: Partners who sell products and earn commissions
- **Admin**: System administrators with full access

## User Roles

### 1. Buyer (Default Role)

- **Dashboard**: `/dashboard/buyer`
- **Capabilities**:
  - Browse and purchase products
  - View order history
  - Manage personal account
  - Track active subscriptions
- **Registration**: Automatically assigned when user signs up

### 2. Reseller

- **Dashboard**: `/dashboard/reseller`
- **Capabilities**:
  - All buyer capabilities
  - Create orders for customers
  - View sales reports
  - Track commissions
  - Manage customer list
- **Registration**: User selects "Reseller" during signup

### 3. Admin

- **Dashboard**: `/dashboard/admin`
- **Capabilities**:
  - Manage all users (buyers, resellers, admins)
  - View all orders and transactions
  - Manage products and pricing
  - Generate reports
  - System settings
- **Registration**: Must be manually set in Firestore (cannot register as admin)

## How It Works

### 1. User Registration

When a user registers:

1. Firebase Authentication creates the auth account
2. A user profile document is created in Firestore at `/users/{uid}`
3. Profile includes: `uid`, `email`, `displayName`, `photoURL`, `role`
4. Default role is `buyer` unless specified

**Firestore Structure:**

```javascript
/users/{uid}
  - uid: string
  - email: string
  - displayName: string | null
  - photoURL: string | null
  - role: 'buyer' | 'reseller' | 'admin'
```

### 2. User Login

When a user logs in:

1. Firebase Authentication validates credentials
2. User profile is fetched from Firestore
3. `userProfile` state is set in AuthContext
4. User is redirected to appropriate dashboard based on role

### 3. Role-Based Redirects

**After Login:**

- Buyer → `/dashboard/buyer`
- Reseller → `/dashboard/reseller`
- Admin → `/dashboard/admin`

**Protected Routes:**
Each dashboard checks the user's role and redirects if unauthorized.

## Implementation Details

### AuthContext Updates

```typescript
// New type for user roles
export type UserRole = "buyer" | "reseller" | "admin";

// Extended user profile
export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: UserRole;
}

// Updated context
interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null; // New
  loading: boolean;
  signUp: (email: string, password: string, role?: UserRole) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: (role?: UserRole) => Promise<void>;
  logout: () => Promise<void>;
}
```

### Registration with Role Selection

The register page includes a role selector:

- Radio buttons for Buyer or Reseller
- Default selection: Buyer
- Description for each role
- Role is passed to `signUp()` function

### Firebase Security Rules

**Important**: Update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read their own profile
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;

      // Users can create their profile on signup
      allow create: if request.auth != null
        && request.auth.uid == userId
        && request.resource.data.role in ['buyer', 'reseller'];

      // Users cannot change their own role
      allow update: if request.auth != null
        && request.auth.uid == userId
        && request.resource.data.role == resource.data.role;

      // Only admins can delete users or change roles
      allow delete, write: if request.auth != null
        && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## Setting Up Admin Users

Admins cannot self-register. To create an admin user:

### Method 1: Firebase Console

1. User registers normally (becomes buyer)
2. Go to Firebase Console > Firestore Database
3. Navigate to `users` collection
4. Find the user document by email/uid
5. Edit the `role` field to `admin`
6. User must log out and log back in

### Method 2: Firebase Admin SDK (Backend)

```javascript
// Node.js backend script
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

async function makeAdmin(uid) {
  await db.collection("users").doc(uid).update({
    role: "admin",
  });
  console.log(`User ${uid} is now an admin`);
}

makeAdmin("USER_UID_HERE");
```

### Method 3: Cloud Function (Recommended)

```typescript
// functions/src/index.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const setUserRole = functions.https.onCall(async (data, context) => {
  // Verify caller is admin
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "Must be logged in"
    );
  }

  const callerProfile = await admin
    .firestore()
    .collection("users")
    .doc(context.auth.uid)
    .get();

  if (callerProfile.data()?.role !== "admin") {
    throw new functions.https.HttpsError("permission-denied", "Must be admin");
  }

  // Update target user's role
  await admin
    .firestore()
    .collection("users")
    .doc(data.uid)
    .update({ role: data.role });

  return { success: true };
});
```

## Dashboard Features

### Buyer Dashboard (`/dashboard/buyer`)

- Total purchases counter
- Active accounts counter
- Total spending tracker
- Quick actions: Buy products, View bundles, Order history
- Recent orders list

### Reseller Dashboard (`/dashboard/reseller`)

- Total sales counter
- Customer count
- Revenue tracker
- Commission tracker
- Quick actions: Add order, Manage customers, Sales reports
- Recent sales list

### Admin Dashboard (`/dashboard/admin`)

- Total users counter
- Total orders counter
- Total revenue tracker
- Reseller count
- Admin tools: Manage users, Manage products, View orders, Settings
- Recent users and orders lists

## Usage Examples

### Check User Role in Component

```typescript
'use client';
import { useAuth } from '@/context/AuthContext';

export default function MyComponent() {
  const { userProfile } = useAuth();

  if (!userProfile) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Welcome, {userProfile.role}!</h1>
      {userProfile.role === 'admin' && (
        <button>Admin Only Button</button>
      )}
    </div>
  );
}
```

### Protect a Route

```typescript
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ProtectedPage() {
  const { userProfile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !userProfile) {
      router.push('/login');
    }
  }, [userProfile, loading, router]);

  if (loading || !userProfile) {
    return <div>Loading...</div>;
  }

  return <div>Protected Content</div>;
}
```

### Redirect Based on Role

```typescript
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { userProfile } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userProfile) {
      router.push(`/dashboard/${userProfile.role}`);
    }
  }, [userProfile, router]);

  // Login form...
}
```

## Testing

### Test Buyer Flow

1. Register with "Pembeli" role
2. Login → Should redirect to `/dashboard/buyer`
3. Click profile → See "buyer" role badge
4. Click Dashboard → Navigate to buyer dashboard

### Test Reseller Flow

1. Register with "Reseller" role
2. Login → Should redirect to `/dashboard/reseller`
3. Click profile → See "reseller" role badge
4. Click Dashboard → Navigate to reseller dashboard

### Test Admin Flow

1. Register normally (becomes buyer)
2. Manually change role to "admin" in Firestore
3. Logout and login again
4. Should redirect to `/dashboard/admin`
5. Click profile → See "admin" role badge

## Troubleshooting

### Issue: User role not updating after Firestore change

**Solution**: User must log out and log back in. The role is cached in `userProfile` state.

### Issue: "Permission denied" when accessing dashboard

**Solution**:

1. Check Firestore rules are properly set
2. Verify user has correct role in Firestore
3. Clear browser cache and cookies
4. Log out and log back in

### Issue: Admin cannot be created during registration

**Solution**: This is by design. Admins must be manually promoted in Firestore or via backend script.

### Issue: Role not showing in navbar

**Solution**:

1. Check `userProfile` is being fetched in AuthContext
2. Verify Firestore document exists for user
3. Check browser console for errors

## Next Steps

1. **Implement Order Management**: Add order creation and tracking
2. **Commission System**: Calculate and track reseller commissions
3. **User Management**: Allow admins to manage users
4. **Reports**: Generate sales and revenue reports
5. **Notifications**: Email notifications for orders and commissions
6. **Payment Integration**: Connect with payment gateways

## Security Considerations

1. ✅ Never expose admin credentials in client code
2. ✅ Always validate role on backend before sensitive operations
3. ✅ Use Firestore security rules to enforce role-based access
4. ✅ Implement audit logging for admin actions
5. ✅ Use HTTPS for all API calls
6. ✅ Regularly review and update security rules

---

**Last Updated**: December 2024
**Version**: 1.0
