(function () {
    const template =
        `bsonType: 'object',
        required: [{{req}}],
        additionalProperties: false,
        properties: {
            _id: {
                bsonType: 'objectId',
                description: 'must be a string and is required',
            },
            {{props}}
        },`;
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const button = document.getElementById('convert');
    if (button && input && output) {
        button.addEventListener('click', () => convert(input.value));
        input.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' && e.ctrlKey) convert(input.value);
        })
    }

    function convert(interface) {
        const props = [];
        const parseProps = interface.match(/\w+\??\s*:\s*\w+;/gm);
        if (!parseProps) {
            snackbar('Interface has no properties')
            return;
        }
        parseProps.forEach(prop => {
            props.push({
                name: prop.split(':')[0].trim().replace(/\?/g, ''),
                type: prop.split(':')[1].trim().replace(/;/, ''),
                required: !prop.match(/\?/),
            });
        });
        for (let i = 0; i < props.length; i++) {
            if (props[i].type === 'boolean') props[i].type = 'bool';
        }

        const reqStr = props.filter(p => p.required).reduce((acc, p) => {
            return acc + `'${p.name}', `;
        }, '').replace(/(, )$/, '');
        const propsStr = props.reduce((acc, p) => {
            return acc +=
                `${p.name}: {
                    bsonType: '${p.type}',
                    description: 'must be a ${p.type}${p.required ? ' and is required\',' : '\','}
            },
            `;
        }, '');
        output.value = template.replace('{{req}}', reqStr).replace('{{props}}', propsStr);
    }

    function snackbar(message) {
        const bar = document.createElement('div');
        bar.className = 'snackbar enter';
        bar.innerHTML = message;
        document.body.appendChild(bar);
        setTimeout(() => {
            bar.className = 'snackbar leave';
            setTimeout(() => {
                document.body.removeChild(bar);
            }, 500);
        }, 3000);
    }
})()