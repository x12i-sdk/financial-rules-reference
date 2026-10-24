import assert from 'node:assert/strict';
import { manifest, supportStatement } from '@x12i/financial-rules-reference';

const support = supportStatement();
assert.equal(manifest.validatedLocalFiling, false);
assert.equal(support.validatedLocalFiling, false);
assert.equal(manifest.calendar.yearStartMonth, 1);
console.log({ package: manifest.packageId, capabilities: manifest.supportedCapabilities, calendar: manifest.calendar, support });
