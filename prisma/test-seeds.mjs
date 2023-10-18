
import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

(async function() {
  const joke = await prisma.joke.create({
    data: {
      content: "Why did the chicken cross the road? Dunno.",
    }
  });

  await prisma.$disconnect();
})();
