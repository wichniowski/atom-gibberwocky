# atom-gibberwocky

Gibberwocky Live Coding Plugin for Atom
Gibberwocky is developed by @charlieroberts

This is the first working version and will be heavily improved.

## Installation

- Install Gibberwocky [gibberwocky](https://github.com/charlieroberts/gibberwocky)
- Clone or download this plugin and install it by changing into the package directory and running "apm link"
- Restart Atom and add the custom keymap to your keymappings: Atom -> Keymap
- Hit "alt-shift-enter" or click "Packages -> gibberwocky -> Toggle" to start the session

## How to use
- Submit every line of code by selecting it and hitting alt-shift-enter
- It's handy to keep Ableton in sight since there is no visual representation of the lom right now
- Keep in mind the transport needs to be running for sequences to play

## Custom Keymappings

```
'atom-workspace':
  'alt-shift-enter': "gibberwocky:toggle"
```
