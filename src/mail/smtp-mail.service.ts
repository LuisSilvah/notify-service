import { Injectable } from '@nestjs/common/decorators';
import {MailService} from './mail.service'

@Injectable()
export class SMTPMailService implements MailService {
    sendEmail(): string {
        return 'STMP Mail';
    }
}