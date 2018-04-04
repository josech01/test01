/**
 * HelloworldController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `HelloworldController.getHelloWorld()`
   */
  getHelloWorld: function (req, res) {
    return res.json({
    todo: 'getHelloWorld() is not implemented yet!'
    });
  }

};

