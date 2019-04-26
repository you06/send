const html = require('choo/html');
const version = require('../../package.json').version;
const { browserName } = require('../utils');

module.exports = function() {
  return function(state, emit, close) {
    const feedbackUrl = `https://qsurvey.mozilla.com/s3/Firefox-Send-Product-Feedback?ver=${version}&browser=${browserName()}`;
    return html`
      <send-survey-dialog
        class="flex flex-col items-center text-center p-4 max-w-sm m-auto"
      >
        <h1 class="font-bold my-4">
          Tell us what you think.
        </h1>
        <p class="font-normal leading-normal text-grey-darkest mb-4">
          Love Firefox Send? Take a quick survey to let us know how we can make
          it better.
        </p>
        <a
          class="btn rounded-lg w-full flex-no-shrink focus:outline"
          onclick="${() => emit('closeModal')}"
          title="Give your feedback"
          href="${feedbackUrl}"
          target="_blank"
        >
          Give your feedback
        </a>
        <button
          class="text-blue-dark hover:text-blue-darker focus:text-blue-darker my-4 font-medium cursor-pointer focus:outline"
          onclick="${close}"
          title="Skip"
        >
          Skip
        </button>
      </send-survey-dialog>
    `;
  };
};
