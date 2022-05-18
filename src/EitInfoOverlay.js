import { LitElement, html, css } from 'lit';
import { DileOverlayMixin } from '@dile/dile-overlay-mixin';
import { DileCloseDocumentClickMixin } from '@dile/dile-close-document-click-mixin';
import { DileCloseOnEscPressed } from '@dile/dile-close-on-esc-pressed-mixin';

const icon = html`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;

export class EitInfoOverlay extends DileOverlayMixin(DileCloseOnEscPressed(DileCloseDocumentClickMixin(LitElement))) {
    static styles = [
        css`
            :host {
                display: inline-block;
                position: relative;
            }
            span {
              display: flex;
              align-items: center;
              cursor: pointer;
            }
            #overlay {
              display: none;
              position: absolute;
              text-align: left;
              opacity: 0;
              color: var(--eit-info-overlay-color, #303030);
              background-color: var(--eit-info-overlay-background-color, #f5f5f5);
              padding: var(--eit-info-overlay-padding, 1rem);
              border: var(--eit-info-overlay-border, 1px solid #eee);
              box-shadow: var(--eit-info-overlay-box-shadow, 0 0 10px rgba(0, 0, 0, 0.2));
              width: 250px;
              transition: ease 0.5s;
              transition-property: transform, opacity;
              transform: translateY(-10px);
            }
            #overlay.opened {
              opacity: 1;
              transform: translateY(0);
            }

            svg {
              width: var(--eit-info-overlay-icon-size, 32px);
              height: var(--eit-info-overlay-icon-size, 32px);
            }
            path {
              fill: var(--eit-info-overlay-icon-color, #de0303);
              transition: fill 0.3s ease;
            }
            path[fill="none"] {
              fill: transparent;
            }
        `
    ];

    static get properties() {
      return {
        opened: { type: Boolean },
      };
    }

    constructor() {
        super();
        this.opened = false;
    }

    updated(changedProperties) {
      if (changedProperties.has('opened')) {
        if(this.opened) {
          this.open();
        } else {
          this.close();
        }
      }
    }

    render() {
        return html`
            <span id="trigger" @click=${this.toggle}>
                ${icon}
            </span>
            <div id="overlay" class="${this._overlayClass}">
                <slot name="info"></slot>
            </div>
        `;
    }
}
