'use babel';

import GibberwockyView from './gibberwocky-view';
import { CompositeDisposable } from 'atom';
import Gibber from '../gibber/gibber.js';
import codeMarkup from '../gibber/codeMarkup.js';

export default {

  gibberwockyView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.gibberwockyView = new GibberwockyView(state.gibberwockyViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.gibberwockyView.getElement(),
      visible: false
    });

    // Starting Gibber
    let useAudioContext = false,
        count = 0;

    Gibber.init();
    window.Gibber = Gibber;

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'gibberwocky:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.gibberwockyView.destroy();
  },

  serialize() {
    return {
      gibberwockyViewState: this.gibberwockyView.serialize()
    };
  },

  toggle() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      console.log(selection)
      this.sendToGibber(selection)
    }
    console.log('Gibberwocky was toggled!');
    return null;
  },
  markupFunction(selectedCode) {
    codeMarkup.process(
      selectedCode,
      selectedCode,
      null,
      window.Gibber.currentTrack
    )
  },
  sendToGibber(selectedCode) {
    try {
      this.markupFunction(selectedCode);
    } catch (e) {
      console.log( e )
    }
  }

};
