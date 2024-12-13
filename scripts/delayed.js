// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './aem.js';

const LAUNCH_DEV = 'https://assets.adobedtm.com/74e18f4e72f4/2ec9c71af7d1/launch-ENccccf3b3ddb841529fa9b7c57d1e1dd2-development.min.js';
const LAUNCH_STAGE = 'https://assets.adobedtm.com/74e18f4e72f4/2ec9c71af7d1/launch-ENa73bd6d165a54ce9b409f20c906cf4d3-staging.min.js';
const LAUNCH_PROD = 'https://assets.adobedtm.com/launch-EN2b18572e35f846d5bd3e0f28964ee7c7.min.js';

/*
  * Returns the environment type based on the hostname.
*/
function getEnvType(hostname = window.location.hostname) {
  const fqdnToEnvType = {
    'www.infosys.com': 'prod',
    'infosys.com': 'prod',
    'main--infosys--aemsites.hlx.page': 'preview',
    'main--infosyseds--infosys-is.hlx.page': 'preview',
    'main--infosys--aemsites.hlx.live': 'live',
    'main--infosyseds--infosys-is.hlx.live': 'live',
  };
  return fqdnToEnvType[hostname] || 'dev';
}

function loadAdobeLaunch() {
  const adobeLaunchSrc = {
    dev: LAUNCH_DEV,
    preview: LAUNCH_STAGE,
    live: LAUNCH_STAGE,
    prod: LAUNCH_PROD,
  };
  loadScript(adobeLaunchSrc[getEnvType()], { async: true });
}

// Core Web Vitals RUM collection
sampleRUM('cwv');

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

const loadDemandBase = async () => {
  await loadScript('https://scripts.demandbase.com/HviY9wSc.min.js', { id: 'demandbase_js_lib', type: 'text/javascript' });
};

loadOneTrustScripts();
loadDemandBase();
loadScript('/scripts/vendor/jquery.min.js', { type: 'text/javascript', charset: 'UTF-8' })
  .then(() => {
    // these scripts depend on jquery:
    loadAdobeLaunch();
  });
