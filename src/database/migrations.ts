import { CreateSchemas1705054921446 } from "./migrations/1705054921446-CreateSchemas";
import { CreateTables1705055227732 } from "./migrations/1705055227732-CreateTables";
import { FillRoleTable1705056035234 } from "./migrations/1705056035234-FillRoleTable";



export const migrations = [
    CreateSchemas1705054921446,
    CreateTables1705055227732,
    FillRoleTable1705056035234
];