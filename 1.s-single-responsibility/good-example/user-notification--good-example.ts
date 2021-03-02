interface User {
    name: string;
    phoneNumber: string;
    email: string;
}

class NotificationService {
    sendEmailNotification(message: string, user: User): void {
        //logic to send an email notification
        console.log(`Message: ${message} -Sent to: ${user.email}`);
    }

    sendSMSNotification(message: string, user: User): void {
        //Logic to send a SMS notification
        console.log(`Message: ${message} -Sent to: ${user.phoneNumber}`);
    }
}

const user: User = {name: 'Pepito', phoneNumber: '33192810000', email: 'ias@ias.com.co'};
const message = 'test message';
const notificationService = new NotificationService();
notificationService.sendEmailNotification(message, user);
notificationService.sendSMSNotification(message, user);
