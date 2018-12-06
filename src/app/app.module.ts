import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PopoverPageModule} from './popover/popover.module';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {MenupopverPageModule} from './menu/components/menupopver/menupopver.module';
import { SQLite} from '@ionic-native/sqlite/ngx';
import {SettlementpopoverPageModule} from './menu/components/settlementpopover/settlementpopover.module';
import { TablesComponent } from './components/tables/tables.component';
@NgModule({
    declarations: [AppComponent,

    ],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        PopoverPageModule,
        SettlementpopoverPageModule,
        MenupopverPageModule],
    providers: [
        StatusBar,
        SQLite,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        NativeStorage,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
