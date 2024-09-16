# Bites - Node, Redis, TypeScript & Express Backend

This repo is an example of using Redis in node with the node-redis package. Learn how to build a node backend and use Redis's speed. Let's have a look at the basic Redis data types, then some modern features such as RedisJSON, Redis Search and Bloom filters. Shows how we can use Redis as a cache for 3rd party APIs as well.

Utilises the following:

- Node
- Express
- Redis (Hashes, Lists, Sets, Sorted Sets & Strings)
- TypeScript
- Zod validation (& Express middleware)
- RedisJSON
- Redis Search
- Redis Bloom Filters

## Tutorial

[![YouTube Video](https://img.youtube.com/vi/dQV0xzOeGzU/0.jpg)](https://youtu.be/dQV0xzOeGzU)

This repo is the code that was written in the following YouTube video. The YouTube chapters match the commits in this repo, so you can easily see what changed when.

## Usage

To use this project, you will first need to have a running Redis Stack instance. View the [Redis guide](https://redis.io/docs/latest/operate/oss_and_stack/install/) to get this set-up on your environment

### Development

1. Clone the repo
2. Run `pnpm install`
3. Run `pnpm run dev`

### Production

1. Clone the repo
2. Run `pnpm install`
3. Run `pnpm run build`
4. Run `pnpm run start`

## What Next?

To expand on this project you could implement the following features and improvements:

- **Authentication and Authorization**

  - Implement JWT-based user authentication, including registration and login routes.
  - Introduce Role-Based Access Control (RBAC) to restrict access to certain routes based on user roles (e.g., admin, user).

- **Advanced Redis Features**

  - Utilize Redis Pub/Sub for real-time updates, enabling live communication such as updates to restaurant data or reviews.
  - Explore Redis Streams for event sourcing to record all changes as events.

- **Improved Caching Strategies**

  - Implement cache invalidation by setting appropriate expiration times and automatically updating the cache when underlying data changes.

- **Real-Time Features with WebSockets**
  - Integrate Socket.IO to add real-time functionalities like live chat, notifications, or live updates of reviews.
