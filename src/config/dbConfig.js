import { MongoClient } from "mongodb";

export default async function connectDatabase(stringConnection) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringConnection);
    console.log("Conectando ao banco de dados...");
    await mongoClient.connect();
    console.log("Conexão com MongoDB estabelecida com sucesso!");
    return mongoClient;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados", error);
    process.exit();
  }
}
