/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the KeyAttributes class.
 * @constructor
 * The attributes of a key managed by the KeyVault service
 *
 */
function KeyAttributes() {
  KeyAttributes['super_'].call(this);
}

util.inherits(KeyAttributes, models['Attributes']);

/**
 * Defines the metadata of KeyAttributes
 *
 * @returns {object} metadata of KeyAttributes
 *
 */
KeyAttributes.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'KeyAttributes',
    type: {
      name: 'Composite',
      className: 'KeyAttributes',
      modelProperties: {
        enabled: {
          required: false,
          serializedName: 'enabled',
          type: {
            name: 'Boolean'
          }
        },
        notBefore: {
          required: false,
          serializedName: 'nbf',
          type: {
            name: 'UnixTime'
          }
        },
        expires: {
          required: false,
          serializedName: 'exp',
          type: {
            name: 'UnixTime'
          }
        },
        created: {
          required: false,
          readOnly: true,
          serializedName: 'created',
          type: {
            name: 'UnixTime'
          }
        },
        updated: {
          required: false,
          readOnly: true,
          serializedName: 'updated',
          type: {
            name: 'UnixTime'
          }
        }
      }
    }
  };
};

module.exports = KeyAttributes;
