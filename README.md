Leaflet.Backbone.Events
=======================

Like [Leaflet](http://leafletjs.com/)? Like [Backbone](http://backbonejs.org/)? Tired of being thrown off by their similar yet just-different-enough-to-be-irritating event implementations? Ever noticed that both modules have pretty much the *exact same method signatures*?

L.Backbone.Events swaps Leaflet's native event module for Backbone's, letting you keep everything on the same page.

**Why**

Mostly because I wanted to see if it would work. It does! 

It comes with other benefits beyond that, chief among them not having to switch contexts from one implementation to the other, and makes integration a little less of a hassle - now every Leaflet object can be a standard Backbone event emitter, and models, collections, and views can talk to maps, markers, and layers in the same eventing language.

You also get access to some of Backbone's nicer eventing features, like [#listenTo](http://backbonejs.org/#Events-listenTo) and [#stopListening](http://backbonejs.org/#Events-stopListening). 

Finally, Backbone's events are supposedly [quite speedy](http://jsperf.com/leaflet-backbone-events), so perhaps if you're slinging thousands upon thousands of events you'll see some gain there.

**How**

Grab Backbone and underscore - then just load L.Backbone.Events.js after Leaflet (but *before* any Leaflet plugins) and Bob's your uncle. 

**Caveats**

This might be a terrible idea. It was written mainly to scratch my own itch so it's fairly experimental. Right now the APIs are essentially symmetrical, and currently all of Leaflet's specs pass with Backbone's events module in place, but over time the implementations may drift apart

**Dependencies**

Backbone.js (obviously)

underscore.js
