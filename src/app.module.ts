import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import {HttpModule} from './http.module'
// import { SMTPMailService } from './mail/smtp-mail.service';
import { PostMarkService } from './mail/postMark-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MailService,
      useClass: PostMarkService
    }
  ],
})
export class AppModule {}
