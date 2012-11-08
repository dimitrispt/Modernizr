require([
  // Stuff we always need
  'ModernizrProto', 'Modernizr', 'testRunner', 'setClasses',
  // Extras
  'addTest', 'html5printshiv',
  // Tests, yay.
  'test/a/download',
  'test/audio/audiodata',
  'test/audio/webaudio',
  'test/battery/lowbattery',
  'test/canvas/todataurl',
  'test/css/animations',
  'test/css/backgroundposition-shorthand',
  'test/css/backgroundposition-xy',
  'test/css/backgroundrepeat',
  'test/css/backgroundsize',
  'test/css/backgroundsizecover',
  'test/css/borderimage',
  'test/css/borderradius',
  'test/css/boxshadow',
  'test/css/boxsizing',
  'test/css/calc',
  'test/css/columns',
  'test/css/cubicbezierrange',
  'test/css/displayrunin',
  'test/css/displaytable',
  'test/css/filters',
  'test/css/flexbox',
  'test/css/flexboxlegacy',
  'test/css/fontface',
  'test/css/generatedcontent',
  'test/css/gradients',
  'test/css/hsla',
  'test/css/hyphens',
  'test/css/lastchild',
  'test/css/mask',
  'test/css/mediaqueries',
  'test/css/multiplebgs',
  'test/css/objectfit',
  'test/css/opacity',
  'test/css/overflow-scrolling',
  'test/css/pointerevents',
  'test/css/positionsticky',
  'test/css/reflections',
  'test/css/regions',
  'test/css/remunit',
  'test/css/resize',
  'test/css/rgba',
  'test/css/scrollbars',
  'test/css/subpixelfont',
  'test/css/supports',
  'test/css/textshadow',
  'test/css/transforms',
  'test/css/transforms3d',
  'test/css/transitions',
  'test/css/userselect',
  'test/css/vhunit',
  'test/css/vmaxunit',
  'test/css/vminunit',
  'test/css/vwunit',
  'test/dom/classlist',
  'test/dom/createElement-attrs',
  'test/dom/dataset',
  'test/dom/microdata',
  'test/elem/datalist',
  'test/elem/details',
  'test/elem/output',
  'test/elem/progress-meter',
  'test/elem/ruby',
  'test/elem/time',
  'test/elem/track',
  'test/es5/strictmode',
  'test/event/deviceorientation-motion',
  'test/file/api',
  'test/file/filesystem',
  'test/forms/fileinput',
  'test/forms/formattribute',
  'test/forms/inputnumber-l10n',
  'test/forms/placeholder',
  'test/forms/speechinput',
  'test/forms/validation',
  'test/iframe/sandbox',
  'test/iframe/seamless',
  'test/iframe/srcdoc',
  'test/img/apng',
  'test/img/webp-lossless',
  'test/img/webp',
  'test/network/connection',
  'test/network/eventsource',
  'test/network/xhr2',
  'test/script/async',
  'test/script/defer',
  'test/storage/localstorage',
  'test/storage/sessionstorage',
  'test/storage/websqldatabase',
  'test/style/scoped',
  'test/svg/clippaths',
  'test/svg/filters',
  'test/svg/inline',
  'test/svg/smil',
  'test/url/data-uri',
  'test/webgl/extensions',
  'test/websockets/binary',
  'test/window/framed',
  'test/workers/blobworkers',
  'test/workers/dataworkers',
  'test/workers/webworkers',
  'test/applicationcache',
  'test/audio',
  'test/battery',
  'test/blob',
  'test/canvas',
  'test/canvastext',
  'test/contenteditable',
  'test/contentsecuritypolicy',
  'test/contextmenu',
  'test/cookies',
  'test/cors',
  'test/custom-protocol-handler',
  'test/dart',
  'test/dataview-api',
  'test/draganddrop',
  'test/emoji',
  'test/exif-orientation',
  'test/fullscreen-api',
  'test/gamepad',
  'test/getusermedia',
  'test/hashchange',
  'test/history',
  'test/ie8compat',
  'test/indexedDB',
  'test/input',
  'test/inputtypes',
  'test/json',
  'test/lists-reversed',
  'test/mathml',
  'test/notification',
  'test/pagevisibility-api',
  'test/performance',
  'test/pointerlock-api',
  'test/postmessage',
  'test/quota-management-api',
  'test/requestanimationframe',
  'test/svg',
  'test/touch',
  'test/unicode',
  'test/userdata',
  'test/vibration',
  'test/video',
  'test/web-intents',
  'test/webgl',
  'test/websockets'
], function( ModernizrProto, Modernizr, testRunner, setClasses, addTest ) {
  // Run each test
  testRunner();

  // Remove the 'no-js' class if it exists
  setClasses();

  // Ovveride the addTest class with one that works
  // after the tests have run and kill the async
  // test function, since it doesn't make sense anymore
  ModernizrProto.addTest = addTest;
  delete ModernizrProto.addAsyncTest;

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;
});