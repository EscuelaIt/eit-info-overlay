import { html } from 'lit';
import '../eit-info-overlay.js';

export default {
  title: 'EitInfoOverlay',
  component: 'eit-info-overlay',
  argTypes: {
    title: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

function Template({ opened = false, horizontalAlign = 'under', slot }) {
  return html`
  <style>
    div{
      padding: 5rem;
    }
  </style>
  <div>
    <eit-info-overlay ?opened=${opened} horizontalAlign=${horizontalAlign}>
      ${slot}
    </eit-info-overlay>
  </div>
  `;
}

export const Regular = Template.bind({});
Regular.args = {
  slot: html`Probando esto es un slot`,
};

export const CustomOpened = Template.bind({});
CustomOpened.args = {
  slot: html`<b>Probando</b> esto es un slot pero un poco mayor`,
  opened: true,
};

export const CustomPosition = Template.bind({});
CustomPosition.args = {
  slot: html`<b>Probando</b> esto es un slot pero un poco mayor`,
  horizontalAlign: 'right',
};

