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
      // Focus on real errors that break builds
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "error",
      "no-console": "off", // Allow console statements
      "prefer-const": "warn",
      "no-var": "error",
      // Catch common issues that cause Vercel builds to fail
      "import/no-unresolved": "error",
      "react/jsx-no-undef": "error",
    },
  },
];

export default eslintConfig;
