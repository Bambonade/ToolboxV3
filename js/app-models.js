function Tool(name, category){
    this.id = generateId();
    this.name = name ?? '';
    this.category = category ?? '';
}

function generateId(){
    generateId.counter = generateId.counter ?? 1;
    return generateId.counter++;
}