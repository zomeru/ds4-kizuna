import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kizuna-button',
  styleUrl: 'kizuna-button.css',
  shadow: true,
})
export class KizunaButton {
  @Prop() text: string;

  @Prop() appearance: string;

  @Prop() block: boolean;

  render() {
    return <button class={`btn ${this.appearance} ${this.block && 'block'}`}>{this.text}</button>;
  }
}
