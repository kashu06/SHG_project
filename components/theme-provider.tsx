<<<<<<< HEAD
"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"
=======
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
>>>>>>> 9dafe79 (ledger frontend)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
<<<<<<< HEAD

=======
>>>>>>> 9dafe79 (ledger frontend)
