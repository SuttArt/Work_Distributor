# Work_Distributor

This is a small script, written in JavaScript, to distribute the work in the "Fortgeschrittene Forschungsmethoden 
der Mensch-Computer-Interaktion" module project.
The project consists of writing a research paper of the "Research Review" type, each participant has to check a large 
number of research papers found in the search process. 
The person who would get the first pages of the search would do more work than the person who would get the last pages of the search. 
To balance this aspect, this script is needed. The search is done using [ACM Digital Library](https://dl.acm.org/). 
Then all found works are put into Zotero, and from Zotero they are exported in JSON format. All the steps just described are manual work.

Then the JSON file containing a large array with objects (scientific papers) is placed in the script, shuffled 
(this script uses Fisher-Yates shuffle algorithm) and evenly distributed among other arrays. Since there are four participants 
who check the papers, the original arrays are also four.

The arrays are then written to new JSON files and can be imported into Zotero, for more convenient operation.


**Possible problems:**
- The project uses a version of node (v18.16.0) in which importing local JSON files is supported as an experimental feature.

- JavaScript is not the most secure language, theoretically the script could crash when working with a lot of data.

- The method of writing arrays to file was chosen the simplest (due to laziness of the author), so if you notice any errors, 
especially when writing huge arrays - change the way of writing arrays to file (presumably you can use createWriteStream 
together with writeStream from fs library from node.js)

-----

# What you need

- [node.js](https://nodejs.org/en) (author uses v18.16.0)

-----

# How to use

1. Do all manual work to get JSON file with an array of papers.
2. Name this JSON file "Charlie Group.json" or change the name at the index.js and put them into "data" folder.
3. use command: `node index.js` or if you have (probably) installed npm : `npm run start_script`
4. Great, you can find your new JSON files at the "data" folder.

