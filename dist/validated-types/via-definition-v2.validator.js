"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
// generated by typescript-json-validator
var util_1 = require("util");
var Ajv = require("ajv");
exports.ajv = new Ajv({
    allErrors: true,
    coerceTypes: false,
    format: 'fast',
    nullable: true,
    unicode: true,
    uniqueItems: true,
    useDefaults: true
});
exports.ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
exports.VIADefinitionV2Schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    defaultProperties: [],
    definitions: {
        BacklightConfig: {
            enum: [
                1,
                10,
                11,
                12,
                128,
                129,
                13,
                130,
                131,
                14,
                15,
                16,
                17,
                18,
                19,
                2,
                20,
                21,
                23,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            type: 'number'
        },
        KeyColorType: {
            enum: ['accent', 'alpha', 'mod'],
            type: 'string'
        },
        LightingTypeDefinition: {
            enum: [
                'none',
                'qmk_backlight',
                'qmk_omnilight',
                'qmk_underglow',
                'wt_mono_backlight',
                'wt_rgb_backlight'
            ],
            type: 'string'
        },
        'Partial<VIALightingTypeDefinition>': {
            defaultProperties: [],
            properties: {
                effects: {
                    items: {
                        additionalItems: {
                            anyOf: [
                                {
                                    type: 'string'
                                },
                                {
                                    type: 'number'
                                }
                            ]
                        },
                        items: [
                            {
                                type: 'string'
                            },
                            {
                                type: 'number'
                            }
                        ],
                        minItems: 2,
                        type: 'array'
                    },
                    type: 'array'
                },
                keycodes: {
                    enum: ['none', 'qmk', 'wt'],
                    type: 'string'
                },
                supportedBacklightValues: {
                    items: {
                        $ref: '#/definitions/BacklightConfig'
                    },
                    type: 'array'
                },
                underglowEffects: {
                    items: {
                        additionalItems: {
                            anyOf: [
                                {
                                    type: 'string'
                                },
                                {
                                    type: 'number'
                                }
                            ]
                        },
                        items: [
                            {
                                type: 'string'
                            },
                            {
                                type: 'number'
                            }
                        ],
                        minItems: 2,
                        type: 'array'
                    },
                    type: 'array'
                }
            },
            type: 'object'
        },
        'Pick<Result,"h"|"w"|"x2"|"y2"|"h2"|"w2"|"x"|"y"|"r"|"rx"|"ry"|"row"|"col">': {
            defaultProperties: [],
            properties: {
                col: {
                    type: 'number'
                },
                h: {
                    type: 'number'
                },
                h2: {
                    type: 'number'
                },
                r: {
                    type: 'number'
                },
                row: {
                    type: 'number'
                },
                rx: {
                    type: 'number'
                },
                ry: {
                    type: 'number'
                },
                w: {
                    type: 'number'
                },
                w2: {
                    type: 'number'
                },
                x: {
                    type: 'number'
                },
                x2: {
                    type: 'number'
                },
                y: {
                    type: 'number'
                },
                y2: {
                    type: 'number'
                }
            },
            required: ['col', 'h', 'r', 'row', 'rx', 'ry', 'w', 'x', 'y'],
            type: 'object'
        }
    },
    properties: {
        customFeatures: {
            items: {
                enum: ['rotary-encoder'],
                type: 'string'
            },
            type: 'array'
        },
        customKeycodes: {
            items: {
                defaultProperties: [],
                properties: {
                    name: {
                        type: 'string'
                    },
                    shortName: {
                        type: 'string'
                    },
                    title: {
                        type: 'string'
                    }
                },
                required: ['name', 'title'],
                type: 'object'
            },
            type: 'array'
        },
        layouts: {
            defaultProperties: [],
            properties: {
                height: {
                    type: 'number'
                },
                keys: {
                    items: {
                        allOf: [
                            {
                                $ref: '#/definitions/Pick<Result,"h"|"w"|"x2"|"y2"|"h2"|"w2"|"x"|"y"|"r"|"rx"|"ry"|"row"|"col">'
                            },
                            {
                                defaultProperties: [],
                                properties: {
                                    color: {
                                        $ref: '#/definitions/KeyColorType'
                                    }
                                },
                                required: ['color'],
                                type: 'object'
                            }
                        ]
                    },
                    type: 'array'
                },
                labels: {
                    items: {
                        anyOf: [
                            {
                                items: {
                                    type: 'string'
                                },
                                type: 'array'
                            },
                            {
                                type: 'string'
                            }
                        ]
                    },
                    type: 'array'
                },
                optionKeys: {
                    additionalProperties: {
                        additionalProperties: {
                            items: {
                                allOf: [
                                    {
                                        $ref: '#/definitions/Pick<Result,"h"|"w"|"x2"|"y2"|"h2"|"w2"|"x"|"y"|"r"|"rx"|"ry"|"row"|"col">'
                                    },
                                    {
                                        defaultProperties: [],
                                        properties: {
                                            color: {
                                                $ref: '#/definitions/KeyColorType'
                                            }
                                        },
                                        required: ['color'],
                                        type: 'object'
                                    }
                                ]
                            },
                            type: 'array'
                        },
                        defaultProperties: [],
                        type: 'object'
                    },
                    defaultProperties: [],
                    type: 'object'
                },
                presets: {
                    additionalProperties: {
                        items: {
                            type: 'number'
                        },
                        type: 'array'
                    },
                    defaultProperties: [],
                    type: 'object'
                },
                width: {
                    type: 'number'
                }
            },
            required: ['height', 'keys', 'optionKeys', 'width'],
            type: 'object'
        },
        lighting: {
            anyOf: [
                {
                    allOf: [
                        {
                            $ref: '#/definitions/Partial<VIALightingTypeDefinition>'
                        },
                        {
                            defaultProperties: [],
                            properties: {
                                extends: {
                                    $ref: '#/definitions/LightingTypeDefinition'
                                }
                            },
                            required: ['extends'],
                            type: 'object'
                        }
                    ]
                },
                {
                    enum: [
                        'none',
                        'qmk_backlight',
                        'qmk_omnilight',
                        'qmk_underglow',
                        'wt_mono_backlight',
                        'wt_rgb_backlight'
                    ],
                    type: 'string'
                }
            ]
        },
        matrix: {
            defaultProperties: [],
            properties: {
                cols: {
                    type: 'number'
                },
                rows: {
                    type: 'number'
                }
            },
            required: ['cols', 'rows'],
            type: 'object'
        },
        name: {
            type: 'string'
        },
        vendorProductId: {
            type: 'number'
        }
    },
    required: ['layouts', 'lighting', 'matrix', 'name', 'vendorProductId'],
    type: 'object'
};
exports.isVIADefinitionV2 = exports.ajv.compile(exports.VIADefinitionV2Schema);
function validate(value) {
    if (exports.isVIADefinitionV2(value)) {
        return value;
    }
    else {
        throw new Error(exports.ajv.errorsText(exports.isVIADefinitionV2.errors.filter(function (e) { return e.keyword !== 'if'; }), { dataVar: 'VIADefinitionV2' }) +
            '\n\n' +
            util_1.inspect(value));
    }
}
exports.default = validate;
