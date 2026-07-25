import { FlatCompat } from '@eslint/eslintrc'
import tseslint from 'typescript-eslint'

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

export default tseslint.config(
  {
    ignores: ['legacy-gatsby/**', '.next/**', 'out/**', 'node_modules/**'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
)
