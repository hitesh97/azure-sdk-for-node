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

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the WorkspaceCollection class.
 * @constructor
 * @member {string} [id] Resource id
 * 
 * @member {string} [name] Workspace collection name
 * 
 * @member {string} [type] Resource type
 * 
 * @member {string} [location] Azure location
 * 
 * @member {object} [tags]
 * 
 * @member {object} [properties] Properties
 * 
 */
function WorkspaceCollection() {
}

/**
 * Defines the metadata of WorkspaceCollection
 *
 * @returns {object} metadata of WorkspaceCollection
 *
 */
WorkspaceCollection.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'WorkspaceCollection',
    type: {
      name: 'Composite',
      className: 'WorkspaceCollection',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        sku: {
          required: false,
          isConstant: true,
          serializedName: 'sku',
          defaultValue: {},
          type: {
            name: 'Composite',
            className: 'AzureSku'
          }
        },
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Object'
          }
        }
      }
    }
  };
};

module.exports = WorkspaceCollection;