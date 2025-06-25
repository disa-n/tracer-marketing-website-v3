import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Enforce stricter rules that match Vercel's environment
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "error",
      "react/no-unescaped-entities": "error",
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      // Catch common issues that cause Vercel builds to fail
      "import/no-unresolved": "error",
      "react/jsx-no-undef": "error",
    },
  },
];

export default eslintConfig;
