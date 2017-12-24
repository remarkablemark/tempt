module.exports = [
  // no match
  {
    template: 'Hello, {{name}}!',
    expected: 'Hello, {{name}}!',
  },

  // single
  {
    template: 'Hello, {{name}}!',
    data: { name: 'world' },
    expected: 'Hello, world!',
  },

  // single with space
  {
    template: 'Hello, {{ name }}!',
    data: { name: 'world' },
    expected: 'Hello, world!',
  },

  // single with spaces
  {
    template: 'Hello, {{  name  }}!',
    data: { name: 'world' },
    expected: 'Hello, world!',
  },

  // two different
  {
    template: '{{greeting}}, {{name}}!',
    data: { greeting: 'Hello', name: 'world' },
    expected: 'Hello, world!',
  },

  // two same
  {
    template: 'I am the {{food}} man. They are the {{ food }} men.',
    data: { food: 'egg' },
    expected: 'I am the egg man. They are the egg men.',
  },

  // data as array
  {
    template: '{{0}}, {{ 1 }}, {{  2  }}!',
    data: ['Lights', 'Camera', 'Action'],
    expected: 'Lights, Camera, Action!',
  },
];
