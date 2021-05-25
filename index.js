(() => {

    function createListItem(textContent) {
        const xAxis = boardWidth / 4;
        const yAxis = (boardHeight / 4)
        const width = boardWidth / 2;
        const height = textFontSize;
        const rect = createElement('rect');
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', 'black');
        rect.setAttribute('x', xAxis);
        rect.setAttribute('y', yAxis);
        rect.classList.add('list-item')

        const text = createText(textContent, yAxis + height / 1.5);

        return [rect, text];
    }

    function createText(textContent, yAxis) {
        const text = createElement('text');
        text.textContent = textContent;
        text.setAttribute('x', '50%');
        text.setAttribute('y', yAxis);
        text.setAttribute('text-anchor', 'middle')
        text.setAttribute('font-size', `${textFontSize / 2}px`);
        text.setAttribute('font-family', 'fantasy');
        text.setAttribute('fill', 'white');
        return text;
    }

    function createGroup(...children) {
        const previousSibiling = document.querySelectorAll('svg svg');
        const margin = previousSibiling.length * 1.25;
        const yAxis = textFontSize * margin;
        const group = createElement('svg');
        group.setAttribute('x', 0);
        group.setAttribute('y', yAxis);
        children.forEach((child) => {
            group.appendChild(child);
        });
        return group;
    }

    const svg = createElement('svg');
    svg.setAttribute('width', boardWidth);
    svg.setAttribute('height', boardHeight);
    svg.classList.add('menu')

    document.body.appendChild(svg);

    const [svgItem, svgText] = createListItem('SVG');
    const [canvasItem, canvasText] = createListItem('Canvas');
    svg.appendChild(createGroup(svgItem, svgText));
    svg.appendChild(createGroup(canvasItem, canvasText));

    canvasItem.onclick = () => {
        svg.remove();
        play('canvas');
    };
    svgItem.onclick = () => {
        svg.remove();
        play('svg')
    };
})();