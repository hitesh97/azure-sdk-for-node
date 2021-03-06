/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the RedisRegenerateKeyParameters class.
 * @constructor
 * Specifies which redis access keys to reset.
 *
 * @member {string} keyType Which redis access key to reset. Possible values
 * include: 'Primary', 'Secondary'
 * 
 */
function RedisRegenerateKeyParameters() {
}

/**
 * Defines the metadata of RedisRegenerateKeyParameters
 *
 * @returns {object} metadata of RedisRegenerateKeyParameters
 *
 */
RedisRegenerateKeyParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'RedisRegenerateKeyParameters',
    type: {
      name: 'Composite',
      className: 'RedisRegenerateKeyParameters',
      modelProperties: {
        keyType: {
          required: true,
          serializedName: 'keyType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Primary', 'Secondary' ]
          }
        }
      }
    }
  };
};

module.exports = RedisRegenerateKeyParameters;
