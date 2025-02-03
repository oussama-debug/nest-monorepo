# build stage
FROM node:22-alpine AS builder

# Define all build arguments
ARG DATABASE_URL
ARG BUS_URL
ARG BUS_HOST
ARG BUS_PORT
ARG NODE_ENV

# Install global dependencies
RUN npm install -g pnpm
RUN npm install -g @nestjs/cli
WORKDIR /app

# Copy configuration files
COPY pnpm-lock.yaml package.json nest-cli.json tsconfig*.json ./
COPY apps ./apps
COPY libs ./libs

# Set build-time environment variables
ENV DATABASE_URL=${DATABASE_URL}
ENV BUS_URL=${BUS_URL}
ENV BUS_HOST=${BUS_HOST}
ENV BUS_PORT=${BUS_PORT}
ENV NODE_ENV=${NODE_ENV}

# Install dependencies and generate Prisma client
RUN pnpm install --frozen-lockfile
RUN pnpm build

# production stage
FROM node:22-alpine

# Define all production arguments
ARG DATABASE_URL
ARG BUS_URL
ARG BUS_HOST
ARG BUS_PORT
ARG NODE_ENV
ARG PUBLIC_ENDPOINT
ARG SECRET_STRIPE_KEY
ARG SECRET_STRIPE_WEBHOOK_SECRET
ARG SECRET_JWT_KEY
ARG SECRET_AWS_ACCESS_KEY_ID
ARG SECRET_AWS_SECRET_ACCESS_KEY
ARG SECRET_AWS_ENDPOINT_URL_S3
ARG SECRET_AWS_REGION
ARG SECRET_AWS_BUCKET_NAME
ARG SECRET_TYPESENSE_KEY

WORKDIR /app

# Copy build artifacts and dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/libs/database/prisma ./libs/database/prisma

# Generate Prisma client with proper DATABASE_URL
RUN cd libs/database && pnpm dlx prisma generate

# Set all environment variables
ENV DATABASE_URL=${DATABASE_URL} \
    BUS_URL=${BUS_URL} \
    BUS_HOST=${BUS_HOST} \
    BUS_PORT=${BUS_PORT} \
    NODE_ENV=${NODE_ENV} \
    PUBLIC_ENDPOINT=${PUBLIC_ENDPOINT} \
    SECRET_STRIPE_KEY=${SECRET_STRIPE_KEY} \
    SECRET_STRIPE_WEBHOOK_SECRET=${SECRET_STRIPE_WEBHOOK_SECRET} \
    SECRET_JWT_KEY=${SECRET_JWT_KEY} \
    SECRET_AWS_ACCESS_KEY_ID=${SECRET_AWS_ACCESS_KEY_ID} \
    SECRET_AWS_SECRET_ACCESS_KEY=${SECRET_AWS_SECRET_ACCESS_KEY} \
    SECRET_AWS_ENDPOINT_URL_S3=${SECRET_AWS_ENDPOINT_URL_S3} \
    SECRET_AWS_REGION=${SECRET_AWS_REGION} \
    SECRET_AWS_BUCKET_NAME=${SECRET_AWS_BUCKET_NAME} \
    SECRET_TYPESENSE_KEY=${SECRET_TYPESENSE_KEY}

EXPOSE 3000

# Start the application using local node_modules/.bin
CMD ["./node_modules/.bin/nest", "start", "gateway"]