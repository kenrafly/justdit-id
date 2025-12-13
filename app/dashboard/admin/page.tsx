"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth, UserRole, UserProfile } from "@/context/AuthContext";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminDashboard() {
  const { userProfile, loading } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<UserRole>("buyer");

  useEffect(() => {
    if (!loading) {
      if (!userProfile) {
        router.push("/login");
      } else if (userProfile.role !== "admin") {
        router.push(`/dashboard/${userProfile.role}`);
      }
    }
  }, [userProfile, loading, router]);

  useEffect(() => {
    if (userProfile?.role === "admin") {
      fetchUsers();
    }
  }, [userProfile]);

  const fetchUsers = async () => {
    try {
      setLoadingUsers(true);
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(
        (doc) => doc.data() as UserProfile
      );
      setUsers(usersList);
    } catch (error) {
      console.error(
        "Error fetching users:",
        error instanceof Error ? error.message : String(error)
      );
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, { role: newRole });

      // Update local state
      setUsers(
        users.map((u) => (u.uid === userId ? { ...u, role: newRole } : u))
      );
      setEditingUser(null);
      alert(
        "Role updated successfully! User must logout and login to see changes."
      );
    } catch (error) {
      console.error("Error updating role:", error);
      alert(
        "Error updating role: " +
          (error instanceof Error ? error.message : String(error))
      );
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const userDocRef = doc(db, "users", userId);
      await deleteDoc(userDocRef);

      // Update local state
      setUsers(users.filter((u) => u.uid !== userId));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert(
        "Error deleting user: " +
          (error instanceof Error ? error.message : String(error))
      );
    }
  };

  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case "admin":
        return "bg-red-500";
      case "reseller":
        return "bg-purple-500";
      case "buyer":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStats = () => {
    return {
      totalUsers: users.length,
      buyers: users.filter((u) => u.role === "buyer").length,
      resellers: users.filter((u) => u.role === "reseller").length,
      admins: users.filter((u) => u.role === "admin").length,
    };
  };

  if (loading || loadingUsers) {
    return (
      <div className="min-h-screen bg-[#041A2F] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!userProfile || userProfile.role !== "admin") {
    return null;
  }

  const stats = getStats();

  return (
    <div className="min-h-screen bg-[#041A2F]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Dashboard Admin
            </h1>
            <p className="text-gray-400">
              Selamat datang, {userProfile.displayName || userProfile.email}
            </p>
          </div>
          <Link
            href="/"
            className="bg-[#28529C] hover:bg-[#1e3d7a] text-white px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#28529C] rounded-xl p-6">
            <h3 className="text-gray-300 text-sm mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-white">{stats.totalUsers}</p>
          </div>
          <div className="bg-[#28529C] rounded-xl p-6">
            <h3 className="text-gray-300 text-sm mb-2">Buyers</h3>
            <p className="text-3xl font-bold text-white">{stats.buyers}</p>
          </div>
          <div className="bg-[#28529C] rounded-xl p-6">
            <h3 className="text-gray-300 text-sm mb-2">Resellers</h3>
            <p className="text-3xl font-bold text-white">{stats.resellers}</p>
          </div>
          <div className="bg-[#28529C] rounded-xl p-6">
            <h3 className="text-gray-300 text-sm mb-2">Admins</h3>
            <p className="text-3xl font-bold text-white">{stats.admins}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#28529C] rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Admin Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={fetchUsers}
              className="bg-[#4E99BE] hover:bg-[#3d7a99] text-white p-4 rounded-lg text-center font-semibold transition-colors"
            >
              Refresh Users
            </button>
            <button className="bg-[#4E99BE] hover:bg-[#3d7a99] text-white p-4 rounded-lg text-center font-semibold transition-colors">
              Manage Products
            </button>
            <button className="bg-[#4E99BE] hover:bg-[#3d7a99] text-white p-4 rounded-lg text-center font-semibold transition-colors">
              Settings
            </button>
          </div>
        </div>

        {/* User Management Table */}
        <div className="bg-[#28529C] rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">User Management</h2>

          {users.length === 0 ? (
            <div className="text-center py-8 text-gray-400">No users found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-white font-semibold py-3 px-4">
                      User
                    </th>
                    <th className="text-left text-white font-semibold py-3 px-4">
                      Email
                    </th>
                    <th className="text-left text-white font-semibold py-3 px-4">
                      Role
                    </th>
                    <th className="text-left text-white font-semibold py-3 px-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.uid}
                      className="border-b border-white/10 hover:bg-white/5"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          {user.photoURL ? (
                            <img
                              src={user.photoURL}
                              alt={user.displayName || "User"}
                              className="w-8 h-8 rounded-full"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-[#4E99BE] flex items-center justify-center text-white text-sm">
                              {user.email?.charAt(0).toUpperCase()}
                            </div>
                          )}
                          <span className="text-white">
                            {user.displayName || "No Name"}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-300">{user.email}</td>
                      <td className="py-3 px-4">
                        {editingUser === user.uid ? (
                          <select
                            value={selectedRole}
                            onChange={(e) =>
                              setSelectedRole(e.target.value as UserRole)
                            }
                            className="bg-white/10 text-white border border-white/20 rounded px-2 py-1"
                          >
                            <option value="buyer">Buyer</option>
                            <option value="reseller">Reseller</option>
                            <option value="admin">Admin</option>
                          </select>
                        ) : (
                          <span
                            className={`${getRoleBadgeColor(user.role)} text-white px-3 py-1 rounded-full text-sm capitalize`}
                          >
                            {user.role}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          {editingUser === user.uid ? (
                            <>
                              <button
                                onClick={() =>
                                  handleRoleChange(user.uid, selectedRole)
                                }
                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => setEditingUser(null)}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => {
                                  setEditingUser(user.uid);
                                  setSelectedRole(user.role);
                                }}
                                className="bg-[#4E99BE] hover:bg-[#3d7a99] text-white px-3 py-1 rounded text-sm transition-colors"
                                disabled={user.uid === userProfile.uid}
                              >
                                Edit Role
                              </button>
                              <button
                                onClick={() => handleDeleteUser(user.uid)}
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                                disabled={user.uid === userProfile.uid}
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
