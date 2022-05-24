# \<eit-info-overlay>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

[Go to demo!](https://escuelait.github.io/eit-info-overlay/)

## Installation

```bash
npm i eit-info-overlay
```

## Usage

Import the component

```javascript
import 'eit-info-overlay/eit-info-overlay.js';
```

Use the component

```html
<eit-info-overlay>
  Any info message. (this is the overlay content)
</eit-info-overlay>
```

## Properties

- **opened**: Set the open or close state of the overlay.
- **horizontalAlign**: String property to set the horizontal position of the menu. Valid values are "left", "right" or "center". Default to "left".
- **verticalAlign**: String property to set the vertical position of the menu. Valid values are "bottom", "center" or "top". Default to "bottom".
- **moveTop**: Number of pixels to modify the default vertical position of the overlay. Accepts positive (move down) an negative (move up) values. Default 0.
- **moveLeft**: Number of pixels to modify the default horizontal position of the overlay. Accepts positive (move right) an negative (move left) values. Default 0.

## Methods

- **open()**: Use it to open the menu overlay box
- **close()**: Use it to close the menu overlay box
- **toggle()**: Toggles the menu-overlay box

## Custom events

- **overlay-opened**: dispatched when the overlay opens.
- **overlay-closed**: dispatched when the overlay closes.

### CSS Custom Properties

You can customize it using CSS Custom Properties.

Custom property | Description | Default
----------------|-------------|---------
--eit-info-overlay-color | Overlay text color | #303030
--eit-info-overlay-background-color | Overlay background color | #f5f5f5