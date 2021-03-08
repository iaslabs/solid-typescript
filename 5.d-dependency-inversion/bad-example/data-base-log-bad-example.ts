class BadSQLDatabase {
    save(log: string): string {
        // Logic to save a log
        return `Saving a log: ${log}`;
    }
}
class BadLogsService {
    saveLog(log: string): void {
        const dataBase = new BadSQLDatabase();
        console.log(dataBase.save(log));
    }
}

const badLogsService = new BadLogsService();
badLogsService.saveLog('<user> deleted a resource');
