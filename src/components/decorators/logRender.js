/*
    Class/Function Decorator
    Modifies the decorated class

    Used without parenthesises, like this: @logRender
*/
export default function logRender(WrappedComponent) {
    const original = WrappedComponent.prototype.render;

    WrappedComponent.prototype.render = function () {
        console.log(`Rendering ${WrappedComponent.name}...`);
        return original.apply(this, arguments);
    };
}