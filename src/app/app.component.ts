import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomSentence = lorem.sentence();
  enteredText = '';
  isSuccessful = false;


  onTextInput = (eventTarget: EventTarget | null) => {
    const value: string = (eventTarget as HTMLInputElement).value;
    console.log(value);
    this.enteredText = value;

    if (this.enteredText === this.randomSentence) {
      this.isSuccessful = true;
    }

  }

  compare = (randomChar: string, enteredChar: string): String => {
    if (!enteredChar) {
      return 'pending';
    }



    return (randomChar === enteredChar) ? 'correct' : 'incorrect';
  }

}
