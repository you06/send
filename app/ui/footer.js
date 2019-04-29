const html = require('choo/html');
const Component = require('choo/component');
// const version = require('../../package.json').version;
// const { browserName } = require('../utils');

class Footer extends Component {
  constructor(name, state) {
    super(name);
    this.state = state;
  }

  update() {
    return false;
  }

  createElement() {
    // const translate = this.state.translate;
    // const browser = browserName();
    // const feedbackUrl = `https://qsurvey.mozilla.com/s3/Firefox-Send-Product-Feedback?ver=${version}&browser=${browser}`;
    return html`
      <footer></footer>
    `;
    // return html`
    //   <footer
    //     class="flex flex-col md:flex-row items-start w-full flex-none self-start p-6 font-medium text-xs text-grey-dark md:items-center justify-between"
    //   >
    //     <ul
    //       class="list-reset flex flex-col md:flex-row items-start md:items-center md:justify-end"
    //     >
    //       <li class="m-2">
    //         <a href="https://www.mozilla.org/about/legal/terms/services/#send">
    //           ${translate('footerLinkLegal')}
    //         </a>
    //       </li>
    //       <li class="m-2">
    //         <a href="/legal"> ${translate('footerLinkPrivacy')} </a>
    //       </li>
    //       <li class="m-2">
    //         <a href="https://www.mozilla.org/privacy/websites/#cookies">
    //           ${translate('footerLinkCookies')}
    //         </a>
    //       </li>
    //       <li class="m-2">
    //         <a href="https://github.com/mozilla/send">GitHub </a>
    //       </li>
    //       <li class="m-2">
    //         <a
    //           href="${feedbackUrl}"
    //           rel="noreferrer noopener"
    //           class="feedback-link"
    //           alt="Feedback"
    //           target="_blank"
    //         >
    //           ${translate('siteFeedback')}
    //         </a>
    //       </li>
    //     </ul>
    //   </footer>
    // `;
  }
}

module.exports = Footer;
