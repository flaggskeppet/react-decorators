/*
    Method Decorator
    Modifies a method

    Returns a function accepting 3 parameters:
    The target:
    Either the constructor function of the class for a static member, or the prototype of the class for an instance member.

    The key:
    The method name.

    The descriptor:
    The Property Descriptor for the method.

    Note: Does not work though...
    
*/
export default function timeout(milliseconds = 0) {

    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function () {
            setTimeout(() => {
                originalMethod.apply(this, arguments);
            }, milliseconds);
        };
        return descriptor;
    }

}