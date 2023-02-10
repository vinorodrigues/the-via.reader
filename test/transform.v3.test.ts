import fs from 'fs';
import {test, expect} from 'vitest';
import {
  getVendorProductId,
  keyboardDefinitionV3ToVIADefinitionV3,
} from '../src';
import validateViaDefinitionV3 from '../src/validated-types/via-definition-v3.validator';

test('transform KeyboardDefinition to VIADefinition', async () => {
  const validDefinitionJson = await fs.promises.readFile(
    './test/data/v3_valid_definition.json',
    'utf-8'
  );
  const validDefinition = JSON.parse(validDefinitionJson);
  const viaDefinition = keyboardDefinitionV3ToVIADefinitionV3(validDefinition);

  expect(() => validateViaDefinitionV3(viaDefinition)).not.toThrow();
});

test('invalid label map fails', async () => {
  const invalidLabelMapJson = await fs.promises.readFile(
    './test/data/v3_invalid_label_map.json',
    'utf-8'
  );
  const invalidLabelMap = JSON.parse(invalidLabelMapJson);

  expect(() =>
    keyboardDefinitionV3ToVIADefinitionV3(invalidLabelMap)
  ).toThrowErrorMatchingInlineSnapshot(
    '"\'Row,col\' pairs must be placed in the top-left legend in the KLE keymap provided in the definition."'
  );
});

test('can transform simple encoder', async () => {
  const simpleEncoderJson = await fs.promises.readFile(
    './test/data/v3_has_simple_encoder.json',
    'utf-8'
  );
  const simpleEncoder = JSON.parse(simpleEncoderJson);

  expect(() =>
    keyboardDefinitionV3ToVIADefinitionV3(simpleEncoder)
  ).not.toThrow();
});

test(`Vendor/Product ID of '0xFEED' should fail`, () => {
  expect(() => getVendorProductId({productId: '0xFEED', vendorId: '0x1234'}))
    .toThrowErrorMatchingInlineSnapshot(`
    "'0xFEED' is not a valid vendorId."
  `);
  expect(() => getVendorProductId({productId: '0xfeed', vendorId: '0x1234'}))
    .toThrowErrorMatchingInlineSnapshot(`
  "'0xFEED' is not a valid vendorId."
`);
});
