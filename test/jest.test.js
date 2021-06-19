test('Devo conhecer as prinicipais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
})

test('Devo saber trabalhar com objetos', () => {
    const obj = {
        name: 'John', mail: 'john@mail.com'
    };

    expect(obj).toHaveProperty('name');
})