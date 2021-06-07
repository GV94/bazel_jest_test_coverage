/// <amd-module name="coverage_test/ts_library/sample.spec" />

import {add} from "./sample";

describe('add', () => {
    it('should add two numbers together', () => {
        expect(add(4, 5)).toEqual(9);
    })
});