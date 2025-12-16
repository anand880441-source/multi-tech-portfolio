function frequencyCount(arr) {
    const frequency = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    }

    let mostFrequentElement;
    let maxFrequency = 0;

    for (const element in frequency) {
        if (frequency[element] > maxFrequency) {
            maxFrequency = frequency[element];
            mostFrequentElement = element;
        }
    }

    console.log(`Most frequent element: "${mostFrequentElement}"`);
    console.log(`Frequency: ${maxFrequency}`);

    return { element: mostFrequentElement, frequency: maxFrequency };
}

frequencyCount(["a", "a", "b", "f", "y", "p"]);