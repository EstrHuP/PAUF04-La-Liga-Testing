
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/teams"
  },
  {
    "renderMode": 2,
    "route": "/results"
  },
  {
    "renderMode": 2,
    "route": "/clasifications"
  },
  {
    "renderMode": 2,
    "route": "/players"
  },
  {
    "renderMode": 2,
    "route": "/referees"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/index_admin"
  },
  {
    "renderMode": 2,
    "route": "/index_arbitro"
  },
  {
    "renderMode": 2,
    "route": "/index_capitan"
  },
  {
    "renderMode": 2,
    "route": "/index_usuario"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5144, hash: 'f0ee7a85c24813b2684ed1670ac10de043866d36e313927e0333a83d1f5815c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: 'b4b9ff957e1b5ef335532d4052372561d28735dbe80a165563a7262b3451b2d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'referees/index.html': {size: 26303, hash: 'a5d1f0d3ebc412de4833997677fc501e90199f858fcd1b3dab31a000507c0d42', text: () => import('./assets-chunks/referees_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 29980, hash: '0d159455e71090409ba90b40f649deb30fb6832508dc0d2b0ed7c4002ff519aa', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'teams/index.html': {size: 30791, hash: '16491c1ba9b958fb757a3804ddb2b4ba0ba7a6b51ebc29b0fcbec63210bfc1fc', text: () => import('./assets-chunks/teams_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 37742, hash: 'a033fda81309190016d5a753f330d0583929baacaf620aca308b3a49b026941e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index_usuario/index.html': {size: 18938, hash: '714d81a94192d02beeb90ed7bfd23b2d4bda071ec4ac713a75abf2170e588047', text: () => import('./assets-chunks/index_usuario_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 26637, hash: 'ccc8ced114df6d2ef190f8c48df38c05464a2ca1ce037256ca9e3f9b5f27f50d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'clasifications/index.html': {size: 24633, hash: 'c29589ba2e95ca877e819c75e5b2f4f0e2fdf294112019a9c8fcf4e33e565c68', text: () => import('./assets-chunks/clasifications_index_html.mjs').then(m => m.default)},
    'index_capitan/index.html': {size: 18938, hash: 'c4df97179524eede650f34d18cbea62a169f8ef05a96211cab495bbebd2ac883', text: () => import('./assets-chunks/index_capitan_index_html.mjs').then(m => m.default)},
    'index_arbitro/index.html': {size: 18938, hash: '2ff2d939b162220fc1af39e026aa7d6481e0683631c25edd6d6a43325f0dc0f7', text: () => import('./assets-chunks/index_arbitro_index_html.mjs').then(m => m.default)},
    'results/index.html': {size: 23967, hash: 'd6f6d4bd8fc365fa60be2099942318702eb4341b8095e80d51882c830dcf48de', text: () => import('./assets-chunks/results_index_html.mjs').then(m => m.default)},
    'players/index.html': {size: 27222, hash: '0728d6f57e1fa347df3c8cff622ca8aa69ff4bd6108ffea621cba297bba34481', text: () => import('./assets-chunks/players_index_html.mjs').then(m => m.default)},
    'index_admin/index.html': {size: 32918, hash: '72f63832881e3034075adc265c2a82819af94051f2faf3c9176a58c42b862d1a', text: () => import('./assets-chunks/index_admin_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 24799, hash: '9caea267596c6a0f02889598ab9872209b4b7de43d64468262d63a58d7ae16ae', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-R54IPJCC.css': {size: 232364, hash: 'KRPdXEf7Lrg', text: () => import('./assets-chunks/styles-R54IPJCC_css.mjs').then(m => m.default)}
  },
};
