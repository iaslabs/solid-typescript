interface BadUserOperations {
    getPublicResources(): string[];
    getPrivateResources(): string[];
    deleteResource(resource: string): boolean; 
}

class BadAnonymousUser implements BadUserOperations {
    getPublicResources(): string[] {
        return ['FrontEnd', 'UI'];
    }
    getPrivateResources(): string[] {
        return ['Does not have the privileges'];
    }
    deleteResource(resource: string): boolean {
        throw new Error('Does not have the privileges');
    } 

}

class BadAdminUser implements BadUserOperations {
    getPublicResources(): string[] {
        return ['FrontEnd', 'UI'];
    }
    getPrivateResources(): string[] {
        return ['Server', 'Database'];
    }
    deleteResource(resource: string): boolean {
        return true;
    }
}

const badAdministrator = new BadAdminUser();
const badAnonymousUser = new BadAnonymousUser();

console.log('---- Administrator operations ----');
console.log(badAdministrator.deleteResource('Table'));
console.log(badAdministrator.getPrivateResources());

console.log('---- Invited operations ----');
console.log(badAnonymousUser.getPublicResources());
console.log(badAnonymousUser.getPrivateResources());
console.log(badAnonymousUser.deleteResource('table'));
