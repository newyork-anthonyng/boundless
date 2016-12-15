# Checkbox

__An accessible checkbox with indeterminate support.__

Checkbox is implemented as a "controlled input", meaning it is a direct representation of the model data passed inside. User interaction will bubble changes in the form of `onChecked` and `onUnchecked` that a controller view must intercept and apply against the data provider.

> The UIKit Team recommends reviewing the [Checkbox](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/OSXHIGuidelines/ControlsButtons.html#//apple_ref/doc/uid/20000957-CH48-SW9) section of the Apple Human Interface Guidelines for inspiration of design patterns and optimal usage of `Checkbox` in your project.

---

### Interactions

Type | Context | Expectation
---- | ------- | -----------
__Keyboard__ | `[Enter, Space]` | should toggle the `checked` state
__Mouse__ | `click` | should toggle the `checked` state, focus the checkbox

Events will not be proxied if the input is in "disabled" state, via the HTML5 `disabled` attribute.

---

### Props

- any [React-supported attribute](https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes); applied to the `.b-checkbox-wrapper` node

- __inputProps__ `Object`
    all input-specific props like `value`, `name`, etc should be passed here -- common ones are listed below

    - __inputProps.checked__ `Boolean`
      (default `false`) determines if the checkbox is rendered as checked/unchecked, see React ["controlled inputs"](https://facebook.github.io/react/docs/forms.html#controlled-components))

    - __inputProps.disabled__ `Boolean`
      (default `false`) prevents the `on{Checked,Unchecked}` events from firing when `true`

    - __inputProps.indeterminate__ `Boolean`
      enables or disables "mixed" checkbox state, read this [CSS-Tricks article](https://css-tricks.com/indeterminate-checkboxes/)  for more information and examples

    - __inputProps.name__ `String`
      rendered as the input control's form name

    - __inputProps.value__ `String`
      passed-through to the input node, like `name`

    - __inputProps.*__
      any [React-supported attribute](https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes); applied to the `.b-checkbox` node

- __label__ `Node`
  any React-renderable content, most commonly a simple string

- __labelProps__ `Object`
    - __labelProps.*__
      any [React-supported attribute](https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes); applied to the `.b-checkbox-label` node

- __onChecked__ `Function`
  called when the element becomes checked; backing data must be updated to persist the state change

- __onUnchecked__ `Function`
  called when the element becomes unchecked; backing data must be updated to persist the state change