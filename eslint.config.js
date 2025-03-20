import reactHooks from "eslint-plugin-react-hooks"
import { defineConfig } from "eslint/config"

export default [
    defineConfig([
        {
            rules: {
                semi: "error",
                "prefer-const": "error"
            }
        }
    ]),
    reactHooks.configs["recommended-latest"]
]
