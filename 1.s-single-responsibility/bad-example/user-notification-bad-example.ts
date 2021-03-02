class UserBadExample {
    name: string;
    phoneNumber: string;
    email: string;

    constructor(name: string, phoneNumber: string, email: string) {
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    sendEmailNotification(message: string, user: User): void {
        // Logic to send a message to an user
        console.log(`Message: ${message} -Sent to: ${user.email}`);
    }
}

const userBadExample = new UserBadExample('Pepito', '319281000', 'ias@ias.com.co');
userBadExample.sendEmailNotification('test message', userBadExample);
