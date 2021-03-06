(function() {
    const data = {
        'menu-1': ['Falcon 9', 'Falcon Heavy', 'Dragon', 'Updates'],
        'menu-2': ['About', 'Gallery', 'Shop'],
        'features': [
            { name: 'height', metric: '70 m', us: '229.6 ft' },
            { name: 'diameter', metric: '12.2 m', us: '39.9 ft' },
            { name: 'mass', metric: '1,420,788 kg', us: '3,125,735 lb' },
            { name: 'payload to LEO', metric: '63,800 kg', us: '140,660 lb' },
            { name: 'payload to GTO', metric: '26,700 kg', us: '58,860 lb' },
            { name: 'payload to MARS', metric: '16,800 kg', us: '37,040 lb' } ],
        'menu-footer': ['Twitter', 'Youtube', 'Instagram', 'Flickr', 'LinkedIn', 'Privacy', 'Policy']
    };

    populate(data);

    function populate(map) {
        const elements = document.querySelectorAll('[data-list]');
        elements.forEach(function(element) {
            const key = element.dataset.list;
            const list = map[key];
            populateList(element, list);
        });
    }

    function populateList(node, list) {
        if (typeof node === 'string') {
            node = document.querySelector(node);
        }
        const parent = node.parentElement;
        const next = node.nextElementSibling;

        list.forEach(function(row) {
            const component = node.cloneNode(true);
            if (typeof row !== 'object') {
                row = { value: row };
            }
            component.innerHTML = fillData(component.innerHTML, row);
            parent.insertBefore(component, next);
        });
        parent.removeChild(node);
    }

    function fillData(str, row) {
        let val = str;
        Object.keys(row).forEach(function(key) {
            val = fill(val, key, row[key]);
        });

        return val;
    }

    function fill(str, name, value) {
        return str.split('{{' + name + '}}').join(value);
    }
}());
