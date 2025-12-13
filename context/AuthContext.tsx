"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export type UserRole = "buyer" | "reseller" | "admin";

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signUp: (email: string, password: string, role?: UserRole) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: (role?: UserRole) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile from Firestore
  const fetchUserProfile = async (uid: string): Promise<UserProfile | null> => {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        return userDoc.data() as UserProfile;
      }
      return null;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }
  };

  // Create user profile in Firestore
  const createUserProfile = async (
    user: User,
    role: UserRole = "buyer"
  ): Promise<void> => {
    try {
      const userDocRef = doc(db, "users", user.uid);
      const profile: UserProfile = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role,
      };
      await setDoc(userDocRef, profile, { merge: true });
      setUserProfile(profile);
    } catch (error) {
      console.error("Error creating user profile:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        const profile = await fetchUserProfile(user.uid);
        if (profile) {
          setUserProfile(profile);
        } else {
          // Create profile with default buyer role if doesn't exist
          await createUserProfile(user, "buyer");
        }
      } else {
        setUserProfile(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (
    email: string,
    password: string,
    role: UserRole = "buyer"
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserProfile(userCredential.user, role);
  };

  const signIn = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const profile = await fetchUserProfile(userCredential.user.uid);
    if (profile) {
      setUserProfile(profile);
    }
  };

  const signInWithGoogle = async (role: UserRole = "buyer") => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);

    // Check if user already has a profile
    const existingProfile = await fetchUserProfile(userCredential.user.uid);
    if (!existingProfile) {
      // New user - create profile with specified role
      await createUserProfile(userCredential.user, role);
    } else {
      setUserProfile(existingProfile);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUserProfile(null);
  };

  const value = {
    user,
    userProfile,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
