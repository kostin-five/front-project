import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [ 
    react(),  // Плагин для импорта SVG как React-компонентов
  ],
  server: {
    host: true, // Доступ с других устройств
    port: 3000, // Порт
    open: true, // Автоматически открывать браузер
    proxy: {
      '/api': 'http://localhost:5000', // Прокси для АРІ
      },
    },
  build: {
    outDir: 'build', // Папка для сборки
    sourcemap: true, // Генерация sourcemap
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Имена классов в camelCase
    },
  },
  resolve: {
    alias: {
    '@': '/src', // Алиас для папки src
    },
  },
});