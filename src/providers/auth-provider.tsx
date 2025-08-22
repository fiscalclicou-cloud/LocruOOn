"use client";
import * as React from "react";

/** Stub simples. Depois colocamos a auth real. */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

/** Hook stub (se o layout ou outra página usa). */
export function useAuth() {
  return { user: null, loading: false };
}
