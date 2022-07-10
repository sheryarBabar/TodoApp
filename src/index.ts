
import 'reflect-metadata';
import { connection } from './db/connection';
import { app } from './server';
import https from 'https';
import { resolve } from 'path';
import http from 'http';
import { readFileSync } from 'fs';


(async () => {
  await connection;
  const httpServer = http.createServer(app);
  
  httpServer.listen(process.env.PORT, () => {
    console.info(`Server started on port: ${process.env.PORT}`);
  });
})();
