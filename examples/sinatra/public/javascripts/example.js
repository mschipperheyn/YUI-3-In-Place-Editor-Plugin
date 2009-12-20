YUI({
    modules:{
      ipe: {
        name: 'ipe',
        type: 'js',
        // The full path to the IPE file...
        fullpath: 'http://localhost:4567/javascripts/in_place_edit.js',
        requires: ['plugin', 'io-base', 'io-form']
      }      
    },
    
    filter: 'debug'
  }).use("node", "ipe", function(Y){
    
  var edit_1 = Y.one("#edit_1");
    
  edit_1.plug(Y.Plugin.InPlaceEditor, {url:"http://localhost:4567/test"});
        
});