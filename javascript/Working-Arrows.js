function slideColumn(columnId, direction) {
    const column = document.getElementById(columnId);
    const containerWidth = document.querySelector('.container').offsetWidth;
    const columnWidth = column.offsetWidth;

    let newPosition;
    if (direction === 'right') {
        newPosition = containerWidth;
    } else {
        newPosition = -columnWidth;
    }

    column.style.transform = `translateX(${newPosition}px)`;

    setTimeout(() => {
        if (direction === 'right') {
            column.style.transition = 'none';
            column.style.transform = `translateX(-${columnWidth}px)`;
            setTimeout(() => {
                column.style.transition = 'transform 0.5s ease-in-out';
                column.style.transform = 'translateX(0)';
            }, 50);
        } else {
            column.style.transition = 'none';
            column.style.transform = `translateX(${containerWidth}px)`;
            setTimeout(() => {
                column.style.transition = 'transform 0.5s ease-in-out';
                column.style.transform = 'translateX(0)';
            }, 50);
        }
    }, 500);
}