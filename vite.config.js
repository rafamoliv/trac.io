import { resolve as pathResolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isDev = env.REACT_ENVIRONMENT === 'DEVELOPMENT'
  const configStyledComponents = isDev && {
    displayName: true,
    fileName: false,
    namespace: 'boiler-vite'
  }

  return {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-styled-components', configStyledComponents]]
        }
      })
    ],
    envPrefix: 'REACT_',
    resolve: {
      alias: {
        '@': pathResolve('./src')
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest.setup.ts',
      deps: {
        inline: ['vitest-canvas-mock']
      },
      coverage: {
        provide: 'c8',
        exclude: [
          'vitest.setup.ts',
          '**/*.styles.ts',
          '**/*.test.{ts,tsx}',
          '**/*.stories.tsx',
          '**/*.config.ts',
          'src/assets/**/*',
          'src/store/**/*',
          'src/utils/tests/*',
          'src/styles/*',
          'src/components/**/index.ts',
          'src/services/api.ts'
        ]
      }
    }
  }
})
