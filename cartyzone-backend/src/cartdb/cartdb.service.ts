import { Injectable, OnModuleInit } from '@nestjs/common';
// import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from 'generated/prisma/client';
// import ws from 'ws';

// neonConfig.webSocketConstructor = ws;
// const connectionString = `${process.env.DATABASE_URL}`;
// console.log('Connection String:', connectionString);

// Init prisma client

// const prisma = global.prisma || new PrismaClient({ adapter });

@Injectable()
export class CartdbService extends PrismaClient implements OnModuleInit {
  constructor() {
    const url = process.env.DATABASE_URL;

    if (!url) {
      throw new Error('DATABASE_URL is not defined');
    }

    const adapter = new PrismaNeon({ connectionString: url });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
