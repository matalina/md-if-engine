let parser = {

    render(markdown, options = {}) {
        let nodes = this.parse(markdown, options);
    
        let output = this.generateHTML(nodes, options);
    
        console.log(output);

        return output;
    },

    parse(markdown, options = {}) {
        let nodes = this.breakBlocks(markdown);

        return nodes;
    },

    breakBlocks(markdown, options = {}) {
        let blocks = markdown.split("\n\n");
        let tag = null;
        let content = block;

        let nodes = blocks.map((block, index) => {
            if(block.startsWith('#')) {
                let { t, c } = this._getHeading(block);
                tag = t;
                content = c;
                
            }
            else { // is paragraph
                tag = 'p';
            }

            return {
                tag,
                content: this.breakInline(content, options),
            }
        });

        return nodes
    },

    breakInline(content, options = {}) {

    },
    
    generateHTML(nodes, options = {}) {
        return nodes.reduce((output, node) => {
            let content = node.content;
            if(node.children !== undefined) {
                // generate children nodes html
            }
            let string = `${output}<${node.tag}>${content}</${node.tag}>\n\n`;
            
            return string;
        },'');  
    },

    _getHeading(block) {
        let parts = block.split(' ');

        let front = parts.shift();
        let heading = parts.join(' ');
        let tag = 'p';

        if(front.length <= 6) {
            tag = `h${front.length}`;
        }

        return {
            tag,
            content: heading,
        };
    }

};

export default parser;
module.export = parser;