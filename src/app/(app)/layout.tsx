import Client from "@/app/(app)/client";
import React from "react";


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Client>
      {children}
    </Client>
  );
}
