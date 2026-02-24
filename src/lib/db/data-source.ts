import "reflect-metadata"
import { DataSource } from "typeorm"

import { Visit } from "./entities/Visit"

let dataSource: DataSource | null = null

function createDataSource(): DataSource {
  return new DataSource({
    type: "postgres",
    host: process.env.PSQL_HOST || "localhost",
    port: parseInt(process.env.PSQL_PORT || "5432"),
    database: process.env.PSQL_DATABASE || "database",
    username: process.env.PSQL_USER || "root",
    password: process.env.PSQL_PASSWORD || "root",
    entities: [Visit],
    synchronize: true,
  })
}

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource
  }

  dataSource = createDataSource()

  try {
    await dataSource.initialize()
  } catch (error) {
    console.error(`[DB] Failed to connect to PostgreSQL:`, error)
    throw error
  }

  const { host, port, database } = dataSource.options as { host: string; port: number; database: string }
  console.log(`[DB] Connected to PostgreSQL: ${host}:${port}/${database}`)

  return dataSource
}

export async function getVisitRepository() {
  const ds = await getDataSource()
  return ds.getRepository(Visit)
}
