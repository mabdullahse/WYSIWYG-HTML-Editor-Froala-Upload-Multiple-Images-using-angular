import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public editorContent: string = 'Im is Ready!';

  public froalaOptions: Object = {
    fontFamily: {
      "'Source Serif Pro', serif": 'Source Serif Pro',
      'Roboto,sans-serif': 'Roboto',
      'Oswald,sans-serif': 'Oswald',
      'Montserrat,sans-serif': 'Montserrat',
      "'Open Sans Condensed',sans-serif": 'Open Sans Condensed',
    },
    fontFamilyDefaultSelection: 'Source Serif Pro',
    fontFamilySelection: true,

    events: {
      'image.beforeUpload': function (files: any) {
        let editor: any = this;
        if (files.length) {
          let currentImage = editor.image.get();
          var reader = new FileReader();
          reader.onload = function (e: any) {
            var result = e.target.result;
            editor.image.insert(result, null, null, currentImage);
          };
          reader.readAsDataURL(files[0]);
        }
        editor.popups.hideAll();
        return false;
      },
      'image.error': function (error: any) {},
    },
  };

  myForm: FormGroup;
  ngOnInit() {
    this.myForm = new FormGroup({
      content: new FormControl('Im is Ready!'),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value.content);
    this.editorContent = form.value.content;
  }
}
