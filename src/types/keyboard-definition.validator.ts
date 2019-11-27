/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv = require('ajv');
import KeyboardDefinition from './keyboard-definition';
export const ajv = new Ajv({"allErrors":true,"coerceTypes":false,"format":"fast","nullable":true,"unicode":true,"uniqueItems":true,"useDefaults":true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export {KeyboardDefinition};
export const KeyboardDefinitionSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "defaultProperties": [
  ],
  "definitions": {
    "LightingTypeDefinition": {
      "enum": [
        "none",
        "qmk_backlight",
        "wt_mono_backlight",
        "wt_rgb_backlight"
      ],
      "type": "string"
    },
    "Partial<{c:string;t:string;x:number;y:number;w:number;a:number;}>": {
      "defaultProperties": [
      ],
      "properties": {
        "a": {
          "type": "number"
        },
        "c": {
          "type": "string"
        },
        "t": {
          "type": "string"
        },
        "w": {
          "type": "number"
        },
        "x": {
          "type": "number"
        },
        "y": {
          "type": "number"
        }
      },
      "type": "object"
    }
  },
  "properties": {
    "layouts": {
      "additionalProperties": {
        "items": {
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/Partial<{c:string;t:string;x:number;y:number;w:number;a:number;}>"
              },
              {
                "type": "string"
              }
            ]
          },
          "type": "array"
        },
        "type": "array"
      },
      "defaultProperties": [
      ],
      "type": "object"
    },
    "lighting": {
      "$ref": "#/definitions/LightingTypeDefinition"
    },
    "matrix": {
      "defaultProperties": [
      ],
      "properties": {
        "cols": {
          "type": "number"
        },
        "rows": {
          "type": "number"
        }
      },
      "required": [
        "cols",
        "rows"
      ],
      "type": "object"
    },
    "name": {
      "type": "string"
    },
    "productId": {
      "type": "string"
    },
    "vendorId": {
      "type": "string"
    }
  },
  "required": [
    "layouts",
    "lighting",
    "matrix",
    "name",
    "productId",
    "vendorId"
  ],
  "type": "object"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, 'errors'>
export const isKeyboardDefinition = ajv.compile(KeyboardDefinitionSchema) as ValidateFunction<KeyboardDefinition>;
export default function validate(value: unknown): KeyboardDefinition {
  if (isKeyboardDefinition(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(isKeyboardDefinition.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: 'KeyboardDefinition'}) +
      '\n\n' +
      inspect(value),
    );
  }
}