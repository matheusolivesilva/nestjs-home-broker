# Home Broker

The target of this simple project is to create and list orders and assets, something like a Home Broker.

## 📝 Requirements

- [Docker](https://www.docker.com/get-started/)
- [REST Extension in VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## 💡 Features

You can create and list Orders and Assets with this API, [more details in this file](api.http).

## 🚀 How to Run?

Choose which way will be better for you, if running directly on your machine or with Docker.

### 🐋 Running With Docker

First of all, run docker-compose in your command line:
```docker
docker-compose up
```
Open a new command line and access the app service:
```docker
docker-compose exec app bash
```
Execute the following commands, one to install dependencies and other to generate Prisma Models to work with database:
```bash
npm install && npx prisma generate dev
```

If everything went fine, run the project:
```bash
npm run start:dev
```

Congrats! You're now able to have fun with this simple home broker API ;)

### ⚒ Running locally

```bash
npm install
npx prisma generate dev
npm run start:dev
```
## 🔄 How to use this API?
You'll have all entpoints [in this file](api.http).


## ⚙️ Made With:

- Prisma 4.16.1
- NestJS 10.0.0
- Docker 20.10.7
- MongoDB 5.0.17

## 🧑🏻‍💻 Author

_Matheus Oliveira da Silva_ - [Github](https://github.com/matheusolivesilva) | [Linkedin](https://www.linkedin.com/in/matheusoliveirasilva/)