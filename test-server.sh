#!/bin/bash

export DATABASE_URL="file:./jokes-test.db"
npx prisma migrate reset -f
npm exec -- node prisma/test-seeds.mjs
npx next dev
