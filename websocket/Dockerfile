# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=23.5.0
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Node.js"

# Use a proper working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base AS build

# Install required build tools and OpenSSL
RUN apt-get update -y && \
    apt-get install --no-install-recommends -y \
        build-essential \
        node-gyp \
        pkg-config \
        python-is-python3 \
        openssl && \
    rm -rf /var/lib/apt/lists/*

# Copy only package definition files first
COPY package-lock.json package.json ./

# Install only production dependencies (must include prisma and @prisma/client)
RUN npm ci --omit=dev

# Copy application code including Prisma schema
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Final stage for production image
FROM base

# Copy only necessary files from build stage
COPY --from=build /app /app

# Set working directory
WORKDIR /app

# Expose app port
EXPOSE 3000

# Start the WebSocket server
CMD [ "node", "ws-server.js" ]
