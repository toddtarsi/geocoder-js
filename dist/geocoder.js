if("undefined"==typeof GeocoderJS&&"function"==typeof require)var GeocoderJS=require("./GeocoderJS.js");if(function(a){"use strict";var b={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[]}};a.GeoJSONDumper=function(){return{dump:function(a){var c=b;return c.geometry.coordinates=[a.getLongitude(),a.getLatitude()],c}}}}(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require)var GeocoderJS=require("./GeocoderJS.js");!function(a){"use strict";a.Geocoded=function(){},a.Geocoded.prototype={getCoordinates:function(){return[this.latitude,this.longitude]},getLatitude:function(){return this.latitude},getLongitude:function(){return this.longitude},getBounds:function(){},getStreetNumber:function(){return this.streetNumber},getStreetName:function(){return this.streetName},getCity:function(){return this.city},getZipcode:function(){return this.postal_code},getCityDistrict:function(){},getCounty:function(){},getCountyCode:function(){},getRegion:function(){return this.region}}}(GeocoderJS);var container="object"==typeof window?window:"object"==typeof exports?exports:{};if(function(a){"use strict";var b={};b.version="0.0.0",b.createGeocoder=function(a){var c=new b.ProviderFactory;return c.createProvider(a)},a.GeocoderJS=b}(container),"function"==typeof define&&define.amd&&define(GeocoderJS),"undefined"==typeof GeocoderJS&&"function"==typeof require)var GeocoderJS=require("../GeocoderJS.js");!function(a){"use strict";Geocoder.ProviderFactory=function(){},Geocoder.ProviderFactory.prototype.createProvider=function(b){"string"==typeof b&&(b={provider:b}),console.log(b);var c;switch(b.provider){case"google":c=new a.GoogleAPIProvider;break;case"mapquest":c=new a.MapQuestProvider}return c}}(GeocoderJS);