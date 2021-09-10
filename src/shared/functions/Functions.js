function adjustStateObjectData({objectToChange,setObjectToChange, atributeToChange,atributeNewValue}) { 
    const entriesArray = Object.entries(objectToChange);
    entriesArray.forEach( (SingleAtributeArray) => {if(SingleAtributeArray[0] === atributeToChange){SingleAtributeArray[1] = atributeNewValue }}  )
    setObjectToChange(Object.fromEntries(entriesArray))
}

export {
    adjustStateObjectData
}