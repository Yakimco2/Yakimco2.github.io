describe('String', function () {

    it('spec symbols / " & other', function () {
        expect('\'').toBe("'");
        expect('\"').toBe('"');
        expect('\a').toBe('a');
    });

    it('String length', function () {
        var string = 'String';
        expect(string.length).toBe(6);
    });

    it('CharAt or []', function () {
        var string = 'String';
        expect(string.charAt(1)).toBe('t');
        expect(string[0]).toBe('S');
        expect(string.charAt(8)).toBe('');
        expect(string[8]).toBe(undefined);
    });

    it('Char position', function () {
        var string = "position";
        expect(string[0] + string[1] + string[2]).toBe('pos');
    });

    it('toUpperCase toLowerCase', function () {
        var string = 'case';
        expect(string.toUpperCase()).toBe('CASE');
        string = string.toUpperCase();
        expect(string.toLowerCase()).toBe('case');
    });

    it('repeat', function () {
        var string = 'repeat';
        expect(string.repeat(2)).toBe("repeatrepeat");
    });

    it('string indexOf', function () {
        var string = 'Index of string';
        expect(string.indexOf('Index') === 0).toBeTruthy();
    });

    it('replace', function () {
        var string = 'replace';
        expect(string.replace('r', 'R')).toBe('Replace');
    });

    it('Slice', function () {
        var string = 'Slice';
        expect(string.slice(0, 2)).toBe('Sl');
        expect(string.slice(2)).toBe('ice');
    });

    it('Substr', function () {
        var string = 'Substr';
        expect(string.substr(2)).toBe('bstr');
        expect(string.substr(2, 3)).toBe('bst');
    });

    it('Substring', function () {
        var string = 'SubString';
        expect(string.substring(3)).toBe('String');
        expect(string.substring(1, 3)).toBe('ub');
    });

    it('trim', function () {
        var string = '  trim  ';
        expect(string.trim()).toBe('trim');
    });

    it('Concat', function () {
        var string = 'Con';
        string1 = 'cat';
        expect(string.concat(string1, 'cat')).toBe('Concatcat');
        expect(string + string1).toBe('Concat');
    });

    it('includes', function () {
        var string = 'includes';

        expect(string.includes('nc')).toBeTruthy();
    });

    it('split', function () {
        var string = 'Jasmine work';
            string1 = 'cat';
        expect(string.split()).toEqual(['Jasmine work']);
        expect(string.split(' ')).toEqual(['Jasmine', 'work']);
        expect(string1.split('')).toEqual(['c', 'a', 't']);
        expect(string1.split('a')).toEqual(['c', 't']);
    });

});

describe('endsWith, startsWith', function () {

    var string = 'startEnd';

    it('endsWith', function () {
        expect(string.endsWith('d')).toBeTruthy();
    });

    it('startsWith', function () {
        expect(string.startsWith('s')).toBeTruthy();
        expect(string.startsWith("e")).toBeFalsy();
    });

});