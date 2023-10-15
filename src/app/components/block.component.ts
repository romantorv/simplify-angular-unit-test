import { Component, Input } from '@angular/core';

@Component({
  selector: 'block',
  template: `
    <h2>Block Component</h2>
    <p>Hello {{ computedName }}.</p>
    <hr />
  `,
})
export class BlockComponent {
  @Input() name: string;
  get computedName(): string {
    return this.name.toUpperCase();
  }
}
