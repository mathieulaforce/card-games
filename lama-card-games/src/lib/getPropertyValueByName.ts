import { PgSelect } from "drizzle-orm/pg-core";

function getPropertyValueByName<T extends PgSelect>(obj: T, name: string): T[keyof T] | undefined {
    return name in obj ? obj[name as keyof T] : undefined;
  }
export default getPropertyValueByName;