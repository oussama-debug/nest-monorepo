# Stage 1: Builder
FROM --platform=$BUILDPLATFORM node:23-alpine AS builder
RUN apk add --no-cache curl

# Install pnpm globally
RUN npm install -g pnpm@10.1.0

# Copy package files first
WORKDIR /usr/src/app
COPY package*.json pnpm-lock.yaml ./

# Set build args
ARG GATEWAY_DATABASE_URL
ARG GATEWAY_BUS_URL
ARG GATEWAY_BUS_PORT
ARG GATEWAY_BUS_PASSWORD
ARG SECRET_STRIPE_KEY
ARG SECRET_STRIPE_WEBHOOK_SECRET
ARG SECRET_JWT_KEY
ARG SECRET_AWS_ACCESS_KEY_ID
ARG SECRET_AWS_SECRET_ACCESS_KEY
ARG SECRET_AWS_ENDPOINT_URL_S3
ARG SECRET_AWS_REGION
ARG SECRET_AWS_BUCKET_NAME
ARG SECRET_TYPESENSE_KEY
ARG PUBLIC_ENDPOINT
ARG DATABASE_URL
ARG NODE_ENV

# Install dependencies
RUN pnpm install

# Copy source code and build
COPY . .
RUN pnpm run build -- gateway

# Stage 2: Production Image
FROM --platform=$BUILDPLATFORM node:23-alpine AS runner
RUN apk add --no-cache curl

# Install pnpm globally
RUN npm install -g pnpm@10.1.0

WORKDIR /usr/src/app

# Copy package files and install production dependencies
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Copy built application
COPY --from=builder /usr/src/app/dist ./dist

# Set environment variables
ENV GATEWAY_DATABASE_URL=${GATEWAY_DATABASE_URL} \
    GATEWAY_BUS_URL=${GATEWAY_BUS_URL} \
    GATEWAY_BUS_PORT=${GATEWAY_BUS_PORT} \
    GATEWAY_BUS_PASSWORD=${GATEWAY_BUS_PASSWORD} \
    SECRET_STRIPE_KEY=${SECRET_STRIPE_KEY} \
    SECRET_STRIPE_WEBHOOK_SECRET=${SECRET_STRIPE_WEBHOOK_SECRET} \
    SECRET_JWT_KEY=${SECRET_JWT_KEY} \
    SECRET_AWS_ACCESS_KEY_ID=${SECRET_AWS_ACCESS_KEY_ID} \
    SECRET_AWS_SECRET_ACCESS_KEY=${SECRET_AWS_SECRET_ACCESS_KEY} \
    SECRET_AWS_ENDPOINT_URL_S3=${SECRET_AWS_ENDPOINT_URL_S3} \
    SECRET_AWS_REGION=${SECRET_AWS_REGION} \
    SECRET_AWS_BUCKET_NAME=${SECRET_AWS_BUCKET_NAME} \
    SECRET_TYPESENSE_KEY=${SECRET_TYPESENSE_KEY} \
    PUBLIC_ENDPOINT=${PUBLIC_ENDPOINT} \
    NODE_ENV=${NODE_ENV} \
    DATABASE_URL=${DATABASE_URL}

EXPOSE 3000

CMD ["node", "dist/main.js"]