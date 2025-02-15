import React from 'react';
import { IReactNode } from '../../@types/Global';
import "./globals.css"

type Props = {
  children: React.ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}
