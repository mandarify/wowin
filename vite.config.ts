// Vite

import path from "path";

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({

   base: '/wowin/',

   plugins: [react()],

   resolve: {
      alias: {

         '@assets': path.resolve(__dirname, './src/01_Assets'),
         '@app': path.resolve(__dirname, './src/02_App'),
         '@layouts': path.resolve(__dirname, './src/03_Layouts'),
         '@pages': path.resolve(__dirname, './src/04_Pages'),
         '@widgets': path.resolve(__dirname, './src/05_Widgets'),
         '@entities': path.resolve(__dirname, './src/06_Entities'),
         '@features': path.resolve(__dirname, './src/07_Features'),
         '@shared': path.resolve(__dirname, './src/08_Shared'),

         '@styles': path.resolve(__dirname, './src/01_Assets/01_styles'),
         '@images': path.resolve(__dirname, './src/01_Assets/02_images'),
         '@icons': path.resolve(__dirname, './src/01_Assets/03_icons'),
         '@ui': path.resolve(__dirname, './src/08_Shared/ui'),
      },
   },

});
