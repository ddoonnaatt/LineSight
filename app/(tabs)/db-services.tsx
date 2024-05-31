import * as SQLite from "expo-sqlite";
import { Item } from '../../components/Item';

const tableName = 'todoData';

export const getDBConnection = async () => {
  return SQLite.openDatabaseAsync("todo-data");
};

export const createTable = async (db: SQLite.SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        value TEXT NOT NULL
    );`;

  await db.execAsync(query);
};

export const getTodoItems = async (db: SQLite.SQLiteDatabase): Promise<Item[]> => {
  try {
    const todoItems: Item[] = [];
    const results = await db.getAllAsync(`SELECT rowid as id,value FROM ${tableName}`);
    for(const row of results){
        todoItems.push(row)
    }
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const saveTodoItems = async (db: SQLite.SQLiteDatabase, todoItems: Item[]) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
    todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');

  return db.execAsync(insertQuery);
};

export const deleteTodoItem = async (db: SQLite.SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.execAsync(deleteQuery);
};

export const deleteTable = async (db: SQLite.SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.execAsync(query);
};