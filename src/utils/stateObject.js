function adjustStateObjectData(
    { objectToChange, setObjectToChange, atributesToChange, atributesNewValues },
) {
    const newObject = { ...objectToChange };
    atributesToChange.forEach((atribute, index) => {
        newObject[atribute] = atributesNewValues[index];
    });
    setObjectToChange(newObject);
}

export {
    adjustStateObjectData,
};
