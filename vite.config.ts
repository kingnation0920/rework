import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    // Vercel 배포 시 루트 경로를 명확히 하기 위해 추가합니다.
    base: '/', 
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        // 기존의 경로 별칭 설정을 유지합니다.
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // AI Studio 환경을 위한 HMR 설정을 유지합니다.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
