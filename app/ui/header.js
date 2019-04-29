const html = require('choo/html');
const Component = require('choo/component');
const Account = require('./account');
const assets = require('../../common/assets');
const { platform } = require('../utils');

class Header extends Component {
  constructor(name, state, emit) {
    super(name);
    this.state = state;
    this.emit = emit;
    this.account = state.cache(Account, 'account');
  }

  update() {
    this.account.render();
    return false;
  }

  createElement() {
    const title =
      platform() === 'android'
        ? html`
            <a class="header-logo"
              ><img
                style="height: 36px; width: 36px;"
                src="${assets.get('logo.svg')}"
            /></a>
          `
        : html`
            <a class="header-logo" href="/"
              ><img
                style="height: 36px; width: 36px;"
                src="${assets.get('logo.svg')}"
            /></a>
          `;
    return html`
      <header
        class="relative flex-none flex flex-row items-center justify-between w-full px-6 h-16 md:h-24 z-20 bg-transparent"
      >
        ${title} ${this.account.render()}
      </header>
    `;
  }
}

module.exports = Header;
