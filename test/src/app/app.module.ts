import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagItemComponent } from './tags-list/tag-item/tag-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TagsListComponent,
    TagItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
