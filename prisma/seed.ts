import { PrismaClient, Prisma } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: "alice@teste.com",
    password: "101010",
    name: "Alice",
  },
  {
    email: "joao@teste.com",
    password: "202020",
    name: "João",
  },  
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();