<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Production ready boilerplate, nothing else to think.

This boilerplate aims to offer every that you need to start develop following best practices:
- Clean architecture
- Optimaized (release image)[.docker/node/release/Dockerfile] for NodeJS.
- [commit linter](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) with [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) 
- VSCode debugger enabled attaching applications and tests.
- [SWC](https://swc.rs/) fast compiler
- Style guide, linter, and formatter using [ts-standard](https://github.com/standard/ts-standard)
- [Zod](https://zod.dev/) schema declaration and validation library

## Next features
- Find unused files, dependencies and exports using [knip](https://knip.dev/)
- Replace standard logger with [PinoJS](https://github.com/pinojs/pino)
- Add telemetry throught [OpenTelemetry](https://opentelemetry.io/)
- Use [CorePack](https://nodejs.org/docs/latest-v20.x/api/corepack.html)

## Requirements

-   Docker

## Setup

```bash
docker-compose up
```

This command runs all apps in debug mode.

## Command
```
docker-compose logs --follow SERVICE
docker-compose exec SERVICE COMMAND
```

## Test

```bash
# unit tests
docker-compose exec server npm run test

# e2e tests
docker-compose exec server npm run test:e2e

# test coverage
docker-compose exec server npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Contributors

-   Author - [Stefano Giurgiano](mailto:_)

## License

NestJS is [MIT licensed](LICENSE).
