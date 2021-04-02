function factory(library, orders){
  let result = [];
  
  orders.forEach(order => {
    // const current = {name: order.template.name};
    const current = Object.assign({}, order.template);
    order.parts.forEach(x => current[x] = library[x]);
    result.push(current);
  });
  return result;
}

// const factory = (library, orders) => orders.map( order => Object.assign({}, order.template, order.parts.reduce((a, c) => Object.assign(a, {[c]: library[c]}),{})))



const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  }
};


const orders = [
  {
    template: { name: 'ACME Printer' },
    parts: ['print']
  },
  {
    template: { name: 'Initech Scanner' },
    parts: ['scan']
  },
  {
    template: { name: 'ComTron Copier' },
    parts: ['scan', 'print']
  },
  {
    template: { name: 'BoomBox Stereo' },
    parts: ['play']
  }
];


const products = factory(library, orders);
console.log(products);






