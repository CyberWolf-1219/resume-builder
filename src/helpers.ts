export function printPrevent(e: KeyboardEvent) {
    if (e.ctrlKey && e.key == 'p') {
        e.preventDefault();
        e.stopImmediatePropagation();
    }

}