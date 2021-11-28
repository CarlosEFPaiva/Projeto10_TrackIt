function adjustStateObjectData({ objectToChange, setObjectToChange, atributesToChange, atributesNewValues }) {
    const newObject = { ...objectToChange };
    atributesToChange.forEach((atribute, index) => {
        newObject[atribute] = atributesNewValues[index];
    })
    setObjectToChange(newObject);
}

function todaysHabitsCompletionPercentage (todaysHabits) {
    const totalNumberOfHabits = todaysHabits.length
    const numberOfCompletedHabits = todaysHabits.filter( ({done}) => done ).length;
    return totalNumberOfHabits === 0 ? 0 : Math.round(((numberOfCompletedHabits / totalNumberOfHabits) * 100));
}

export {
    adjustStateObjectData,
    todaysHabitsCompletionPercentage
}