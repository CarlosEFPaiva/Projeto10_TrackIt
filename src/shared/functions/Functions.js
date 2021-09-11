function adjustStateObjectData({objectToChange,setObjectToChange, atributesToChange,atributesNewValues}) { 
    const entriesArray = Object.entries(objectToChange);
    atributesToChange.forEach( (atributeName, atributeIndex) => 
        entriesArray.forEach( (SingleAtributeArray) => 
            {if(SingleAtributeArray[0] === atributeName){SingleAtributeArray[1] = atributesNewValues[atributeIndex] }}
        )
    )
    setObjectToChange(Object.fromEntries(entriesArray))
}

function TodaysHabitsCompletionPercentage (todaysHabits) {
    const totalNumberOfHabits = todaysHabits.length
    const numberOfCompletedHabits = todaysHabits.filter( ({done}) => done ).length;
    return totalNumberOfHabits === 0 ? 0 : Math.round(((numberOfCompletedHabits / totalNumberOfHabits) * 100));
}

export {
    adjustStateObjectData,
    TodaysHabitsCompletionPercentage
}