import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FeedsPage } from '../pages/feeds/feeds';
import { SettingsPage } from '../pages/settings/settings';
import { FeedAudioPage } from '../pages/feed-audio/feed-audio';
import { FeedTextoPage } from '../pages/feed-texto/feed-texto';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AuthService } from '../providers/auth-service';
import { AudioData } from '../providers/audio-data';
import { TextoData } from '../providers/texto-data';
import { RadioPlayer } from '../providers/radio';

@NgModule({
  declarations: [
    MyApp,
    FeedsPage,
    SettingsPage,
    FeedAudioPage,
    FeedTextoPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedsPage,
    SettingsPage,
    FeedAudioPage,
    FeedTextoPage,
    LoginPage,
    RegisterPage
  ],
  providers: [RadioPlayer, AudioData, TextoData, AuthService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
