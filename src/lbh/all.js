import Map from './components/lbh-contact-block/contact-block'

function nodeListForEach (nodes, callback) {
  if (window.NodeList.prototype.forEach) {
    return nodes.forEach(callback)
  }
  for (var i = 0; i < nodes.length; i++) {
    callback.call(window, nodes[i], i, nodes)
  }
}

function initAll (options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== 'undefined' ? options : {}

  // Allow the user to initialise GOV.UK Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== 'undefined' ? options.scope : document

  var $maps = scope.querySelectorAll('[data-module="lbh-map"]')
  nodeListForEach($maps, function ($map) {
    new Map($map).init()
  })
}

export {
  initAll,
  Map
}