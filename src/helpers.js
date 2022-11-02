// returns random item from array

function choice(items) {
    let randIdx = Math.floor(Math.random() * items.length);
    return items[randIdx]
}

// Search item, returns array without found item OR undefined if not found

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            items.splice(i, 1);
            return [items]
        }
    }
    return undefined;
}

export {choice, remove}