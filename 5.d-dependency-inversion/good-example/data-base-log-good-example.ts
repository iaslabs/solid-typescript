interface DataBase {
    save(log: string): boolean;
}

class SQLDatabase implements DataBase {
    save(log: string): boolean {
        console.log(`Saving log: ${log} in a relational database`);
        return true;
    }
}

class NoSQLDatabase implements DataBase {
    save(log: string): boolean {
        console.log(`Saving log: ${log} in a NoSQL database`);
        return true;
    }
} 

class LogService {
    dataBase: DataBase;

    constructor(dataBase: DataBase) {
        this.dataBase = dataBase;
    }
    saveLog(log: string): void {
        this.dataBase.save(log);
    }
}

const logServiceSQL = new LogService(new SQLDatabase());
logServiceSQL.saveLog('<user> deleted a resource');

const logServiceNoSQL = new LogService(new NoSQLDatabase()); 
logServiceNoSQL.saveLog('<user> deleted a resource');
