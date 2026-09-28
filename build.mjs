import {build} from 'vite';
import {cp,mkdir,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const name of ['index.html','en.html','script.js','style.css','secret-books.webp','journal.html','journal.css','journal.js','journal-data.js']) await cp(name,`dist/${name}`);
await build({root:'studio',base:'/studio/',build:{outDir:'../dist/studio',emptyOutDir:false,chunkSizeWarningLimit:4000},define:{'process.env.NODE_ENV':JSON.stringify('production')}});
