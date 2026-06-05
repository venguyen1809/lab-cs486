# Code Review Exercise

## Issue #1: Accessibility - close popup buttons need accessible names

The issue, why this is an issue, and the solution:

Two of the popup close buttons only contain a Font Awesome `x` icon. This is an accessibility issue because screen readers may not clearly know what the button does. A button should have an accessible name, especially when the visible content is only an icon. This is similar to the example from the debugging instructions, where the fix is to add `aria-label` and `title` to the button.

Initial code:

```html
<button class="close-popup-button">
  <i class="fa-solid fa-xmark"></i>
</button>
```

Updated code:

```html
<button
  class="close-popup-button"
  aria-label="close popup window"
  title="close popup window"
>
  <i class="fa-solid fa-xmark"></i>
</button>
```

This makes the button easier to understand for assistive technology and also gives users a tooltip when they hover over it.

## Issue #2: HTML semantics - submit and reset buttons are outside the form

The issue, why this is an issue, and the solution:

The submit and reset buttons are placed after the closing `</form>` tag. This is a semantic and functionality issue because the buttons are visually part of the form, but they are not actually inside the form element. The submit button should be inside the form so it submits the form normally, and the reset button should also be inside the form so it clears the form fields correctly.

Initial code:

```html
<form id="RequestInfo" class="content-container form">...</form>

<div class="form space-evenly-distributed-row-container form-buttons-container">
  <input class="form-button" type="submit" value="submit" />
  <input class="form-button" type="reset" value="reset" />
</div>
```

Updated code:

```html
<form id="RequestInfo" class="content-container form">
  ...

  <div class="space-evenly-distributed-row-container form-buttons-container">
    <input class="form-button" type="submit" value="submit" />
    <input class="form-button" type="reset" value="reset" />
  </div>
</form>
```

This fix keeps the buttons correctly connected to the form. It also makes the HTML structure clearer because all form controls are now inside the form they belong to.
