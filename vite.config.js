import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";

export default defineConfig({
    plugins: [laravel(["resources/assets/vendors/mdi/css/materialdesignicons.min.css",
    "resources/assets/vendors/css/vendor.bundle.base.css",
    "resources/assets/css/style.css",
    
    "resources/assets/vendors/js/vendor.bundle.base.js",
    "resources/assets/vendors/chart.js/Chart.min.js",
    "resources/assets/js/jquery.cookie.js",
    "resources/assets/js/off-canvas.js",
    "resources/assets/js/hoverable-collapse.js",
    "resources/assets/js/misc.js",
    "resources/assets/js/dashboard.js",
    "resources/assets/js/todolist.js",])],
    build: {
        outDir: 'build', // Change this path to match your desired Laravel project structure
      },
});



