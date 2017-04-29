/////////////////////////////////////////////////////////////////////
// Viewing.Extension.ContextMenu
// by Philippe Leefsma, September 2016
//
/////////////////////////////////////////////////////////////////////

export default class ContextMenuHandler extends
  Autodesk.Viewing.Extensions.ViewerObjectContextMenu {

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  constructor (viewer, options = {}) {

    super (viewer, options)

    this.options = options
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  buildMenu (event, status) {

    const menu = super.buildMenu(event, status)

    return this.options.buildMenu ?
      this.options.buildMenu(menu) :
      menu
  }
}
