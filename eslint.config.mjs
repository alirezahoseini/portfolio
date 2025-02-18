import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import tseslint from "typescript-eslint"
import importPlugin from "eslint-plugin-import"
import react from "eslint-plugin-react"
import stylistic from "@stylistic/eslint-plugin"
import destructing from "eslint-plugin-newline-destructuring"
import unusedImports from "eslint-plugin-unused-imports"



export default tseslint.config({
  ignores: [".next", "node_modules", ".idea", ".vscode"],
  extends: [
    js.configs.recommended, 
    tseslint.configs.recommended],
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node
    }
  },
  plugins: {
    react,
    "@stylistic": stylistic,
    "react-hooks": reactHooks,
    "newline-destructuring": destructing,
    "unused-imports": unusedImports,
    import: importPlugin
  },
  rules: {
    "unused-imports/no-unused-imports": "error",
    "@stylistic/indent": ["warn", 2],
    "@stylistic/array-bracket-spacing": ["warn", "never"],
    "@stylistic/array-element-newline": ["warn", "consistent"],
    "@stylistic/arrow-parens": ["warn", "as-needed"],
    "@stylistic/arrow-spacing": "warn",
    "@stylistic/function-call-spacing": ["warn", "never"],
    "@stylistic/block-spacing": "warn",
    "@stylistic/brace-style": ["warn", "stroustrup"],
    "@stylistic/key-spacing": ["warn"],
    "@stylistic/quotes": ["warn", "double"],
    "@stylistic/semi": ["warn", "never"],
    "@stylistic/array-bracket-newline": ["warn", "consistent"],
    "@stylistic/comma-dangle": ["warn", "never"],
    "@stylistic/comma-spacing": ["warn", { "before": false, "after": true }],
    "@stylistic/comma-style": ["warn", "last"],
    "@stylistic/computed-property-spacing": ["warn", "never"],
    "@stylistic/curly-newline": ["warn", { "consistent": true }],
    "@stylistic/dot-location": ["warn", "property"],
    "@stylistic/eol-last": ["warn", "never"],
    "@stylistic/function-paren-newline": ["warn", "multiline"],
    "@stylistic/implicit-arrow-linebreak": ["warn", "beside"],
    "@stylistic/indent-binary-ops": ["warn", 2],
    "@stylistic/jsx-quotes": ["warn", "prefer-double"],
    "@stylistic/jsx-closing-bracket-location": ["warn", "tag-aligned"],
    "@stylistic/jsx-closing-tag-location": ["warn", "tag-aligned"],
    "@stylistic/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }],
    "@stylistic/jsx-curly-newline": ["warn", { multiline: "require", singleline: "forbid" }],
    "@stylistic/jsx-curly-spacing": ["warn", { "when": "never" }],
    "@stylistic/jsx-equals-spacing": ["warn", "never"],
    "@stylistic/jsx-first-prop-new-line": ["warn", "multiline"],
    "@stylistic/jsx-indent": ["warn", 2],
    "@stylistic/jsx-max-props-per-line": ["warn", { "maximum": 1, "when": "multiline" }],
    "@stylistic/jsx-newline": ["warn", { "prevent": false }],
    "@stylistic/jsx-function-call-newline": ["warn", "multiline"],
    "@stylistic/jsx-indent-props": ["warn", 2],
    "@stylistic/jsx-pascal-case": ["warn"],
    "@stylistic/jsx-props-no-multi-spaces": ["warn"],
    "@stylistic/jsx-tag-spacing": ["warn"],
    "@stylistic/jsx-wrap-multilines": ["warn"],
    "@stylistic/max-len": ["warn", { "code": 120, "ignoreUrls": true }],
    "@stylistic/multiline-comment-style": ["warn", "separate-lines", { "checkJSDoc": true }],
    "@stylistic/multiline-ternary": ["warn", "always-multiline"],
    "@stylistic/newline-per-chained-call": ["warn", { "ignoreChainWithDepth": 2 }],
    "@stylistic/no-floating-decimal": "warn",
    "@stylistic/no-whitespace-before-property": "warn",
    "@stylistic/object-curly-spacing": ["warn", "always", { "objectsInObjects": true }],
    "@stylistic/object-property-newline": ["warn", { "allowAllPropertiesOnSameLine": true }],
    "@stylistic/rest-spread-spacing": ["warn", "never"],
    "@stylistic/space-before-blocks": ["warn", "always"],
    "@stylistic/space-in-parens": ["warn", "never"],
    "@stylistic/spaced-comment": ["warn", "always"],
    "@stylistic/switch-colon-spacing": ["warn"],
    "@stylistic/template-curly-spacing": ["warn", "never"],
    "@stylistic/type-annotation-spacing": "warn",
    "@stylistic/type-generic-spacing": "warn",
    "@stylistic/space-before-function-paren": [
      "warn",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "@stylistic/object-curly-newline": [
      "warn",
      {
        "ObjectExpression": { "multiline": true, "minProperties": 3 },
        "ObjectPattern": { "multiline": true, "minProperties": 3 },
        "ExportDeclaration": { "multiline": true, "minProperties": 2 }
      }
    ],
    "@stylistic/no-multiple-empty-lines": [
      "warn",
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0
      }
    ],
    "@stylistic/member-delimiter-style": ["warn", {
      "multiline": {
        "delimiter": "none",
        "requireLast": false
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false
      },
      "multilineDetection": "brackets"
    }],
    "@stylistic/padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "always", prev: "import", next: ["type", "const"] },
      { blankLine: "always", prev: ["type", "export"], next: ["type", "const", "expression"] },
      {
        blankLine: "always",
        prev: ["multiline-expression", "multiline-const"],
        next: ["multiline-const", "const", "return"]
      },
      { blankLine: "always", prev: "singleline-const", next: ["multiline-const"] },
      { blankLine: "always", prev: ["case", "default"], next: "*" },
      {
        blankLine: "always",
        prev: ["singleline-const", "multiline-const", "multiline-expression"],
        next: "multiline-expression"
      }
    ],
    "newline-destructuring/newline": "error",
    "no-console": "warn",
    ...reactHooks.configs.recommended.rules,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react-refresh/only-export-components": "off",
    "no-async-promise-executor": "off",
    "@typescript-eslint/no-unsafe-function-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin", // Node.js built-ins (e.g., 'fs', 'path')
          "external", // External imports (e.g., 'react', 'lodash')
          "internal", // Internal imports based on path patterns
          ["parent", "sibling", "index"] // Parent, sibling, and index imports
        ],
        pathGroups: [
          {
            pattern: "@app/**",
            group: "internal",
            position: "before"
          },
          {
            pattern: "src/**",
            group: "internal",
            position: "before"
          },
          {
            pattern: "@mui/**",
            group: "internal",
            position: "before"
          },
          {
            pattern: "@x-mui/**",
            group: "internal",
            position: "before"
          },
          {
            pattern: "@core/**",
            group: "internal",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "never"
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
})
