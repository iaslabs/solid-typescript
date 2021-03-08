interface AuditorOperations {
    getResourceBill(): number;
    payResourceBill(): boolean;
}

interface PublicOperations {
    getPublicResources(): string[];
}

interface AdminOperations {
    createResource(): boolean;
    deleteResource(): boolean;
}

class AuditorUser implements AuditorOperations {
    getResourceBill(): number {
        return 124443;
    }
    payResourceBill(): boolean {
        return true;
    }
}

class AdminUser implements AdminOperations, PublicOperations {
    getPublicResources(): string[] {
        return ['FrontEnd', 'UI'];
    }
    createResource(): boolean {
        return true;
    }
    deleteResource(): boolean {
        return true;
    }
}

class AnonymousUser implements PublicOperations {
    getPublicResources(): string[] {
        return ['FrontEnd', 'UI'];
    }
}

const adminUser = new AdminUser();
const auditorUser = new AuditorUser();
const anonymousUser = new AnonymousUser();

console.log('---- Admin operations ----');
console.log(adminUser.getPublicResources());
console.log(adminUser.deleteResource());

console.log('---- Auditor operations ----');
console.log(auditorUser.getResourceBill());

console.log('---- Public operations ----');
console.log(anonymousUser.getPublicResources());
