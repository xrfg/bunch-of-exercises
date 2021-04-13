const obj = {
    name: 'Joe',
    getName: function () {
        console.log(this);

        return `hello ${this.name}`;
    }
};

console.log(obj.name); // Joe
console.log(obj.getName()); // hello

console.log('\n');
console.log('\n');

// How to lose this
const personName = obj.name;
const personGetName = obj.getName;

console.log(personName); // Joe
console.log(personGetName()); // Function Object


console.log('\n');
console.log('\n');
console.log(this); // {}
// Bind
const personGetNameBound = personGetName.bind({
    name: 'Jane'
});

console.log(personGetNameBound());

const testBound = obj.getName.bind(obj);
console.log(testBound()); // Jane

module.exports = obj;