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
        let tag;
        let content;

        let nodes = blocks.map((block, index) => {
            if(block.startsWith('#')) {
                return this._getHeading(block);
            }
            else { // is paragraph
                tag = 'p';
                content = block;
            }

            return {
                tag,
                content: this.breakInline(content, options),
            }
        });

        return nodes
    },

    breakInline(content, options = {}) {
        

        return content;
    },
    
    generateHTML(nodes, options = {}) {
        return nodes.reduce((output, node) => {
            if(typeof node.content === 'string') {
                content = node.content;
            }
            else {
                content = this.generateHTML(node.content, options);
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
            content: this.breakInline(heading),
            attributes: null,
        };
    }

};

export default parser;
module.export = parser;