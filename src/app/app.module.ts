import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/word_paste.min.js";
import "froala-editor/js/plugins/table.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/line_breaker.min.js";
import "froala-editor/js/plugins/line_height.min.js";
import "froala-editor/js/plugins/lists.min.js";
import "froala-editor/js/plugins/paragraph_format.min.js";
import "froala-editor/js/plugins/quote.min.js";
import "froala-editor/js/plugins/special_characters.min.js";
import "froala-editor/js/plugins/font_family.min.js";

// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
