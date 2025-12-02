// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/',
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "VOZOLEGY - أفضل موقع لبيع منتجات ال vape  في مصر",
          description:
            "VOZOLEGY  متجر إلكتروني لبيع أجهزة Vape  في مصر. أصلية . توصيل سريع و مجاني لكل المحافظات.",
          keywords:
            " سيجارة الكترونية مصر, فيب, vape مصر, زيرو نيكوتين,vozol , vozol egypt , zero nicotine , dispossible vape , اجهزة vape",
        },
      },
    }),
  ],
  base: "/",

  // إضافات محسنة للأداء
  server: {
    port: 3000,
    open: true, // يفتح المتصفح تلقائياً
  },

  build: {
    // تقسيم الملفات لتحسين التحميل
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
