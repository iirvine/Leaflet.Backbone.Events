(function ( Backbone, _, L ) {
	L.OldEvents = L.Mixin.Events;

	var proxyTrigger = Backbone.Events.trigger;

	L.Mixin.Events = _.extend({}, Backbone.Events, {
		fireEvent: function(type, data) {
			var event = L.Util.extend({}, data, { type: type, target: this });
			this._proxyTrigger(type, event);
			return this;
		},

		trigger: function(type, data) {
			return this.fireEvent(type, data);
		},

		_proxyTrigger: proxyTrigger,

		hasEventListeners: function(type) {
			return !!this._events && _.contains(_.keys(this._events), type)
		}
	});

	L.Mixin.Events.fire = L.Mixin.Events.fireEvent;
	L.Mixin.Events.addEventListener = L.Mixin.Events.on;
	L.Mixin.Events.addOneTimeEventListener = L.Mixin.once;
	L.Mixin.Events.removeEventListener = L.Mixin.Events.off;
	L.Mixin.Events.clearAllEventListeners = L.Mixin.off;

	_.chain(L)
		.filter(function(obj) {
			return !_.isUndefined(obj.prototype) &&
			_.intersection(_.keys(L.OldEvents), _.keys(obj.prototype)).length === _.keys(L.OldEvents).length;
		 })
		.each(function(obj) {
			_.extend(obj.prototype, L.Mixin.Events);
		});
}( Backbone, _, L ));