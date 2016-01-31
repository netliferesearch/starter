'use strict';

var Accordion = require('c2-accordion');
// This wouldn't be necessary since all these options are the defaults
var options = {
    item: '.item',
    target: '.target',
    control: '.control',
    panel: '.panel',
    allowMultiple: true,
    attribute: 'data-status',
    expanded: 'expanded',
    contracted: 'contracted',
    prefix: 'Accordion-',
    transition: 'height .3s',
    transitionSupport: true,
    setFocus: 'none'
    // options: none, item, panel, target, control, first
};

new Accordion('.Accordion', options);
