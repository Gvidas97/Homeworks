import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlateAddComponent} from './plate-add/plate-add.component';
import { PlateGetComponent } from './plate-get/plate-get.component';
import { PlateEditComponent } from './plate-edit/plate-edit.component';
import { PlateRemoveComponent } from './plate-remove/plate-remove.component';
import { FormsModule } from '@angular/forms';
import { PlatesService } from './plates.service';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [
    AppComponent,
    PlateAddComponent,
    PlateGetComponent,
    PlateEditComponent,
    PlateRemoveComponent,
    PlateAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    JwPaginationModule
  ],
  providers: [PlatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
