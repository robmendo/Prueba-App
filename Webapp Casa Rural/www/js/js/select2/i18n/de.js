window.$=window.$||{},function(){$&&$.fn&&$.fn.select2&&$.fn.select2.amd&&(define=$.fn.select2.amd.define,require=$.fn.select2.amd.require),define("select2/i18n/de",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum;return"Bitte "+t+" Zeichen weniger eingeben"},inputTooShort:function(e){var t=e.minimum-e.input.length;return"Bitte "+t+" Zeichen mehr eingeben"},loadingMore:function(){return"Lade mehr Ergebnisse…"},maximumSelected:function(){var e="Sie können nur "+args.maximum+" Eintr";return args.maximum===1?e+="ag":e+="äge",e+=" auswählen",e},noResults:function(){return"Keine Übereinstimmungen gefunden"},searching:function(){return"Suche…"}}}),require("jquery.select2"),$.fn.select2.amd={define:define,require:require}}();