let rules = [
    // image
    {
        regex: /!\[(.*)\]\((.*)\)/gi,
        replace: {
            tag: 'img',
            attributes: {
                src: '$2',
                alt: '$1',
            }
        }
    },
    // link
    {
        regex: /\[(.*)\]\((.*)\)/gi,
        replace: {
            tag: 'a',
            attributes: {
                href: '$2',
                title: '$1',
            },
            content: '$1'
        }
    }
];

export default rules;
module.export = rules;
