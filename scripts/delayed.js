// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './aem.js';

const LAUNCH_SCRIPT = '//assets.adobedtm.com/launch-EN2b18572e35f846d5bd3e0f28964ee7c7.min.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

async function loadOneTrustScripts() {
  const scripts = [
    {
      src: 'https://cdn-ukwest.onetrust.com/consent/ef4f40b0-973b-4590-b721-17004da55359/OtAutoBlock.js',
      type: 'text/javascript',
    },
    {
      src: 'https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js',
      type: 'text/javascript',
      charset: 'UTF-8',
      'data-domain-script': 'ef4f40b0-973b-4590-b721-17004da55359',
    },
    {
      content: 'function OptanonWrapper() { }',
      type: 'text/javascript',
    },
  ];

  await Promise.all(scripts.map((script) => loadScript(script.src, script)));
}

loadOneTrustScripts();
loadScript('/scripts/vendor/jquery.min.js', { type: 'text/javascript', charset: 'UTF-8' })
  .then(() => {
    // these scripts depend on jquery:
    loadScript(LAUNCH_SCRIPT, { type: 'text/javascript', charset: 'UTF-8' });
  });
