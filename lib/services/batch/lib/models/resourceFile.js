/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ResourceFile class.
 * @constructor
 * A file to be downloaded from Azure blob storage to a compute node.
 * @member {string} [blobSource] Gets or sets the URL of a blob in Azure
 * storage. The Batch service downloads the blob to the specified file path.
 * The URL must be readable using anonymous access.
 * 
 * @member {string} [filePath] Gets or sets the location on the compute node
 * to which the file should be downloaded.
 * 
 * @member {string} [fileMode] Gets or sets the file mode attribute in octal
 * format. This property will be ignored if it is specified for a
 * resourceFile which will be downloaded to a Windows compute node.
 * 
 */
function ResourceFile() {
}

/**
 * Defines the metadata of ResourceFile
 *
 * @returns {object} metadata of ResourceFile
 *
 */
ResourceFile.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResourceFile',
    type: {
      name: 'Composite',
      className: 'ResourceFile',
      modelProperties: {
        blobSource: {
          required: false,
          serializedName: 'blobSource',
          type: {
            name: 'String'
          }
        },
        filePath: {
          required: false,
          serializedName: 'filePath',
          type: {
            name: 'String'
          }
        },
        fileMode: {
          required: false,
          serializedName: 'fileMode',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ResourceFile;