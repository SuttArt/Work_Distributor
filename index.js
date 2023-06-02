import { writeFile } from 'fs';
import data from './data/Charlie Group.json' assert { type: "json" };

const main_array = [...data]
const first_array = []
const second_array = []
const third_array = []
const fourth_array = []

// Shuffle the array so that each participant gets a random job. This will help achieve fairness in the distribution of the work.
shuffle(main_array);

while (main_array.length > 0) {

    for (let i = 0; i <= 3; i++){
        let tmp_pop_value = main_array.pop()

        if (tmp_pop_value !== undefined) {
            switch (i) {
                case 0: first_array.push(tmp_pop_value);
                    break;
                case 1: second_array.push(tmp_pop_value);
                    break;
                case 2: third_array.push(tmp_pop_value);
                    break;
                case 3: fourth_array.push(tmp_pop_value);
                    break;
                default:
                    console.log(`Sorry, we are out of ${i}.`);
            }
        }
    }
}



write_JSON_file("first_array", first_array);
write_JSON_file("second_array", second_array);
write_JSON_file("third_array", third_array);
write_JSON_file("fourth_array", fourth_array);

/**
 * Write the whole Array (with Array syntax) to the file
 *
 * @param file_name file name
 * @param array Array we write to the file
 */
function write_JSON_file(file_name, array) {
    writeFile('./data/'+ file_name +'.json', JSON.stringify(array, null, 1), (err) => {
        if (err) throw err;
        console.log(file_name + ' Saved!');
    })
}

/**
 * Shuffles array in place. Use the modern version of the Fisher–Yates shuffle algorithm. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
