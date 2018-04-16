/*
    Class/Function Decorator
    Modifies the decorated class

    Used without parenthesises, like this: @logRender
*/
export default function logRender(component) {
    const original = component.prototype.render;

    component.prototype.render = function () {
        console.log(`Rendering ${component.name}...`);
        return original.apply(this, arguments);
    };
}