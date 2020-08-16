(function() {
    populateList('.main-nav > .list > .item', ['Falcon 9', 'Falcon Heavy', 'Dragon', 'Updates']);

    function populateList(selector, list) {
        const node = document.querySelector(selector);
        const parent = node.parentElement;
        const next = node.nextElementSibling;

        list.forEach(function(value) {
            const component = node.cloneNode(true);
            component.innerHTML = fill(component.innerHTML, 'value', value);
            parent.insertBefore(component, next);
        });
        parent.removeChild(node);
    }

    function fill(str, name, value) {
        return str.split('{{' + name + '}}').join(value);
    }
}());
